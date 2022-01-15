import React from 'react';
import {StyleSheet, Image, Dimensions, Text,View} from "react-native";
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

export default function Leilao(){
    return <>
        <Image source ={topo}  style={estilo.topo}/>
        <Text style = {estilo.titulo}> Detalhes do Leilão </Text>
        <View style ={estilo.leilao}>
            <Text style ={estilo.nome}>Leilão de  Reprodutores</Text>
            <View style = {estilo.fazenda}> 
                <Image source={logo} style={estilo.logoFazenda}></Image>
                <Text style ={estilo.nomeFazenda}>Toka do Jacré</Text>
            </View>
           
            <Text style ={estilo.descricao}>80 REPRODUTORES NELORE PO, AVALIADOS COM ANDROLOGICO.</Text>

        </View>
    </> 
}

const width = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
    topo:{
        width:"100%",
        height: 500/600 * width,
        
    },
    titulo:{
        width:"100%",
        position:"absolute",
        textAlign: "center",
        fontSize: 30,
        lineHeight:26,
        color:"white",
        fontWeight:"bold",
        padding:16,
    },
    leilao:{
        paddingVertical: 8,
        paddingHorizontal:16
    },
    nome:{
        color:"black",
        fontSize:26,
        lineHeight:42,
        fontWeight:"bold"
    },
    fazenda:{
        flexDirection:"row",
        paddingVertical: 12,
    },
    logoFazenda:{
        width:90,
        height:60,
        marginLeft:5
    },
    nomeFazenda:{
        fontSize:16,
        lineHeight:26,
        paddingHorizontal:10
    },
    descricao:{
        color:"black",
        fontSize:16,
        lineHeight:26,
    } 
});

