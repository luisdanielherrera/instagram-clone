//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {connect} from 'react-redux'
import { autenticacion } from './Store/servicios/Firebase';
import RutasAutenticadas from './Componentes/Autenticados/RutasAutenticadas';
import RutasNoAutenticadas from './Componentes/NoAutenticados/RutasNoAutenticadas';
import { actionEstablecerSesion, actionCerrarSesion } from './Store/ACCIONES';

// create a component
class Seleccion extends Component {
    componentDidMount(){
        this.props.autenticacion()
    }
    render() {
        return (
            <View style={styles.container}>
                {this.props.usuario ? <RutasAutenticadas />:<RutasNoAutenticadas />}
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const mapStateTopProps = state => {
    return{
        usuario: state.reducerSesion,
    }
}

const mapDispatchToProps = dispatch => ({
    autenticacion: () => {
        autenticacion
        .onAuthStateChanged(function(usuario) {
            if (usuario) {
              // usuario is signed in.
              // console.log('nuevo usuario', usuario);
                dispatch(actionEstablecerSesion(usuario))
              // ...
            } else {
              // usuario is signed out.
              // console.log('No existe session');
                dispatch(actionCerrarSesion())
              // ...
            }
          });
            
    }
})

//make this component available to the app

export default connect (mapStateTopProps, mapDispatchToProps)(Seleccion)
