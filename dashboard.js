document.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("loggedInUser");
  if (username) {
    document.getElementById("userDisplay").textContent = username;
  }
});
const d = new Date()
const day = d.toLocaleDateString('en-US', { weekday: 'long' })
const date = d.getDate()
const month = d.toLocaleDateString('en-US', { month: 'long' })
const year = d.getFullYear()
const time = d.toLocaleTimeString('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true
});
document.querySelector("#date").innerText = `${day} ${month} ${date} , ${year}`
document.querySelector("#submit").addEventListener("click" , (e)=>{
   e.preventDefault()
   let mark = document.querySelector('input[name = "choice"]:checked');
   console.log(mark)
   if(!mark){
    alert("Please mark your attendance")
   }
   else{
    let label = document.querySelector(`label[for = "${mark.id}"]`).innerText
    confirm(`you want to mark ${label}`)
   }
})

