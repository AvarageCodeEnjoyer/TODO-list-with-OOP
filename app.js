const form = document.querySelector("[name='data-form']")
const input = document.querySelector("input[name='data-input']")
const lists = document.querySelector("input[name='data-lists']")
let todoARR = []

form.addEventListener('submit', e => {
  e.preventDefault()
  let id = Math.random() * 17
  var todo = new ToDo(id, todo)
  console.log(todo)
  todoARR.push(todo)
})

class ToDo{
  constructor(id, todo){
    this.id = id
    this.todo = todo
  }
}

class UI{
  displayData(){
    let displayData = todoARR.forEach(item => { 
      item.innerHTML = 
      `<div class="todo">
        <p></p>
        <span class="remove" data-id="${item.id}"> </span>
      </div>`
    });

    lists.innerHTML = displayData.join("")
  }
}