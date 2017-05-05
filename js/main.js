document.getElementById("add").addEventListener("click", function() {
    
    var value = document.getElementById("add-text").value;  
      
    if (value) {
        addItem(value);
    }

    //back();
}, false);



//usuwanie elementow
function removeItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    
    parent.removeChild(item);
}


//zrobione zadania
function doneItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;
    
    if (id === "todolist") {
        
    } else {
        
    }
    
}

// Dodanie nowych elementow do listy
function addItem(text) {
    var list = document.getElementById("todolist");
    
    var item = document.createElement("li"); //tworzenie elementu li
    item.innerText = text;
    
    var buttons = document.createElement("div"); //tworzenie elementu div
    buttons.classList.add("buttons"); //dodanie klasy buttons do stworzonego elementu div
    
    var remove = document.createElement("button");// tworzenie elemnutu button
    remove.classList.add("remove1"); //dodanie klasy remove do stworzonego elementu button
    remove.innerHTML = "Usuń";
    
    
    remove.addEventListener("click", removeItem);
    
    var complete = document.createElement("button"); // tworzenie elemnutu button
    complete.classList.add("complete1");  //dodanie klasy complete do stworzonego elementu button
    complete.innerHTML = "Skończone";
    
    
    complete.addEventListener("click", completedTasks);
    
    buttons.appendChild(remove); //dodanie zmiennej remove do zmiennej buttons czyli
    buttons.appendChild(complete); //dodanie zmiennej rcomplete do zmiennej buttons czyli 
    item.appendChild(buttons); //dodanie diva buttons do listy li
    
    list.appendChild(item); //dodanie listy li do listy ul zobaczyc inne rozwiazanie
}


function back() {
    var create = document.createElement("div");
    var list = document.getElementById("todolist");
    
    create.classList.add("active");
    
    list.appendChild(create);
    
}

var tasksComplete = document.querySelector("#done");

function completedTasks(){

    
    
    var item = this.parentNode.parentNode;
    
    
    tasksComplete.appendChild(item);
    
    
     //var item = this.parentNode.parentNode;
   // var parent = item.parentNode;
    
    //parent.appendChild(item);

}