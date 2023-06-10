const toDoItems = document.getElementsByClassName('to-do-items')[0];
const input = document.getElementById('input');
// const trashIcon = document.getElementById('trash');
const btn = document.getElementById('btn')

btn.addEventListener('click',()=>{
    addItem();
})
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addItem();
    }
})

function addItem(){
    var divParent = document.createElement('div');
    var divChild = document.createElement('div');
    var checkIcon = document.createElement('i');
    var trashIcon = document.createElement('i');

    divParent.className = 'item';
    divParent.innerHTML = '<div class="child1">' + input.value + '</div>';

    checkIcon.className = 'fas fa-check-square';
    checkIcon.style.color = 'lightgray';
    checkIcon.addEventListener('click', ()=>{
        checkIcon.style.color = 'limegreen';
    })
    divChild.className = 'child2';
    divChild.appendChild(checkIcon);

    trashIcon.className = 'fas fa-trash';
    trashIcon.style.color = 'darkgray';
    trashIcon.addEventListener('click', ()=>{
        divParent.remove();
    })
    divChild.appendChild(trashIcon);
    divParent.appendChild(divChild);
    toDoItems.appendChild(divParent);
    input.value = '';
}