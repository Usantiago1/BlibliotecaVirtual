

const datos = {
    email: '',
    password: '',

}

//Variables de los campos 
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');



const formulario = document.querySelector('#form');
const btnIngresar = document.querySelector('#btn-submit');



eventListeners();
function eventListeners(){
    inputEmail.addEventListener('input', insertarDatos);
    inputPassword.addEventListener('input', insertarDatos);

    formulario.addEventListener('submit', enviarDatos);

}



function insertarDatos(e){
    datos[e.target.id] = e.target.value;
    console.log(datos);
}

function enviarDatos (e){
    e.preventDefault();

    const {email, password} = datos;

    if(email === '' && password === ''){
        swal({
            title: 'Biblioteca Virtual',
            text: 'Todos los campos son requeridos',
            icon: 'error'
        });
    }else{
        swal({
            title: 'Biblioteca Virtual',
            text: 'Datos del Perfil Correctos',
            icon: 'success'

        })
    }

}