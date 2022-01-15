import React from 'react';
import {StyleSheet, Image} from "react-native";
import topo from '../../assets/topo.png'

export default function Leilao(){
    return <Image source ={topo}  style={estilo.topo}/>
}

const estilo = StyleSheet.create({
    topo:{
        width:"100%",
        height:200,
    }
});