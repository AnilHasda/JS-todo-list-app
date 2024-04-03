// alert("this is Anil Hasda")
let input=document.querySelector(".input");
let table=document.querySelector("#table");
let btn=document.querySelector(".btn");
let response=localStorage.getItem("list");
let finalResponse=JSON.parse(response);
let updateBtn="";
let data=finalResponse?finalResponse:[];
// localStorage.clear()
console.log(data)
const addItems=()=>{
    if(btn.innerHTML==="Add-Items"){
    let item={
        id:Date.now(),
        listItem:input.value
    }
    data=[...data,item];
    localStorage.setItem("list",JSON.stringify(data));
    input.value="";
    display();
}
    if(btn.innerHTML==="update item"){
        data=data.map(ele=>ele.id===updateBtn?{...ele,listItem:input.value}:ele)
        btn.innerHTML="Add-Items";
        localStorage.setItem("list",JSON.stringify(data));
        //input.value="";
        display();
    }
}
function test(id){
    data=data.filter(ele=>ele.id!==id)
    localStorage.setItem("list",JSON.stringify(data));
    display();
}
const update=(id)=>{
    updateBtn=id;
    btn.innerHTML="update item";
     data.map(ele=>{
if(ele.id===id){
    input.value=ele.listItem;
}
     })
}
const display=()=>{
    table.innerHTML=`<tr><td>Items</td><td colspan='2'>Actions</td></tr>`;
    for(let i=0;i<data.length;i++){
table.innerHTML+=`<tr><td>${data[i].listItem}</td><td><span onclick="update(${data[i].id})"><i class="fas fa-edit"></i></span></td><td><span onclick="test(${data[i].id})"><i class="fas fa-trash"></i></span></td></tr>`;
    }
}
display();
btn.addEventListener("click",addItems);