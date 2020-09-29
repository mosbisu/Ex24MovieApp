import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';

export default class SubCatalogList extends Component{
    state={
        data:[],
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
                
                <FlatList
                    horizontal={true}
                    data={this.state.data}
                    renderItem={ ({item, index})=>{
                        return (
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={()=>this.props.onPress(item.id)}
                                style={{paddingLeft:4, paddingRight:4}}>
                                <Image
                                    source={{uri:item.large_cover_image}}
                                    style={{width:140, height:200}}></Image>
                            </TouchableOpacity>
                        );
                    }}
                    
                    keyExtractor={(item, index)=>"Sub"+index}>                    
                </FlatList>
            </View>
        );
    }

    loadData= ()=>{
        fetch(this.props.uri)
        .then(response=>response.json())
        .then(json=>this.setState({data:json.data.movies}))
        // .then(response=>response.text())
        // .then(resText=>alert(resText));
    }

    componentDidMount(){
        if(this.props.uri) this.loadData();
    }
}

const styles= StyleSheet.create({
    container:{marginTop:8, marginBottom:8},
    titleContainer:{padding:8},
    title:{fontSize:16, fontWeight:'bold'}
});