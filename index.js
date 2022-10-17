document.addEventListener('DOMContentLoaded', () => {
	fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
  .then((response) => response.json())
  .then((data) => {
    console.log('Data', data);
  })
  data.forEach((obj) => {
    inputData(obj);
    console.log('category')
    });
    
});





const container = document.querySelector('.product_section');
const category = document.querySelector('#category');

function inputData(makeupInfo) {
  const divCard = document.createElement('div');
	const btn = document.createElement('button');
	const liked = document.createElement('div');
	const name = document.createElement('div');
	const img = document.createElement('img');
	const desc = document.createElement('div');
	const price = document.createElement('div');
  name.innerText = makeupInfo.name;
	price.innerText = `Price: $${makeupInfo.price}`;
  desc.innerText = makeupInfo.description
  desc.setAttribute('class', 'desc')
  img.setAttribute('class', 'makeup-products');
	divCard.setAttribute('class', 'card');
	btn.setAttribute('class', 'like-btn');
	btn.innerText = '♥';
  btn.addEventListener('click', function (event) {
		const newLikes = (liked.innerText) 
	liked.innerText = `${newLikes} Liked!`
  });
	img.src = 'https:' + makeupInfo.api_featured_image; //concatenation
  divCard.append(name, img, price, btn, liked,desc);
  img.addEventListener('mouseover', function () {
		// console.log('working');
		// alert('working');
		// console.log(makeupInfo.description);
		desc.style.display = 'block';
	});
  img.addEventListener('mouseleave', function () {
		// console.log('working');
		// alert('working');
		// console.log(makeupInfo.description);
		desc.style.display = 'none';
	});

  container.append(divCard);




}