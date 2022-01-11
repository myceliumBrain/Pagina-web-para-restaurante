let controlHidden = 0;



function controlHid(){

    let boxMajorProd = document.getElementById("boxMajor")
    let letterDesign = document.getElementById("letterDesign")

    if(controlHidden == 0){
        boxMajorProd.children[1].style.display = 'grid';

        letterDesign.style.backgroundImage = "url(./images/cardapio_plus.png)";
    
    controlHidden = 1;
    
    }else{
        boxMajorProd.children[1].style.display = 'none';
        
        letterDesign.style.backgroundImage = "url(./images/cardapio_minnor.png)";

        controlHidden = 0;
    }
    
}