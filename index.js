document.addEventListener('DOMContentLoaded', () => {
	fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
  .then((response) => response.json())
  .then((data) => {
    console.log('Data', data);
  })

})