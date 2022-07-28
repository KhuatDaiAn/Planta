import React from 'react'
import {Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import {HomeStack} from './screens/HomeStack'
import {SearchStack} from './screens/SearchStack';
import {Cart} from './screens/Cart';
import {ProfileStack} from './screens/ProfileStack';

export const ProductNavigation = (props) => {
    return (
        <Tab.Navigator 
            screenOptions={({route})=>({
                tabBarIcon: () => {
                    if(route.name== "HomeStack"){
                        return <Image source={require('../../../src/assets/images/home.png')}></Image>
                    }else if(route.name== "SearchStack"){
                        return <Image source={require('../../../src/assets/images/search.png')}></Image>
                    }else if(route.name== "Cart"){
                        return <Image source={require('../../../src/assets/images/shopping-cart.png')}></Image>
                    }else if(route.name== "ProfileStack"){
                        return <Image source={require('../../../src/assets/images/user.png')}></Image>
                    }
                },
                tabBarLabel: ({focused}) => {
                    if(route.name== "HomeStack" && focused){
                        return <Image source={require('../../../src/assets/images/cham.png')}></Image>
                    }else if(route.name== "SearchStack" && focused){
                        return <Image source={require('../../../src/assets/images/cham.png')}></Image>
                    }else if(route.name== "Cart" && focused){
                        return <Image source={require('../../../src/assets/images/cham.png')}></Image>
                    }else if(route.name== "ProfileStack" && focused){
                        return <Image source={require('../../../src/assets/images/cham.png')}></Image>
                    }
                    return null;
                },
                headerShown: false,
            })}
        >

            <Tab.Screen name="HomeStack" component= {HomeStack}/>
            <Tab.Screen name="SearchStack" component={SearchStack} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="ProfileStack" component={ProfileStack} />
        </Tab.Navigator>
    )
}

