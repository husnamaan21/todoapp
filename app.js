
function addItem(){
  var app=document.getElementById("todo")
  var toDo=app.value;
  if(toDo.length == 0 || toDo.length == null){
    alert("invalid length")
  }else{
    // create li
    var li=document.createElement('li');
    var liText=document.createTextNode(toDo);
    li.appendChild(liText);
    var list=document.getElementById("list");
     //create edit button
    var btn1= document.createElement('button');
     var btnText1=document.createTextNode('Edit');
    // set function on edit button
    btn1.setAttribute("onclick","edit(this)")
    btn1.setAttribute("class","jsbtn")
    btn1.setAttribute("id","btn1")
    btn1.style.color="green";
    btn1 .appendChild(btnText1);
  

    //append edit button with li
    li.appendChild(btn1);
    //create del button
     var btn= document.createElement('button');
     var btnText=document.createTextNode('Delete');
    
    // set function on del button
    btn.setAttribute("onclick","del(this)")
    btn.setAttribute("class","jsbtn")
    btn.setAttribute("id","btn1")
    
    btn .appendChild(btnText);
    btn.style.color="red";
    //append del button with li
    li.appendChild(btn);
    
     
      //append li  with  list
    list.appendChild(li);
    app.value="";
}

}
  
   // del item   
function del(e){
 
    e.parentNode.remove();

}
// del all items
function delItem(){
  var ul=document.getElementById("list");
  ul.innerHTML="";
}

// edit item
function edit(e){
var val=e.parentNode.firstChild.nodeValue;
console.log(val)
var edit=prompt("edit your name",val);

if(edit.length == 0 || edit.length == null){
  alert("invalid length")
}else{
  e.parentNode.firstChild.nodeValue=edit;
}

}