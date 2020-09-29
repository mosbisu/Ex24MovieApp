import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MovieList from '../screens_movie/MovieList';
import MovieDetail from '../screens_movie/MovieDetail';

const Stack= createStackNavigator();

//선언적 함수표현으로도 함수형(stateless) 컴포넌트 제작 가능
export default function MovieStackNav(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="MovieList" component={MovieList}></Stack.Screen>
            <Stack.Screen name="MovieDetail" component={MovieDetail}></Stack.Screen>
        </Stack.Navigator>
    );        
}