import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation'
import Follow from './Follow'

const TabFollow = createMaterialTopTabNavigator({

        Follow:{
            screen: Follow,
        },
        Followers: {
            screen: Follow,
        },  
},        {
    
        tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: '#586589',
            labelStyle: {
              fontSize: 12,
            },
            tabStyle: {
             height: 60,
             paddingTop:23,
            },
            style: {
              backgroundColor: 'white',
            },
          }

})

export default createAppContainer (TabFollow)