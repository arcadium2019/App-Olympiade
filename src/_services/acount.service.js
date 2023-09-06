

let saveToken = (token) => {
    localStorage.setItem('token', token)
}

let logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('idEquipe')
    localStorage.removeItem('nomEquipe')
}

let isLogged = () => {
    let token = localStorage.getItem('token')
    return !!token
}

let getToken = () => {
    let token = localStorage.getItem('token')
    return token
}

let saveIdEquipe = (idEquipe) => {
    localStorage.setItem('idEquipe', idEquipe)
}

let getIdEquipe = () => {
    let idEquipe = localStorage.getItem('idEquipe')
    return idEquipe
}

let saveNomEquipe = (nomEquipe) => {
    localStorage.setItem('nomEquipe', nomEquipe)
}

let getNomEquipe = () => {
    let nomEquipe = localStorage.getItem('nomEquipe')
    return nomEquipe
}

export const accountService = {
    saveToken, logout, isLogged, getToken, saveIdEquipe, getIdEquipe, saveNomEquipe, getNomEquipe
}