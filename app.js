window.addEventListener('load', ()=> {
	const display = document.querySelector('.calculator-display');
	const keypadButtons = document.getElementsByClassName('button');

	const keypadButtonsArray = Array.from(keypadButtons);

	keypadButtonsArray.forEach( (button) => {
		button.addEventListener('click', ()=>  {
			calculator(button, display)
	   })
	})
});

function calculator(button, display) {
	switch (button.innerHTML) {
		case 'C':
			borrar(display);
			break;
		case '=':
			calculate(display);
			break;
		default:
			refresh(display, button);
		break;
	}

}

function calculate(display) {
	display.innerHTML = eval(display.innerHTML);
}

function refresh(display, button){
	if (display.innerHTML == 0) {
		display.innerHTML = '';
	}
	display.innerHTML += button.innerHTML;
}

function borrar(display) {
	display.innerHTML = 0;
}










