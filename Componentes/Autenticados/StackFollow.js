import {  createStackNavigator, createAppContainer } from 'react-navigation'
import  TabFollow   from './TabFollow'
import Profile from './Profile';
import Publicacion from './Publicacion';
import Comentarios from './Comentarios';

const StackFollow = createStackNavigator({
    TabFollow: {
        screen: TabFollow,
        navigationOptions: {
            header: null,
        }
    },
    Autor: {
        screen: Profile,
    },
    Publicacion: {
        screen: Publicacion,
    },
    Comentarios:{
        screen: Comentarios,
    }
},{
    initialRoute: 'TabFollow'
})

export default createAppContainer(StackFollow)