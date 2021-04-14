document.getElementById("formtask").addEventListener(`submit`, savetask);
//https://www.youtube.com/watch?v=Ko_S79ZGDqI&t=1218s
//Usamos Bootstrapp: Un FRAMEWORK de css

function savetask(e) {

  let title = document.getElementById("title").value; // Aca estoy guardando el valor del input en una variable "title"

  let description = document.getElementById("description").value;

  const task = {

    title,
    description
  };

  if (localStorage.getItem('tasks') == null)   // si desde el local ya existe un valor tareas igual a nulo vamos a empezar a crear tareas
  {
    let tasks = [];  // aca creamos un arreglo llenandolo por un metodo push con la tarea nueva. 
    tasks.push(task);  // METODO PUSH
    localStorage.setItem('tasks', JSON.stringify(tasks));  // Luego almacenamos en el localstorage lo ingresado y lo ponemos en formato string. 
  }
  else {  // si ya existen valores vamos empezar a actualizarlos. 

    let tasks = JSON.parse(localStorage.getItem('tasks')); // Si ya existen lo first es obtenerlas, actualizarlas y almacenarlas de nuevo: 
    tasks.push(task);  // METODO PUSH DONDE VOY LE PASO DE NUEVO LAS TAREAS NUEVAS
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Una vez obtenidas  volvemos a almacenar y de paso con el JSON la pasamos a string. 


  }

  getTask();
  document.getElementById('formTask').reset(); // Una vez guardada la tarea escrita se limpia el formulario con esta linea.
  e.preventDefault();


}

function getTask() {

  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('tasks');  // aca tomamos el div que quedo solito en el index ¿te acordas? Le asignamos a una variable

  tasksView.innerHTML = '';  // Esto sirve para limpiarlo en caso de que ya existan nuevos datos.

  for (let i = 0; i < tasks.length; i++) {  // EMPEZAS A RECORRER EL ARREGLO DE TAREAS DEL STORAGE 

    let title = tasks[i].title;
    let description = tasks[i].description;

    tasksView.innerHTML += `<div class="card mb-3">
    <div class="card-body">
    <p>${title} - ${description}</p>
    <a class="btn btn-danger" onclick="deleteTask('${title}')">DELETE</a>
    </div>
    </div>`

  }

}

function deleteTask(title) {

  let tasks =JSON.parse(localStorage.getItem('tasks'));
for(let i=0; i<tasks.length;i++){
  if (tasks[i].title==title){
    tasks.splice(i,1);                        // push agrega un dato al arreglo, splice lo quita. CORTA
  }
}
localStorage.setItem('tasks',JSON.stringify(tasks));
getTask();
}

getTask();


// Hace una consulta al localstorage para mostrar luego los datos por pantalla. 





    // para convertir un objeto a string podemos usar JSON.stringify()





/*
Para tener acceso al evento del formulario que en este caso es el boton save ( el submit) usamos el addEventListener().
Esto agrega una escucha al evento detallado entre el parentesis. Cada vez que le hagan click, se va a ejecutar la funcion
que tiene escrita al lado. Podes escribir la funcion al lado o aparte como lo hice yo.

Metodo e.preventDefault : Esto previene el comportamiento por defecto del navegador a refescar la pagina.

Value: Cuando vos pones el .value lo que estas haciendo es obtener el valor escrito en el formulario de cada input

*/
