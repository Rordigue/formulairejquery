// window.onload = function (){

//     const form = document.querySelector('form');
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
    const inputs = $('input');
    const container = $('#container')
    console.log(inputs)
    console.log(container)
    $(":submit").click(function(e){
        console.log('le bouton marche')
        Object.keys(inputs)
            .filter(key => Number.isInteger(parseInt(key,10)))
            .forEach(key => {
                    console.log(key)
            console.log($(inputs[key]))
            if($(inputs[key]).attr('name') !== "valider"){
                console.log('salut ça va')
                console.log('value : ', $(inputs[key]).eq(0).val())
                if($(inputs[key]).val().trim() === ""){
                    const divError = createDivError(container)
                    createMessageError(divError, `Le champ ${$(inputs[key]).attr('name')} n'a pas été remplis`)
                }else{

                }
                    
            }
        })
        e.preventDefault();
    });

    const createDivError = function(HTMLelementAppendTo){
        const divError = $('<div></div>')
        divError.addClass("error")

        HTMLelementAppendTo.append(divError)
        HTMLelementAppendTo.addClass('column-reverse')
        const divErrorDom = $('.error')
        return divErrorDom
    }

    const createMessageError = function(HTMLelementAppendTo, messageError){
        const pError = $('<p></p>');
        const textError = pError.text(messageError)

        pError.append(textError);

        HTMLelementAppendTo.append(pError);
    }
});