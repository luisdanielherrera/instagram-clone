import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback } from 'react-native'
import { Field, reduxForm } from 'redux-form'


const fieldNombre = (props) => {
    // console.log('fieldNombre', props);
    return (
        <View style={styles.textStyle}>
            <TextInput
                placeholder={props.nombrePlaceHolder}
                onChangeText={props.input.onChange}
                value={props.input.value}
                keyboardType={props.input.name === 'correo' ? 'email-address' : 'default'}
                autoCapitalize='none'
                secureTextEntry={!!(props.input.name === 'password' || props.input.name === 'confirmacion')}
                onBlur={props.input.onBlur}
            />
            <View style={styles.linea} />
            {
                props.meta.touched && props.meta.error && <Text style={{ color: '#961818' }}>{props.meta.error}</Text>
            }

        </View>
    )
}

const SignInForm = (props) => {
    //  console.log('SignInForm', props);
    return (
        <View>
            <Field name="correo" component={fieldNombre} nombrePlaceHolder="Escribe tu Correo" />
            <Field name="password" component={fieldNombre} nombrePlaceHolder="******" />
            <TouchableWithoutFeedback onPress={props.handleSubmit(props.login)}>
                <View style={styles.buttons}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    linea: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#afa8a8',
        height: 2,
    },
    lineaBlanca: {
        height: 16,
    },
    textStyle: {
        marginBottom: 16,
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
        marginBottom: 20,
        marginTop:20,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
      },
})

export default reduxForm({ form: 'SignInForm'})(SignInForm)