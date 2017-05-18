
var removeicon = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
var completeicon = '<i class="fa fa-check-circle-o" aria-hidden="true"></i>';



document.getElementById("add").addEventListener("click", function() {
    
    var value = document.getElementById("add-text").value;  
      
    if (value) {
        addItem(value);
        document.getElementById("add-text").value = '';
    }
    
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
    
    item.style.background = "#95a5a6";
    item.style.color = "#2F4F4F";


}

// Dodanie nowych elementow 
function addItem(text) {
    var list = document.getElementById("todolist");
    
    //tworzenie nowych elementow
    var item = document.createElement("li");
    item.innerText = text;
    
    var buttons = document.createElement("div"); 
    buttons.classList.add("divs"); 
    
    var remove = document.createElement("div");
    remove.classList.add("remove1"); 
    remove.innerHTML = removeicon;
    
    
    // wywołanie zdarzenia usuniecia elementu
    remove.addEventListener("click", removeItem);
    
    var complete = document.createElement("div"); 
    complete.classList.add("complete1");  
    complete.innerHTML = completeicon;
    
    
     // wywołanie zdarzenia zrobionego zadania
    complete.addEventListener("click", completedItem);
    
    
    //dodanie nowych węzłow na koniec listy
    buttons.appendChild(remove); 
    buttons.appendChild(complete); 
    item.appendChild(buttons);
    
    list.insertBefore(item,list.childNodes[0]);
}





