// window.onload = function (){

//     const form = document.querySelector('form');
    const inputs = document.querySelectorAll('input');
    const container = document.querySelector('#container')
//     const body = document.querySelector('body');

//     form.addEventListener('submit', (e) => {
//         inputs.forEach((input,index) => {
//             if(input.name !== "valider"){
//                 if(input.value.trim() === ""){
//                     const divError = createDivError(container)
//                     createMessageError(divError, `Le champ ${input.name} n'a pas été remplis`)
//                 }else{

//                 }
//             }
//         })
//         e.preventDefault();
//     }, false);

//     const createDivError = function(HTMLelementAppendTo){
//         const divError = document.createElement('div')
//         divError.setAttribute('class', 'error')

//         HTMLelementAppendTo.appendChild(divError)
//         HTMLelementAppendTo.classList.add('column-reverse')
//         const divErrorDom = document.querySelector('.error')
//         return divErrorDom
//     }

//     const createMessageError = function(HTMLelementAppendTo, messageError){
//         const pError = document.createElement('p');
//         const textError = document.createTextNode(messageError);

//         pError.appendChild(textError);

//         HTMLelementAppendTo.appendChild(pError);
//     }
// }

$(document).ready(function(){
    $(":submit").click(function(e){
        console.log('le bouton marche')
        inputs.forEach((input,index) => {
            if(input.name !== "valider"){
                console.log('salut ça va')
                if(input.value.trim() === ""){
                    console.log('oui et toi ?')
                    const divError = createDivError(container)
                    createMessageError(divError, `Le champ ${input.name} n'a pas été remplis`)
                }else{

                }
            }
        })
        e.preventDefault();
    });

    const createDivError = function(HTMLelementAppendTo){
        const divError = document.createElement('div')
        $(".divError").attr("class", "error")

        HTMLelementAppendTo.appendChild(divError)
        HTMLelementAppendTo.classList.add('column-reverse')
        const divErrorDom = document.querySelector('.error')
        return divErrorDom
    }

    const createMessageError = function(HTMLelementAppendTo, messageError){
        const pError = document.createElement('p');
        const textError = document.createTextNode(messageError);

        pError.appendChild(textError);

        HTMLelementAppendTo.appendChild(pError);
    }
});