login = document.querySelector("#login")
lbtn = document.querySelector("#enter")
lbtn.addEventListener("click", (e)=>{
    e.preventDefault();
   login_det = document.querySelectorAll("#login input")
console.log(login_det)
login_det.forEach(inp => {
  if(inp.value == ""){
    alert("please enter all details")
  }
}); 
})
sbtn = document.querySelector("#create")
sbtn.addEventListener("click", (e)=>{
    e.preventDefault();
   sign_det = document.querySelectorAll("#sign-up input")
console.log(sign_det)
sign_det.forEach(inp => {
  if(inp.value == ""){
    alert("please enter all details")
  }
}); 
})
document.querySelector("#login a").addEventListener("click", ()=>{
login.classList.add("fade")

})