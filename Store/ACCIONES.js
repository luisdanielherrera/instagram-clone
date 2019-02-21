import CONSTANTES from './CONSTANTES'

export const actionRegistro = datos => {
    return {
        type: CONSTANTES.REGISTRO,
        datos,
    }
}

export const actionLogin = datos => ({
    type: CONSTANTES.LOGIN,
    datos,
})

export const actionEstablecerSesion = usuario => ({
    type: CONSTANTES.ESTABLECER_SESION,
    usuario,
})

export const actionCerrarSesion = () => ({
    type: CONSTANTES.CERRAR_SESION
})