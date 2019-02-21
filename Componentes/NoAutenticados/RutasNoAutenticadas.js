//import liraries
import React from 'react';
import { Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { FluidNavigator } from 'react-navigation-fluid-transitions'
import SignIn from './SignIn'
import SignUp from './SignUp'
// create a component



const RutasNoAutenticadas = FluidNavigator(
    {
        SignIn: {
            screen: SignIn,
        },
        SignUp: {
            screen: SignUp,
        },
    },{  

        headerMode: 'none',
    }
)
//make this component available to the app
export default createAppContainer(RutasNoAutenticadas);