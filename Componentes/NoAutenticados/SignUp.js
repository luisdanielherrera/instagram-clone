//import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, ScrollView } from 'react-native'
import { Transition } from 'react-navigation-fluid-transitions'
import { connect } from 'react-redux'
import SignUpForm from './SignUpForm'
import { actionRegistro } from '../../Store/ACCIONES'
import SeleccionarImagen from '../SeleccionarImagen';

// create a component
class SignUp extends Component {
    registroDeUsuario = (values) => {
        //  console.log('registroDeUsuario',values);
        this.props.registro(values)
    }
    render() {
        // console.log(this.props.numero);
        const { navigation } = this.props
        return (
            <Transition appear='horizontal'>
                <View style={styles.container}>
                    <SeleccionarImagen />
                    <SignUpForm registro={this.registroDeUsuario} />
                    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                        <View style={styles.buttons}>
                            <Text style={styles.buttonText}>Sign In</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </Transition>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 22,
    },
    photo: {
        alignItems: 'center',
        marginTop: 60,
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#303030',
        height: 53.3,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        marginBottom: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

//make this component available to the app

const mapStateToProps = state => {
    return {
        numero: state.reducerPrueba,
    }
}

const mapDispatchToProps = dispatch => ({
    registro: (values) => {
        dispatch(actionRegistro(values))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)