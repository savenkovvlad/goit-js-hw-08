


import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";
let obj = {};

const refs = {
    feedbackForm: document.querySelector('.feedback-form'),
    inputEmail: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea')
};

refs.feedbackForm.addEventListener('submit', onSubmitForm);
refs.feedbackForm.addEventListener('input', throttle(onInputForm, 500));
localStorageHistory();

function onInputForm(event) {    
    obj[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));    
 }

function onSubmitForm(event) {
    event.preventDefault();
   
    if(!obj.email || !obj.message){
        alert('Заполните все поля, пожалуйста) 🍀')
    } else {
        console.log(obj);     
         event.target.reset();
        localStorage.removeItem(STORAGE_KEY);
        obj = {};       
    }    
};

function localStorageHistory() {
    const storageGetItem = localStorage.getItem(STORAGE_KEY);
  
    if (storageGetItem) {
        obj = JSON.parse(storageGetItem);
        
        refs.textarea.value = obj.message ?? '';
        refs.inputEmail.value = obj.email ?? '';
    }
}





