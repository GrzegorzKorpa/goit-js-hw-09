const form = document.querySelector(`.feedback-form`);

form.addEventListener('submit', submitDone);



const email = document.querySelector(`.email`);

const message = document.querySelector(`.message`);



const saveFormData =

  JSON.parse(localStorage.getItem('feedback-form-state')) || {};



form.addEventListener('input', evt => {

  if (evt.target === email) {

    saveFormData.email = evt.target.value.trim();

    localStorage.setItem('feedback-form-state', JSON.stringify(saveFormData));

  } else if (evt.target === message) {

    saveFormData.message = evt.target.value.trim();

    localStorage.setItem('feedback-form-state', JSON.stringify(saveFormData));

  }

});



function submitDone(event) {

  event.preventDefault();

  if (email.value === '' || message.value === '') {

    return alert('All form fields must be filled in');

  }

  console.log('Submit done!');

  console.log(saveFormData);

  form.reset();

  localStorage.removeItem('feedback-form-state');

  alert(`Good job!\nSubmit done!`);

}