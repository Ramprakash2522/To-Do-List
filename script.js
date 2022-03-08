let addButton = document.getElementById("add");
let list = document.getElementById("list");

addButton.addEventListener("click",(event)=>{
    event.preventDefault();
    let itemlist = document.getElementById("listitem");
    if(!itemlist.value.length){
        return alert("Please enter something");
    }
    let li = document.createElement("li");
    let button = document.createElement("button");

    li.innerHTML = itemlist.value;
    button.className="close";
    button.innerHTML="\u00D7";

    li.appendChild(button);
    list.appendChild(li);
    itemlist.value="";

    li.addEventListener("click",(e) => {
        e.preventDefault();
        e.target.style.textDecoration==="line-through"?
        e.target.style.textDecoration="none":e.target.style.textDecoration="line-through";
    });

    button.onclick = (e)=>{
        e.preventDefault();
        e.target.parentElement.style.display="none";
    }
})

