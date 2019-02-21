import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Button, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'
import { Field, reduxForm } from 'redux-form'

const fieldNombre = (props) => {
    //   console.log('fieldNombre', props);
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

const validate = (values) => {
    const errors = {}
    if (!values.nombre) {
        errors.nombre = 'requerido'
    } else if (values.nombre.length < 5) {
        errors.nombre = 'deben ser al menos 5 caracteres'
    } else if (values.nombre.length > 10) {
        errors.nombre = 'deben ser menor de 10 caracteres'
    }

    if (!values.correo) {
        errors.correo = 'requerido'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)) {
        errors.correo = 'correo invalido'
    }

    if (!values.password) {
        errors.password = 'requerido'
    } else if (values.password.length < 5) {
        errors.password = 'deben ser al menos 5 caracteres'
    } else if (values.password.length > 15) {
        errors.password = 'debe ser menor de 15 caracteres'
    }


    if (!values.confirmacion) {
        errors.confirmacion = 'requerido'
    } else if (values.password !== values.confirmacion) {
        errors.confirmacion = 'El password debe coincidir'
    }

    return errors
}


const SignUpForm = (props) => {
    // console.log(props);

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <View >
                <Field name="nombre" component={fieldNombre} nombrePlaceHolder="Escribe tu Nombre" />
                <Field name="correo" component={fieldNombre} nombrePlaceHolder="Escribe tu Correo" />
                <Field name="password" component={fieldNombre} nombrePlaceHolder="******" />
                <Field name="confirmacion" component={fieldNombre} nombrePlaceHolder="******" />
                <TouchableWithoutFeedback onPress={props.handleSubmit(props.registro)}>
                    <View style={styles.buttons}>
                        <Text style={styles.buttonText}>Registrarse</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    linea: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#afa8a8',
        height
        : 2,
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
        marginBottom: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
})

export default reduxForm({ form: 'SignUpForm', validate })(SignUpForm)