//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { autenticacion } from '../../Store/servicios/Firebase';

// create a component
class Profile extends Component {
    render() {
        const{navigation}= this.props
        return (
            <View style={styles.container}>
                <Text>Profile</Text>
                <Button 
                    title='Publicacion'
                    onPress={()=>{
                        navigation.navigate('Publicacion')
                    }}
                />
                <Button 
                    title='Cerrar Sesion'
                    onPress={()=>{
                       autenticacion.signOut()
                    }}
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dbdbdb',
    },
});

//make this component available to the app
export default Profile;
