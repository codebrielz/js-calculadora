const btnContentCalculadora = document.querySelector(".calculadora__content-btn");
const btnContentValue = document.querySelector(".calculadora__btn");
const btnCE = document.querySelector(".btn-ce");
const resultado = document.querySelector(".calculadora__resultado");

const main = () => {
    btnContentCalculadora.addEventListener("click",e=>{
        if(e.target.className == "calculadora__content-btn"){
            return
        }
        console.log(e);
        if(resultado.textContent === "0"){
            resultado.innerHTML = parseInt(e.target.textContent);
        }else if(e.target.textContent === "CE"){
            if( e.target.textContent.length == 0){
                btnCE.disabled = true;
            }else if(e.target.textContent.length > 0){
                btnCE.disabled = false;
                resultado.innerHTML = 0;
            }
        }else if(e.target.textContent === "C"){
            // resultado.innerHTML += e.target.textContent - 1;
        }else{
            resultado.innerHTML += parseInt(e.target.textContent);
        }
    })

}

main();
