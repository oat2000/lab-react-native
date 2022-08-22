import React, { useState }  from "react";
import { ImageBackground, StyleSheet, Text } from "react-native";
import Forecast from "./Forecast";

export default function Weather(props){ 
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })
    
    return (
        <ImageBackground source={require('../Cloud.jpg')} style={styles.backdrop}>
            <Text>Zip Code is {props.zipCode}</Text>
            
            <Forecast {...forecastInfo}/>
        </ImageBackground>
    )  
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        fontSize: 48
    }
}) 