// footer
const block = document.querySelectorAll('.footer-content__block');
const icons = document.querySelectorAll('.footer-content__block-icons');

block.addEventListener('mouseover', function (event) {
	const target = event.target;
	icons.style.backgroundColor = 'red';
});

console.log(icons);
