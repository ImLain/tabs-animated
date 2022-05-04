const tabs = Array.from(document.querySelectorAll(".tabs"));
const contents = Array.from(document.querySelectorAll(".contents"));

tabs.forEach(tab => {
    tab.addEventListener("click", (e)=>{
        for(let i = 0; i < tabs.length; i++){
            if (tabs[i] === e.target){ 
                tabs[i].classList.add("active-tabs"); //if you click on x tab, you add it to the active-tabs class 
            } else {
                tabs[i].classList.remove("active-tabs"); 
            }
        }
        for (let i = 0; i < contents.length; i++){
            if(i === tabs.indexOf(e.target)){
                contents[i].classList.add("active-contents"); //if you click on x tab, you show the contents rely on it by adding to the active-contents class
            } else {
                contents[i].classList.remove("active-contents");
            }
        }
    })
})