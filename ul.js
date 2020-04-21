
const list = document.querySelectorAll('.h');

const i = document.querySelectorAll('.h i');

const ul = document.querySelectorAll('.ul');
const anc = document.querySelectorAll('a');
const aa = document.querySelectorAll('a i');

const subul = document.querySelectorAll('.subul');



list[0].addEventListener('click', () => {
    if (ul[0].style.display === "none") {

        ul[0].style.display = "flex";
        
        i[0].style.transform = "rotate(0deg)";

    } else {

        ul[0].style.display = "none";
        subul[0].style.display = "none";
        aa[0].style.transform = "rotate(0deg)";
        i[0].style.transform = "rotate(180deg)";

    }
});
list[1].addEventListener('click', () => {
    if (ul[1].style.display === "none") {


        ul[1].style.display = "flex";
        i[1].style.transform = "rotate(0deg)";



    } else {

        ul[1].style.display = "none";
        i[1].style.transform = "rotate(180deg)";


    }
});
ul[2].style.display = "none";
list[2].addEventListener('click', () => {

    if (ul[2].style.display === "none") {

        ul[2].style.display = "flex";
        i[2].style.transform = "rotate(0deg)";



    } else {
        ul[2].style.display = "none";
        i[2].style.transform = "rotate(180deg)";

    }
});







anc.forEach(element => {
    element.addEventListener('click', () => {
        if (subul[0].style.display === "flex") {
            subul[0].style.display = "none";
            aa[0].style.transform = "rotate(0deg)";
        } else {
            subul[0].style.display = "flex ";
            aa[0].style.transform = "rotate(180deg)";
        }
    });
}); 


