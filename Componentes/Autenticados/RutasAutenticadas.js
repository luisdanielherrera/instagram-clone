import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import React from 'react'
import StackHome from './StackHome'
import StackSearch from './StackSearch'
import Add from './Add'
import StackFollow from './StackFollow'
import Profile from './Profile'
import { Ionicons } from '@expo/vector-icons'

const RutasAutenticadas = createMaterialBottomTabNavigator({
    Home: {
        screen: StackHome,
        navigationOptions: () => ({
            activeTintColor: 'black', // active icon color
            inactiveTintColor: '#586589',  // inactive icon color
            tabBarIcon: ({ tintColor }) => (
                <Ionicons
                    name="md-home"
                    size={26}
                    color={tintColor} />
            ),
        })
    },
    Search: {
        screen: StackSearch,
        navigationOptions: () => ({
            activeTintColor: 'black', // active icon color
            inactiveTintColor: '#586589',  // inactive icon color
            tabBarIcon: ({ tintColor }) => (
                <Ionicons
                    name="md-search"
                    size={26}
                    color={tintColor} />
            ),
        })
    },
    Add: {
        screen: Add,
        navigationOptions: () => ({
            activeTintColor: 'black', // active icon color
            inactiveTintColor: '#586589',  // inactive icon color
            tabBarIcon: ({ tintColor }) => (
                <Ionicons
                    name="md-add"
                    size={26}
                    color={tintColor} />
            ),
        })
    },
    Follow: {
        screen: StackFollow,
        navigationOptions: () => ({
            activeTintColor: 'black', // active icon color
            inactiveTintColor: '#586589',  // inactive icon color
            tabBarIcon: ({ tintColor }) => (
                <Ionicons
                    name="ios-people"
                    size={26}
                    color={tintColor} />
            ),
        })
    },
    Profile: {
        screen: Profile,
        navigationOptions: () => ({
            activeTintColor: 'black', // active icon color
            inactiveTintColor: '#586589',  // inactive icon color
            tabBarIcon: ({ tintColor }) => (
                <Ionicons
                    name="ios-person"
                    size={26}
                    color={tintColor} />
            ),
        })
    },
}, {
    labeled: false,
        barStyle: {
            backgroundColor: 'white',
            paddingBottom: 30,
            height: 50,
        }
    })

export default createAppContainer(RutasAutenticadas)