import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
let values = {};


values = JSON.parse(localStorage.getItem("feedback-form-state"));
if (values != null) {
  form.querySelectorAll('[name]').forEach((event) => {
    event.value = values[event.name];
  });
} else
  values = {};


const asignacionEvent = (e) => {
  values[e.target.name] = e.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(values));
}

const submit = (e) => {
  console.log(localStorage.getItem("feedback-form-state"));
  localStorage.clear();
  form.reset();
  e.preventDefault();
}

form.addEventListener('input', throttle(asignacionEvent, 500));
form.addEventListener('submit', submit);