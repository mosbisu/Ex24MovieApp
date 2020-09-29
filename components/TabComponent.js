import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

export default TabComponent= (props)=>{

    //탭 선택여부에 따른 글씨 색상 지정
    let color= props.selected? '#292929' : '#929292';

    //저 아래 만든 containerStyle객체의 borderColor값 지정
    containerStyle.borderColor= color;

    return (
        <TouchableOpacity onPress={props.onPress} style={containerStyle}>
            <Text style={{color: color}}>{props.label}</Text>
        </TouchableOpacity>
    );
}

const containerStyle={
    flex:1,
    borderBottomWidth:1,
    borderColor:'#929292',
    paddingBottom:8,
    alignItems:'center',
    justifyContent:'center'
};