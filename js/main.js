var removeicon = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
var completeicon = '<i class="fa fa-check-circle-o" aria-hidden="true"></i>';




document.getElementById("add").addEventListener("click", function() {
    
    var value = document.getElementById("add-text").value;  
      
    if (value) {
        addItem(value);
        document.getElementById("add-text").value = '';
    }
    
    //back();
}, false);




// dodanie zadania po nacisnieciu klawisza enter
document.addEventListener("keyup", function(evt) {
    
    if (evt.keyCode === 13) {
        
        var value = document.getElementById("add-text").value; 
        
        if (value) {
            addItem(value);
            document.getElementById("add-text").value = '';
        }
    }
    
    
}, false);


//usuwanie elementow
function removeItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    
    parent.removeChild(item);
}


// zadania zrobione
function completedItem(){
    
    var tasksComplete = document.querySelector("#done");
    var item = this.parentNode.parentNode;
    
    tasksComplete.appendChild(item);
    this.style.color = "green";


}

// Dodanie nowych elementow do listy
function addItem(text) {
    var list = document.getElementById("todolist");
    
    var item = document.createElement("li"); //tworzenie elementu li
    item.innerText = text;
    
    var buttons = document.createElement("div"); //tworzenie elementu div
    buttons.classList.add("divs"); //dodanie klasy buttons do stworzonego elementu div
    
    var remove = document.createElement("div");// tworzenie elemnutu button
    remove.classList.add("remove1"); //dodanie klasy remove do stworzonego elementu button
    remove.innerHTML = removeicon;
    
    
    // wywołanie zdarzenia usuniecia elementu
    remove.addEventListener("click", removeItem);
    
    var complete = document.createElement("div"); // tworzenie elemnutu button
    complete.classList.add("complete1");  //dodanie klasy complete do stworzonego elementu button
    complete.innerHTML = completeicon;
    
    
     // wywołanie zdarzenia zrobionego zadania
    complete.addEventListener("click", completedItem);
    
    
    buttons.appendChild(remove); //dodanie zmiennej remove do zmiennej buttons czyli
    buttons.appendChild(complete); //dodanie zmiennej rcomplete do zmiennej buttons czyli 
    item.appendChild(buttons); //dodanie diva buttons do listy li
    
    list.appendChild(item); //dodanie listy li do listy ul zobaczyc inne rozwiazanie
    
}





