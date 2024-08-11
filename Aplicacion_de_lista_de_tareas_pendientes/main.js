//Vaiables de la constante y del valor por defecto de la id de los bloques de la lista
let IdCounter = 0;
const input = document.querySelector('input[type="text"]');

userInput.addEventListener('submit', (event)=>{
    event.preventDefault();
    addTask();
});

//En este bloque tenemos lo que es el diseno y la impresio de los elementos de la lista
/*Aui se efectua el conteo de la id, con el valor que obtiene las check box*/
let addTask = ()=>{
    IdCounter++;
    let newValue = input.value;

    list.innerHTML += `
    <div class="task-container" id="${IdCounter}">
        <label>
            <input type="checkbox">
            ${newValue}
        </label>
        <img src="./imagenes/eliminar.png" class="delate">
    </div>`

    input.value = '';
    updateStats();
};

/*En este objeto se tiene la funcion Listener para que pueda hacer la funcion click de los elementos
como dar la reaccion de dar click a la imagen de eliminar y de contar el evento input del check box
*/
list.addEventListener('click', (event)=>{
    if(event.srcElement.nodeName == 'INPUT'){
        updateStats();
    }else if(event.srcElement.nodeName == 'IMG'){
        deleteTask(event.srcElement.parentNode.id);
    }
});

//Aqui se actualizan los datos de las estadisticas de las tareas resueltas y no resueltas
/*lo que hace es que con la funcion "list.querySelectorAll('div')" seleccionamos la lista de datos que
provienen del tipo de dato que tengamos en la lista y con el "list.querySelectorAll('input[type="checkbox"]:checked')"
hacemos casi lo mismo pero con los que tengan la caja de check marcada con eso se tendra los valores que existen
pero como solo queremos los numeros de datos existente en tonses las variable se les pedira en donde los imprimimos
que solo la lonitud de las exstentes
*/
let updateStats = ()=>{
    let element = list.querySelectorAll('div');
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked');
    stats.innerHTML = `<p>Tareas Pendientes : ${element.length} || Tareas Completadas : ${checkbox.length}</p>`;
};

 //Aqui se eliminan los datos identificandolos con la id del cuadro de la lista
let deleteTask = (id)=>{
    let taskToDelete = document.getElementById(id);
    list.removeChild(taskToDelete);
    updateStats();
}