const url = 'http://localhost:3000/api/vehicle'

const listVehicles = async()=>{
    const content = document.getElementById('content')
    let response = ''
    fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((resp) => resp.json()) //Obtener la respuesta y convertirla a json
    .then(function(data) {
        let list = data.vehicles //Capturar el array devuelto por la api
        list.map(function(vehicle) {//Recorrer el array
            response += `<tr><td>${vehicle.plate}</td>`+
            `<td>${vehicle.color}</td>`+
            `<td>${vehicle.model}</td>`+
            `</tr>`
            content.innerHTML = response
        })
    })
}

const createVehicle = async() => {
    const vehicle = { //Objeto a enviar a la api
        plate: document.getElementById('plate').value,
        color: document.getElementById('color').value,
        model: document.getElementById('model').value,
    }
    //console.log(vehicle)
    fetch(url, { //Petición
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(vehicle),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((resp) => resp.json())//Obteniendo la respuesta
    .then(json => {
        //console.log(json.msg) //Imprimir la respuesta
        alert(json.msg) //Imprimir la respuesta
    })
}

const updateVehicle = async() => {
    const vehicle = { //Objeto a enviar a la api
        plate: document.getElementById('plate').value,
        color: document.getElementById('color').value,
        model: document.getElementById('model').value,
    }
    //console.log(vehicle)
    fetch(url, { //Petición
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(vehicle),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((resp) => resp.json())//Obteniendo la respuesta
    .then(json => {
        //console.log(json.msg) //Imprimir la respuesta
        alert(json.msg) //Imprimir la respuesta
    })
}