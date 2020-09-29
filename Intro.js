import AsyncStorage from '@react-native-community/async-storage';
import React,{Component} from 'react';
import {View, Text, Button, StyleSheet, ActivityIndicator} from 'react-native';

export default class Intro extends Component{
    render(){

        //로그인한 적이 있는지 검사..
        AsyncStorage.getItem('email').then((value)=>{
            if(value) this.props.navigation.replace('MainDrawerNav'); 
            else this.props.navigation.replace('LoginStackNav');
        });

        return (
            <View style={ styles.root }>
                <ActivityIndicator size="large" color="green"></ActivityIndicator>                
            </View>
        );
    }
}

const styles= StyleSheet.create({
    root: {flex:1, justifyContent:'center', alignItems:'center'}
}); 