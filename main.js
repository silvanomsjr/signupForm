const form = document.querySelector('.form');
const firstName = document.querySelector('.f-name');
const lastName = document.querySelector('.l-name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const errorIcon = document.querySelectorAll('.hidden');
const inputDivs = document.querySelectorAll('.inputs-divs');
const arrayInputs = [firstName, lastName, email, password];


function removeErrors(){
    for(let x of document.querySelectorAll('.error')){
        x.remove();
    }
}

function createError(input){
    const inputName = input.getAttribute('placeholder');
    input.style.border = '2px solid var(--red)';
    const index = arrayInputs.indexOf(input);
    const pError = document.createElement('p');
    pError.classList.add('error');
    if(inputName == 'Email Address'){
        pError.innerText = `Looks like this is not an email`;
    }else{
        pError.innerText = `${inputName} cannot be empty`;
    }
    inputDivs[index].appendChild(pError);
    errorIcon[index].setAttribute('class', 'error-icon');

   
}

form.addEventListener('submit', (e)=>{

    removeErrors();
    for(let x in arrayInputs){
        if(arrayInputs[x].value === ""){
            e.preventDefault();
            createError(arrayInputs[x]);

        }else{
            arrayInputs[x].style.border = '1px solid var(--green)';
            errorIcon[x].removeAttribute('class', 'error-icon');
            errorIcon[x].setAttribute('class', 'hidden');
        }
    }

});

