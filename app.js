
function addItem(){
    var toDo=document.getElementById("todo");
 

    // create li
    var li=document.createElement('li');
    var liText=document.createTextNode(toDo.value);
    li.appendChild(liText);
    var list=document.getElementById("list");
    var btn1= document.createElement('button');
     var btnText1=document.createTextNode('Edit');
    // set function on del button
    btn1.setAttribute("onclick","edit(this)")
    btn1.setAttribute("class","jsbtn")
    btn1.setAttribute("id","btn1")
    btn1.style.color="green";
    btn1 .appendChild(btnText1);
    //append del button with li
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
     //create edit button
     
      //append li  with  list
    list.appendChild(li);
    toDo.value="";
}
function del(e){
    console.log(e)
}
function delItem(){
  var ul=document.getElementById("list");
  ul.innerHTML="";
}
function edit(e){
var p=e.parentNode.firstChild.nodeValue;
var edit=prompt("edit your name",p);
e.parentNode.firstChild.nodeValue=edit;
}