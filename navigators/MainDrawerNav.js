import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MovieStackNav from './MovieStackNav';
import CommunityTabNav from './CommunityTabNav';

const Drawer= createDrawerNavigator();

export default function MainDrawerNav(){
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="MovieStackNav" component={MovieStackNav}></Drawer.Screen>
            <Drawer.Screen name="CommunityTabNav" component={CommunityTabNav}></Drawer.Screen>
        </Drawer.Navigator>
    );
}