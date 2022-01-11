
/*Fazer esse controle automatizado. -> Está mal otimizado*/

let control0 = 0;
let control1 = 0;
let control2 = 0;
let control3 = 0;
let control4 = 0;
let control5 = 0;
let control6 = 0;
let control7 = 0;



function listProd0(){

    let objeto = document.getElementById("cont0")
    let show = document.getElementById("show0")

    if(control0 == 0){
    objeto.children[1].style.display = 'block';
    objeto.children[2].style.display = 'block';
    objeto.children[3].style.display = 'block';
    
    show.innerText = "-"
    
    control0 = 1;
    
    }else{
        objeto.children[1].style.display = 'none';
        objeto.children[2].style.display = 'none';
        objeto.children[3].style.display = 'none';
        
        show.innerText = "+"

        control0 = 0;
    }
    
}

function listProd1(){

    let objeto = document.getElementById("cont1").children
    let show = document.getElementById("show1")

    if(control1 == 0){
    objeto[1].style.display = 'block';
    objeto[2].style.display = 'block';
    objeto[3].style.display = 'block';

    show.innerText = "-"

    control1 = 1;
    }else{
        objeto[1].style.display = 'none';
        objeto[2].style.display = 'none';
        objeto[3].style.display = 'none';

        show.innerText = "+"

        control1 = 0;
    }
    
}

function listProd2(){

    let objeto = document.getElementById("cont2").children
    let show = document.getElementById("show2")

    if(control2 == 0){
    objeto[1].style.display = 'block';
    objeto[2].style.display = 'block';
    objeto[3].style.display = 'block';

    show.innerText = "-"


    control2 = 1;
    }else{
        objeto[1].style.display = 'none';
        objeto[2].style.display = 'none';
        objeto[3].style.display = 'none';
        
        show.innerText = "+"

        control2 = 0;
    }
    
}

function listProd3(){

    let objeto = document.getElementById("cont3").children
    let show = document.getElementById("show3")

    if(control3 == 0){
    objeto[1].style.display = 'block';
    objeto[2].style.display = 'block';
    objeto[3].style.display = 'block';

    show.innerText = '-'

    control3 = 1;
    }else{
        objeto[1].style.display = 'none';
        objeto[2].style.display = 'none';
        objeto[3].style.display = 'none';

        show.innerText = "+"

        control3 = 0;
    }
    
}

function listProd4(){

    let objeto = document.getElementById("cont4").children
    let show = document.getElementById("show4")

    if(control4 == 0){
    objeto[1].style.display = 'block';
    objeto[2].style.display = 'block';
    objeto[3].style.display = 'block';

    show.innerText = "-"

    control4 = 1;
    }else{
        objeto[1].style.display = 'none';
        objeto[2].style.display = 'none';
        objeto[3].style.display = 'none';
        
        show.innerText = "+"

        control4 = 0;
    }
    
}

function listProd5(){

    let objeto = document.getElementById("cont5").children
    let show = document.getElementById("show5")

    if(control5 == 0){
    objeto[1].style.display = 'block';
    objeto[2].style.display = 'block';
    objeto[3].style.display = 'block';

    show.innerText = "-"

    control5 = 1;
    }else{
        objeto[1].style.display = 'none';
        objeto[2].style.display = 'none';
        objeto[3].style.display = 'none';

        show.innerText = "+"
        
        control5 = 0;
    }
    
}

function listProd6(){

    let objeto = document.getElementById("cont6").children
    let show = document.getElementById("show6")

    if(control6 == 0){
    objeto[1].style.display = 'block';
    objeto[2].style.display = 'block';
    objeto[3].style.display = 'block';

    show.innerText = "-"

    control6 = 1;
    }else{
        objeto[1].style.display = 'none';
        objeto[2].style.display = 'none';
        objeto[3].style.display = 'none';

        show.innerText = "+"

        control6 = 0;
    }
    
}

function listProd7(){

    let objeto = document.getElementById("cont7").children
    let show = document.getElementById("show7")

    if(control7 == 0){
    objeto[1].style.display = 'block';
    objeto[2].style.display = 'block';
    objeto[3].style.display = 'block';

    show.innerText = "-"

    control7 = 1;
    }else{
        objeto[1].style.display = 'none';
        objeto[2].style.display = 'none';
        objeto[3].style.display = 'none';

        show.innerText = "+"

        control7 = 0;
    }
    
}
