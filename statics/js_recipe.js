const element = document.querySelector('#myText');
element.addEventListener('input' , handleChange);

function handleChange(event) {
  const value = event.target.value;
  document.querySelector('.log').innerHTML = value;
}