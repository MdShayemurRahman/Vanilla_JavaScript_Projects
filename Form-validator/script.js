const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

//* check that every input filled up or not.
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
       if(input.value.trim() === '') {
           showError(input, getFieldName(input) + ' is required')
       } else  {
           showSuccess(input);
       }
    }) 
}

//* get field name  in  uppercase the first letter.
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//* check length of username and password
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be longer than  ${min} characters`);
    } else if(input.value.length > max) {
        showError( input, `${getFieldName(input)} must be shorter than  ${max} characters`);
    } else {
        showSuccess(input);
    }
}

//* Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.classList.add('error');
    const small = formControl.querySelector('small');
    small.textContent = message;
}

//* Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList.add('success');
}

//* check for valid email
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, "Email is not valid")
    }
}

//* check for password
function checkPasswordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, `Password does not match`);
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 20);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordMatch(password, password2)
})
