import { takeEvery, call } from 'redux-saga/effects'
import { autenticacion, baseDeDatos } from '../servicios/Firebase'

const registroEnFirebase = (values) => autenticacion
    .createUserWithEmailAndPassword(values.correo, values.password)
        .then(success => {
        return success
    })
    
function* sagaRegistro(values) {
    try {

        const registro = yield call(registroEnFirebase, values.datos)
        const { email } = registro.user
        const { uid } = registro.user
        // console.log('registroo',registro);
        const { datos: { nombre } } = values
        yield call(registroEnBaseDeDatos, { uid, email, nombre })
    } catch (error) {
        console.log('error sagaRegistro', error);

    }
}


export default function* funcionPrimaria() {
    yield takeEvery('REGISTRO', sagaRegistro)
    yield takeEvery('LOGIN', sagaLogin)
    //yield ES6
    // console.log('Desde nuestra funcion generadora');
}

const registroEnBaseDeDatos = ({ uid, email, nombre }) => {
    baseDeDatos.ref('usuarios/' + uid).set({
        usuario: nombre,
        email: email,
        // profile_picture: imageUrl
    });
}

const loginEnFirebase = ({correo,password}) => autenticacion
    .signInWithEmailAndPassword(correo, password)
    .then((success)=> {return success})
    
function* sagaLogin(values) {
    try {
        const resultado = yield call(loginEnFirebase, values.datos)
        console.log('success login', resultado);
    } catch (error) {
       console.log('error login',error); 
    }
}

