// 남은갯수
let idx = 1;
let todos = [];
const Count = document.querySelector('.count');
// 입력 팝업
const modal = document.querySelector('.push');
const modalOpen = document.querySelector('.open');
const modalClose = document.querySelector('.cancel');
// todo 추가
let todoList = document.querySelector('.bottom');
let inputBox = document.querySelector('#do');
let addedTodo = document.querySelector('.checking');
let addTodoBtn = document.querySelector('.add');
// todo 삭제
let deleteBtn = document.querySelector('.delete');

// 오늘날짜
const checkToday = () => {
    date = new Date();
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    const week = new Array('일','월', '화', '수', '목', '금', '토');
    const today = new Date().getDay();
    
    document.querySelector('.top p:first-child').innerText = year + '년' + month + '월' + day + '일';
    document.querySelector('.top p:first-child').innerText = year + '년' + month + '월' + day + '일';
    document.querySelector('.top p:nth-of-type(2)').innerText = (week[today]) + '요일';
}

function write(){
    modalOpen.addEventListener('click', function(){
        modal.classList.remove('hidden');
    });
    modalClose.addEventListener('click', function(){
        modal.classList.add('hidden');
    });
}

// 갯수 세는 함수
const countTodoLength = () => {
    const uncompletedTodos = todos.filter((todo)=> todo.isSussece === false);
    Count.textContent = `할 일 ${uncompletedTodos.length}개 남음`;
}

const onChangeCheckBoxHandler = (idx) => {
    // console.log(idx)
    const targetTodo = todos.filter((todo)=> todo.idx === idx)[0];
    // console.log(targetTodo);
    targetTodo.isSussece = !targetTodo.isSussece
    // console.log(targetTodo);
    countTodoLength();
}

// 삭제
const removeTodo = () => {
    const getNewTodos = todos.filter((todo)=> todo.isDelete === true);
    deleteBtn.addEventListener('click', getNewTodos)
}
const onRemoveTodo = (idx) => {
    const newTodos = todos.filter((todo) => todo.idx !== idx)[0];
    if(isDelete === true){
        removeTodo();
    }
    console.log(newTodos)
}
// function deleteTodo(event){
//     const todoList = event.target.parentElement;
//     todoList.remove();
// }

checkToday();
write();

addTodoBtn.addEventListener('click', function(){
    if (inputBox.value === "") {
        return alert("내용 안 쓸 거면 닫기")
    }

    const list = document.createElement('div');
    list.classList.add('checking');
    list.innerHTML = `
        <input type="checkbox" name="todo" />
        <label >
            <span>${inputBox.value}</span>
        </label>
        <button class="delete" onclick='deleteTodo(event);'>x</button>
    `
    todoList.appendChild(list);
    
    const todo = {
        idx : idx,
        text : inputBox.value,
        isSussece : false,
    }
    todos.push(todo)
    idx += 1;
    countTodoLength();
    
    inputBox.value = "";
    modal.classList.add('hidden');
    list.querySelector('input').addEventListener('change', ()=> {
        onChangeCheckBoxHandler(todo.idx)
    })
});

