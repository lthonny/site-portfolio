const numb = document.querySelector('.numb');
let counter = 0;
setInterval(() => {
	if (counter == 30) {
		clearInterval();
	} else {
		counter += 1;
		numb.textContent = counter + '%';
	}
}, 80);
