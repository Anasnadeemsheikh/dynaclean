import React, {useEffect, useState} from 'react';
import firebase from "./firebase"
import './App.css';
import Maps from './maps';
import List from './list';
import MOCK_DATA from './MOCK_DATA.json'
 //const path = require('path');
  //   var fs = require('browserify-fs');
    //var path =  require("path");

function Dashboard(){
 /*  fs.mkdir("./src/data");
        fs.readFile("MOCK_DATA.json", 'utf-8', function(err, data) {
            console.log(data);
        });
   */
const [binsmode, setbinsmode] = useState(true);
const [routesmode, setroutesmode] = useState(false);
const [feedbackmode, setfeedbackmode] = useState(false);

const ref = firebase.database().ref();
   
  useEffect(() => {
    // ref
    //   //.doc() use if for some reason you want that firestore generates the id
    //   .doc(newBin.serial)
    //   .set(newBin)
    //   .catch((err) => {
    //     console.error(err);
    //   }); 

   ref.on("value", function(snapshot) {
    var data= [];
    data.push(snapshot.val());
    //fs.writeFile (path.resolve(__dirname, 'bindata.json'), JSON.stringify(data)); 
    MOCK_DATA.find((obj)=> obj.serial===25).percentage=76;
    console.log(MOCK_DATA.find((obj)=> obj.serial===25));
    var key;
        data.map((data)=>{
             key =Object.keys(data);
             var d = data[key[5]];
             console.log(d[0]);
             console.log(d[1]);
             
        });
   
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
  },[ref]);

const newBin = {
    serial: "1121",
    type: "mixed",
    loc: [33.721454, 73.044580],
    measured:"2020-04-11 13:33:07"
}




const binClick = () =>{
    
    setbinsmode(true);
    setroutesmode(false);
    setfeedbackmode(false);
}
const routesClick = () =>{
    
    setbinsmode(false);
    setroutesmode(true);
    setfeedbackmode(false);
}
const feedbackClick = () =>{
    
    setbinsmode(false);
    setroutesmode(false);
    setfeedbackmode(true);
    
}

const submitted = e =>{
    e.preventDefault();

}

    return(
        <div className="dashboard">
            <div className="dashboard-header">
            <div className="dashb">
            
            <text className="lable">
                DASHBOARD
            </text>
            <button onClick={binClick} className={binsmode ?  "Selected": "bins"} >
                Bins
            </button>
            <button onClick={routesClick} className={routesmode ?  "Selected": "routes"} >
                Routes
            </button>
            <button onClick={feedbackClick} className={feedbackmode ?  "Selected": "feedback"} >
                Feedback
            </button>  
         </div>
       <div >
            <form onSubmit={submitted} className="form">
                <input className="search-bar" type="text">
                </input>
                <button className="apply-filter" type="submit">
                    Apply
                </button>
                <button className="remove-filter" type="submit">
                    Remove Filter
                </button>
            </form>
            </div>
        </div>
        <div className="dashboard-filter">

        </div>
        <div className="dashboard-body">
             <div className="maps"> <Maps/></div>
             <div className="list"> <List/></div>
        </div>
        </div>
        
    );
}
export default Dashboard;