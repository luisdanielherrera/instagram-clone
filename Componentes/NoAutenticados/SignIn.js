//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image,TouchableWithoutFeedback } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions'
import SignInForm from './SignInForm'
import socialmin from '../../assets/social-min.png'
import {connect} from 'react-redux'
import {actionLogin} from '../../Store/ACCIONES'

// create a component
class SignIn extends Component {
    signinDeusuario = (values) => {
        // console.log(values);
        this.props.login(values)
    }
    render() {
        const { navigation } = this.props
        return (
            <Transition appear='horizontal'>
                <View style={styles.container}>
                    <View style={styles.photo}>
                        <Image source={socialmin}
                            style={{ width: 150, height: 150 }} />
                    </View>
                    <SignInForm  login={this.signinDeusuario}/>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('SignUp')}>
                        <View style={styles.buttons}>
                                <Text style={styles.buttonText}>Sign Up</Text>
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
        marginBottom: 40,
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

const mapStateToProps = state => {
    return {
        prop: state.prop
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        login: (datos) => {
           dispatch(actionLogin(datos))
        } 
    }
    
}


export default connect(mapStateToProps, mapDispatchToProps)(SignIn)