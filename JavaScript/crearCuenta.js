
const datos = {
    nombre:'',
    apellidos:'',
    email:'',
    password:'',
}

const nombre = document.querySelector('#nombre');
const apellidos = document.querySelector('#apellidos');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const formulario = document.querySelector('.form')

eventListeners();
function eventListeners(){
    nombre.addEventListener('input', insertarDatos);
    apellidos.addEventListener('input', insertarDatos);
    email.addEventListener('input', insertarDatos);
    password.addEventListener('input', insertarDatos);

    formulario.addEventListener('submit', enviarDatos);
}


function insertarDatos(e){
    datos[e.target.id] = e.target.value;

}

function enviarDatos(e){
    e.preventDefault();

    const {nombre, apellidos, email, password} = datos;

    if(nombre === '' || apellidos === '' || email === '' || password === ''){
        swal({
            title: 'Biblioteca Virtual',
            text: 'Todos los campos son requeridos',
            icon: 'error'
        });
    }else{
        swal({
            title: 'Biblioteca Virtual',
            text: 'Cuenta Creada Correctamente', 
            icon: 'success'
        })
    }


}