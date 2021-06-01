// footer
const block = document.querySelector('.footer-content__block');
const icons = document.querySelectorAll('.footer-content__block-icons');

console.log(icons);

block.addEventListener('mouseover', event => {
	console.log('Mouse in');
	icons.style.backgroundColor = '#fff';
});
// block.addEventListener('click', () => alert('1'));
