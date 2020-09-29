import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

//Tab에 의해 전환될 screen 3개
import Community from '../screens_community/Community';
import Favor from '../screens_community/Favor';
import MAP from '../screens_community/MAP';

const Tab= createMaterialTopTabNavigator();

export default CommunityTabNav=()=>{
    return(
        <Tab.Navigator tabBarPosition="bottom">
            <Tab.Screen name="Community" component={Community}></Tab.Screen>
            <Tab.Screen name="Favor" component={Favor}></Tab.Screen>
            <Tab.Screen name="MAP" component={MAP}></Tab.Screen>
        </Tab.Navigator>
    );
}