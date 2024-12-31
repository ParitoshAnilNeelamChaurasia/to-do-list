// create element for input field and button

const inputBox = document.getElementById("input-box") ;
const listContainer = document.getElementById("list-container") ;

function addTask(){
    // if (don't write anything)
    if(inputBox.value === '')
    {
         alert("You must write something") ;
    }

    // written something
    else
    {
        // this (li) -> is listed inside list container
        let li = document.createElement("li") ;
        li.innerHTML = inputBox.value ;
        listContainer.appendChild(li) ;

        // adding cross 

        let span = document.createElement("span") ;
        span.innerHTML = "\u00d7" ;
        li.appendChild(span) ;
    }
    // after writting something -> input value must be empty
    inputBox.value = "" ;
    saveData() ;
}

// javascript for click function

listContainer.addEventListener("click", function(e){

    // if already checked -> remove checked sign
    // if not sign -> add checked sign
    if(e.target.tagName = "LI")
    {
        e.target.classList.toggle("checked") ;
        saveData() ;
    }
    else if(e.target.tagName == "SPAN")
    {
        e.target.parentElement.remove() ;
        saveData() ;
    }
} , false) ;

// for saving data in our browser such that if we close the browzer , content didn't vanished

function saveData()
{
    localStorage.setItem("data" , listContainer.innerHTML) ;
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data") ;
}

showTask() ;