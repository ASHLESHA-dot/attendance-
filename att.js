login = document.querySelector("#login")
sign=document.querySelector("#sign-up")
user=document.querySelector("#user")
sign.style.display = "none"
lbtn = document.querySelector("#enter")
let go = true
lbtn.addEventListener("click", (e)=>{
    e.preventDefault();
   login_det = document.querySelectorAll("#login input")
console.log(login_det)
login_det.forEach(inp => {
  if(inp.value == ""){
    alert("please enter all details")
    go = false
  }
}); 
if(go){
localStorage.setItem("loggedInUser", user.value);
window.location.href = "dashboard.html";
}
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
sign.style.display = "flex"
setTimeout(()=>{
  sign.classList.add("appear")
console.log("done")
}, 800)
})

