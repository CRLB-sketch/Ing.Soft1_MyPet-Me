const GetVets = () => {
    return fetch('http://127.0.0.1:8000/get_vets')
        .then((response) => response.json())
        .then((result) => {
            if (result.success) {
                return { data: result.data, success: true }
            } else {
                return { error: 'Error: ' + result.data, success: false }
            }
        })
        .catch((error) => {
            console.log('Error inesperado con los shows' + error)
        })
}

export default GetVets
