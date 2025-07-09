document.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("loggedInUser");
  if (username) {
    document.getElementById("userDisplay").textContent = username;
  }
});
