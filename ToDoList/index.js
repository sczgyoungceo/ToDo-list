document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('input');
    const addBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('tasklist');
    const delBtn = document.getElementById('del-btn');
    
    function addTaskToList(taskText) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const iconRemove = document.createElement('button');
        iconRemove.id = 'btnX'
        iconRemove.textContent = 'Delete';
        iconRemove.addEventListener('click', function () {
            taskItem.remove();
        });

        taskItem.appendChild(iconRemove);
        taskList.appendChild(taskItem);
    }

    input.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            const taskText = event.target.value.trim();
            if (taskText !== '') {
                addTaskToList(taskText);
                event.target.value = '';
            }
        }
    });

    addBtn.addEventListener('click', function () {
        const taskText = input.value.trim();
        if (taskText !== '') {
            const taskItem = addTaskToList(taskText); // Chiamata a una funzione per creare l'elemento e ottenerlo
            input.value = '';
        }
    });


    delBtn.addEventListener('click', function () {
        taskList.innerHTML = '';
    });



    // Utilizza l'event delegation per gestire la rimozione di elementi
    taskList.addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON') {
            event.target.parentElement.remove();
        }
    });
});


/* // Seleziona l'elemento del bottone #special e l'input-box
const specialButton = document.getElementById('special');
const inputWrapper = document.querySelector('.input-wrapper');

// Aggiungi un gestore di eventi al clic sul bottone
specialButton.addEventListener('click', function () {
    inputWrapper.classList.toggle('open')
}); */





