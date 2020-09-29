import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import BigCatalog from '../components_movie/BigCatalog';

export default class MovieDetail extends Component{
    state={
        data:null, //영화상세정보 저장할 변수
    }
    render(){
        return this.state.data?
        (
            <View style={{flex:1}}>
                <BigCatalog movie={this.state.data}></BigCatalog>

                <View>
                    <Text style={styles.title}>영화정보</Text>
                    <View style={styles.infoContainer}>
                        <Text>{this.state.data.runtime}분</Text>
                        <Text>평점 : {this.state.data.rating}</Text>
                        <Text>좋아요 : {this.state.data.like_count}</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.title}>줄거리</Text>
                    <Text style={styles.description}>{this.state.data.description_full}</Text>
                </View>
            </View>
        ) : 
        (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator size="large" color="#E70915"></ActivityIndicator>
            </View>
        );
    }

    loadData=()=>{
        const {id}= this.props.route.params;
        const url= 'https://yts.lt/api/v2/movie_details.json?movie_id='+id+'&with_image=true&with_cast=true';

        fetch(url)
        .then(response=>response.json())
        .then(json=>this.setState({data:json.data.movie}));
    }

    componentDidMount(){
        this.loadData();
    }
}

const styles= StyleSheet.create({
    root:{flex:1, backgroundColor:'#FEFFFF'},
    title:{
        fontSize:16,
        fontWeight:'bold',
        paddingTop:24,
        paddingRight:16,
        paddingBottom:8,
        paddingLeft:16
    },
    infoContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:16,
        paddingRight:16
    },
    description:{
        paddingLeft:16,
        paddingRight:16
    }
});
