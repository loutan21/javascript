const btn = document.getElementById("darkModeBtn")

btn.addEventListener("click", () => { 
    document.body.classList.toggle("dark-mode");



    if (document.body.classList.contains("dark-mode")){ 
        btn.textContent = "Clear Mode";
     } else { 
        btn.textContent = "Dark Mode";
     } 
 } )