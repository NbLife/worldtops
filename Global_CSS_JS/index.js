'use strict';

let button = document.querySelector('.button');
// let button_2 = document.querySelector('.button_2');
let active = document.querySelector('.active');
button.classList.remove('button_active');

/*button.addEventListener('click', () => {
	/*active.classList.remove('active');
	button.classList.add('button_active');*/
	//button_2.classList.remove('button_active_2');
	/*if(button.classList.contains('button_active')){
		//button.classList.remove('button_active');
		button.innerText='Больше';
		active.classList.add('active');
		
	}else{
		//button.classList.add('button_active');
		button.innerText='Скрыть';
		active.classList.remove('active');
	}
	button.classList.toggle('button_active');
});*/
button.addEventListener('click', () => {
let openProperty = button.dataset.open;

console.dir(button);
if(openProperty=='true'){
	button.dataset.open='false';
	button.innerText='Больше';
	active.classList.add('active');
}else{
	button.dataset.open='true';
	button.innerText='Скрыть';
	active.classList.remove('active');
}
});


/*button_2.addEventListener('click', () => {
	active.classList.add('active');
	button.classList.remove('button_active');
	button_2.classList.add('button_active_2');
});*/