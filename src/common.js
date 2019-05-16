import { Alert } from 'react-native'

function showError(err) {
    Alert.alert('Ops! Ocorreu um problema!', `Mensagem: ${err}`)
}

export { showError }