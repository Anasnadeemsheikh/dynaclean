
const initialstate={
    counter=0
}


const binData=(state=initialstate,action)=>{
    switch(action.type){
        case 'INCREASE': 
        return{
            ...state,
            counter:state.counter++
        }
    }
}


export default binData;  