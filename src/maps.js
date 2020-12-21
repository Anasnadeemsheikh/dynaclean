import React, {useState} from 'react';
import MapGL from 'react-map-gl';
import * as location from "./location"
function Maps(){
    const TOKEN="pk.eyJ1IjoiYW5hc25hZGVlbXNoZWlraCIsImEiOiJja2kxa2J6enMwMWprMndwYWd0NmIwZHY3In0.rxQDw8BqDleyTMby9WZPKg";
    const [mvs, setmvs] =useState(location.isl);
    const abc = ({viewState})=> setmvs(viewState);
    return(
            <MapGL
            width='100%'
            height='100%'
            viewState={mvs}
            mapStyle='mapbox://styles/mapbox/streets-v11'
            onViewStateChange={abc}
        mapboxApiAccessToken={TOKEN}
            />
    )
}
export default Maps;