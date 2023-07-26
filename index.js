let mes = document.querySelector('#message')

function addMovie(event){
event.preventDefault()
let inputField = document.querySelector('input')

let movie = document.createElement('li')

let movieTitle = document.createElement("span")

movieTitle.textContent = inputField.value;
movieTitle.addEventListener('click', crossOffMovie)
movie.appendChild(movieTitle)

let deleteBtn = document.createElement('button')
deleteBtn.textContent = 'X' 
deleteBtn.addEventListener('click', deleteMovie)
movie.appendChild(deleteBtn)

let list = document.querySelector("ul")
list.appendChild(movie)
inputField.value = ''
}


document.querySelector("form").addEventListener("submit", addMovie)

function revealMessage(){
    setTimeout(() => {
        mes.classList.add('hide')
    }, 2000)
}


function deleteMovie(event){
    mes.classList.remove('hide')
    event.target.parentNode.remove()
    mes.textContent =`${event.target.parentNode.firstChild.textContent} deleted!`
    revealMessage()
}


function crossOffMovie(event){
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        mes.textContent = `${event.target.textContent} watched!`
    }else{
        mes.textContent = `${event.target.textContent} Added Back!`
    }
revealMessage()
}


