var todoItem = document.getElementById('todoItem');


function addItem() {
    var todoAdd = document.getElementById('todoAdd')
    var li = document.createElement('li');
    li.setAttribute('class', 'listText')
    var litext = document.createTextNode(todoAdd.value);
    li.appendChild(litext);

    var btnDlt = document.createElement('button');
    var textDlt = document.createTextNode('Delete');
    btnDlt.setAttribute('onclick', 'deleteTodo(this)');
    btnDlt.setAttribute('class', 'btn btn-danger deleteButton')

    btnDlt.appendChild(textDlt)
    li.appendChild(btnDlt)

    var btnEdit = document.createElement('button');
    var textEdit = document.createTextNode('Edit');
    btnEdit.setAttribute('onclick', 'editTodo(this)');
    btnEdit.setAttribute('class', 'btn btn-info  editButton')
    btnEdit.appendChild(textEdit)
    li.appendChild(btnEdit)

    todoItem.appendChild(li);
    todoAdd.value = '';
    todoItem.style.border = "solid 2px grey"
}

function deleteAll() {
    todoItem.innerHTML = "";
    todoItem.style.border = "none"
}

function deleteTodo(a) {
    a.parentNode.remove();
}

function editTodo(b) {
    var val = b.parentNode.firstChild.nodeValue;
    var editValue = prompt("Edit Your Task", val);
    b.parentNode.firstChild.nodeValue = editValue;
}