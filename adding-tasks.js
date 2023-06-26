// UI vars

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeletAll');
const taskList =  document.querySelector('#task-list');

eventListeners();

function eventListeners(){
form.addEventListeners('submit', 'addNewItem');

};


function addNewItem(e){

   if(input.value === ''){
    alert('add new item');

   }

   const li = document.createElement('li')

   li.className = 'list-group-item list-group-item-secondary';


   const a = document.createElement('a');
   a.classList = 'delete-item float-right';
   a.setAttribute('href', "#");
   a.innerHTML = '<i class="fas fa-times"></i>';

   li.appendChild(a); 

   taskList.appendChild(li);

   console.log(li);

    e.preventDefault();
};
