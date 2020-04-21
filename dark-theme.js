
const dt = document.getElementById('dark-theme');
const dt_p = document.getElementById('dark-theme-p');
const links = document.querySelectorAll("a");
const b = document.querySelector('body');
const h = document.querySelectorAll('.h');

if (localStorage.getItem("stat") === null) {
    b.style.backgroundColor = "white";
} else {
    b.style.backgroundColor = localStorage.getItem("stat");
}
if (localStorage.getItem("stat_p") === null) {
    dt_p.innerHTML = "Dark Mode: OFF";

} else {
    dt_p.innerHTML = localStorage.getItem("stat_p");

}
if (localStorage.getItem("stat_p2") === null) {
    dt_p.style.color = "black";

} else {
    dt_p.style.color = localStorage.getItem("stat_a");

}
h.forEach(element => {
    element.style.color = localStorage.getItem("stat_a");
});
links.forEach(element => {
    element.style.color = localStorage.getItem("stat_a");
});



dt.addEventListener('click', () => {

    if (dt_p.innerHTML === "Dark Mode: ON") {

        localStorage.setItem("stat", "#eeeeee");
        localStorage.setItem("stat_p", "Dark Mode: OFF");
        localStorage.setItem("stat_p2", "#252525");
        localStorage.setItem("stat_a", "#252525");

        b.style.backgroundColor = localStorage.getItem("stat");
        
        dt_p.innerHTML = localStorage.getItem("stat_p");
        
         dt_p.style.color = localStorage.getItem("stat_p2");
        
        links.forEach(element => {
            element.style.color = localStorage.getItem("stat_a");
        });
        
        
        h.forEach(element => {
            element.style.color = localStorage.getItem("stat_a");
        });
        
        

        
        

    } else {

        localStorage.setItem("stat", "#252525");
        localStorage.setItem("stat_p", "Dark Mode: ON");
        localStorage.setItem("stat_p2", "#eeeeee");
        localStorage.setItem("stat_a", "#eeeeee");
        localStorage.setItem("stat_h", "#eeeeee");

        

        b.style.backgroundColor = localStorage.getItem("stat");
        
        dt_p.innerHTML = localStorage.getItem("stat_p");
        
        dt_p.style.color = localStorage.getItem("stat_p2");
        
        links.forEach(element => {
            element.style.color = localStorage.getItem("stat_a");
        });
        
        
        h.forEach(element => {
            element.style.color = localStorage.getItem("stat_a");
        });

        





    }

});


