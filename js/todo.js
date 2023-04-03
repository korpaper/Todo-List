// 팝업
const popUp = document.querySelector('.push');
const popUpOpen = document.querySelector('.open');
const popUpClose = document.querySelector('.cancel');
// todo 추가
let idx = 1;
let todos = [];
const count = document.querySelector('.count');
// todo compo
const todoLists = document.querySelector('.bottom');
const todoList = document.querySelector('.checking');
const todoInput = document.querySelector('#do');
const addTodo = document.querySelector('.add');
const deleteTodo = document.querySelector('.delete');
const checkTodo = document.querySelector('.check');

// 날짜
const todayDate = () => {
    date = new Date();
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    const today = new Date().getDay();

    document.querySelector('.top p:first-child').innerText = year + '년' + month + '월' + day + '일';
    document.querySelector('.top p:nth-of-type(2)').innerText = (week[today]) + '요일';
}

todayDate();

// 팝업
const popup = () => {
    popUpOpen.addEventListener('click', function(){
        popUp.classList.remove('hidden');
    });
    popUpClose.addEventListener('click', function(){
        popUp.classList.add('hidden');
    });
};

popup();

// todo 갯수
const countTodoLength = () => {
    const uncompletedTodos = todos.filter((todo) => todo.isCompleted === false);
    count.textContent = `할 일 ${uncompletedTodos.length}개 남음`
}

const onChangeTodoHandler = (idx) => {
    console.log(idx)
    const targetTodo = todos.filter((todo) => todo.idx === idx)[0];
    console.log(targetTodo)
    targetTodo.isCompleted = !targetTodo.isCompleted;
    countTodoLength();
}
checkTodo.addEventListener('change', () => {
    onChangeTodoHandler(todo.idx);
});

// todo 생성
function todoArr(){
    if (todoInput.value === ""){
        return alert('안 쓸 거면 닫기');
    }
    const todoItem = document.createElement('div');
    todoItem.classList.add('checking');
    todoItem.innerHTML = `
    <input type ='checkbox' class='check'/>
    <label>
        <span>${todoInput.value}</span>
    </label>
    <button class='delete'>x</button>
    `
    todoLists.appendChild(todoItem);
    
    const todo = {
        idx : idx,
        text : todoInput.value,
        isCompleted : false,
    }
    todos.concat(todo);
    idx += 1;
    countTodoLength();
    
    todoInput.value = "";
    popUp.classList.add('hidden');
};

addTodo.addEventListener('click', todoArr);

