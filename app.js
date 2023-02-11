const form = document.querySelector("[name='data-form']")
const input = document.querySelector("[name='data-input']")
const lists = document.querySelector("[name='data-lists']")
// let todoARR = []



/* ------------------------ Construct list item data ------------------------ */

class ToDo{
  constructor(id, todo){
    this.id = id
    this.todo = todo
  }
}

/* ------------------------------ local storage ----------------------------- */

class Storage{
  static addToStorage(todoARR){
    let storage = localStorage.setItem('todo', JSON.stringify(todoARR))
    return storage
  }

  static getStorage(){
    let storage = localStorage.getItem('todo') === null ? [] : JSON.parse(localStorage.getItem('todo'))
    return storage
  }
}

let todoARR = Storage.getStorage()

/* -------------------------- Display data in list -------------------------- */

class UI {
  static displayData(){
    const displayData = todoARR.map(item => { 
      return `
      <div class="todo">
        <p>${item.todo}</p>
        <span class="remove" data-id="${item.id}">🗑️</span>
      </div>`
    });

    lists.innerHTML = (displayData).join("")
  }

  static clearInput(){
    input.value = ""
  }

  static removeToDo(){
    lists.addEventListener('click', e => {
      if(e.target.classList.contains("remove")){
        e.target.parentElement.remove()
      }
      let btnId = e.target.dataset.id
      console.log(todoARR)
      UI.removeArrayTodo(btnId)
    })
  }

  static removeArrayTodo(id){
    todoARR = todoARR.filter((item) => item.id !== id)
    // filtered = Storage.addToStorage()
    console.log(todoARR)

  }
}

/* -------------- Add form event listener for static functions -------------- */

form.addEventListener('submit', e => {
  e.preventDefault()
  let id = Math.random() * 17
  const item = new ToDo(id, input.value)
  todoARR = [...todoARR, item]
  UI.displayData()
  UI.removeToDo()
  UI.clearInput()
  Storage.addToStorage(todoARR)
})