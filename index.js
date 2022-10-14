document.addEventListener('DOMContentLoaded', () => {
	fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
  .then((response) => response.json())
  .then((data) => {
    console.log('Data', data);
  })
  data.forEach((obj) => {
    inputData(obj);
    });
    
});

function inputData(makeupInfo) {
  const divCard = document.createElement('div');
	const btn = document.createElement('button');
	const liked = document.createElement('div');
	const name = document.createElement('div');
	const img = document.createElement('img');
	const desc = document.createElement('div');
	const price = document.createElement('price');

}