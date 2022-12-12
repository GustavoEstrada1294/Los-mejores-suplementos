
//DOM
//querySelector=un elemento o primer elemento y  querySelectorAll para varios elementos en lista

/*let links = document.querySelectorAll("a");

links.forEach(function(link){
    console.log(link);
});
*/

/*
let celdas = document.querySelectorAll("td");
celdas.forEach(function(td){
    td.addEventListener('click',function(){
        console.log(this);
    })
});
*/
//obtener elementos de la clase .close
let links = document.querySelectorAll(".close");

//recorrerlos
links.forEach(function(link){

    //agregar un evento por cada uno de ellos-case sensitive
    link.addEventListener("click",function(ev){
        ev.preventDefault();
        let content = document.querySelector('.content');

        //quitarle clases de animacion que ya tiene
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");


        //agregar clases para animar la salida

        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        setTimeout(function(){
            location.href ="/";
        },600);
        


        return false;

    });
});


