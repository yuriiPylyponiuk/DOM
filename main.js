//1. створити список з допомогою роботи з домом, пронумерувати список та 
//вивести всі його значення. Населення відобразити в млн "40 млн". Київ та
//Україна підсвітити синьо-жовтим кольором.

/*let countryList = [

	{
		country: "Україна",
		capital:"Київ",
		count: 40000000
	},

	{
		country: "Грузія",
		capital:"Тбілісі",
		count: 10000000
	},

	{
		country: "Великобританія",
		capital:"Лондон",
		count: 100000000
	},

	{
		country: "США",
		capital:"Вашингтон",
		count: 300000000
	},
	{
		country: "Китай",
		capital:"Пекін",
		count: 1000000000
	}
];

function createListOfCountry(arr){
	for (let i = 0; i < arr.length; i++) {
		let country = document.createElement('ol');
		for (let key in arr[i]){
			
			let countryInformation = document.createElement('li');
			let data = arr[i][key];
			let countryProperty = key;


			//Checked Ukraine and Kyiv
			if (arr[i][key] == 'Україна'){
				countryInformation.innerHTML = `${countryProperty}: <span class='blue'>${data}</span>`
				country.appendChild(countryInformation);
				continue;
			}else if (arr[i][key] == 'Київ') {
				countryInformation.innerHTML = `${countryProperty}: <span class='yellow'>${data}</span>`
				country.appendChild(countryInformation);
				continue;
			}
			//checked number of a men
			if (Number.isInteger(arr[i][key]) == true ) {
				data = data.toString();
				if (data.length > 6 && data.length <= 9){
					data = `${data.slice(0, data.length - 6)}млн.`
					console.log(data);
				}else if (data.length > 9){
					data = `${data.slice(0, data.length - 9)}млд.`
					console.log(data);
				}
			}
			countryInformation.textContent = `${countryProperty}: ${data}`
			country.appendChild(countryInformation);
		}
		document.body.appendChild(country);
	}
};
createListOfCountry(countryList);*/


// 2. Створити список в якому можна буде довільно змінювати колір 
// для айтемів (палітра мінімум з 5 кольорів).

let btnCreateList = document.querySelector('.createList');
let btnSection = document.querySelector('.btns');
let section = document.createElement('section');
let nextElementBtn = document.querySelector('.nextElement');
let previosElementBtn = document.querySelector('.previosElement');
let firstElementBtn = document.querySelector('.firstElement');
let lastElementBtn = document.querySelector('.lastElement');
let redColorBtn = document.querySelector('.redColor');
let blueColorBtn = document.querySelector('.blueColor');
let randomColorBtn = document.querySelector('.randomColor');
let reserAllStylesBtn = document.querySelector('.reserAllStyles');
let deleteBtn = document.querySelector('.delete');
let count = 0;
let checkedElemCount = 0;
let a,b,c;

window.onload = () => {
	btnSection.after(section);
}


btnCreateList.onclick = () => {
	count += 1;
	let str = `User item ${count}`;
	let newParagraph = document.createElement('p');
	
	newParagraph.textContent = str;
	section.appendChild(newParagraph)
}	



nextElementBtn.onclick = () => {
	let selectElementP = document.querySelectorAll('section p');
	
	
	if (checkedElemCount == selectElementP.length) {
		return
	}else {
		reset();
		selectElementP[checkedElemCount].classList.add('select');
		checkedElemCount++;
	}
}

previosElementBtn.onclick = () => {
	let selectElementP = document.querySelector('.select');
	
	if (selectElementP.previousSibling == null) {
		return
	}else{
		reset();

		selectElementP.previousSibling.classList.add('select');
		checkedElemCount--;
	}

}

firstElementBtn.onclick = () => {
	reset();
	checkedElemCount = 0;
	let selectElementP = document.querySelectorAll('section p');
	selectElementP[0].classList.add('select');
	if (checkedElemCount == 0){
		checkedElemCount++;	
	}
}

lastElementBtn.onclick = () => {
	reset();
	let selectElementP = document.querySelectorAll('section p');
	checkedElemCount = selectElementP.length;
	selectElementP[selectElementP.length-1].classList.add('select');
}

redColorBtn.onclick = () => {
	let selectElementP = document.querySelector('.select');
	selectElementP.classList.add('red');
}


blueColorBtn.onclick = () => {
	let selectElementP = document.querySelector('.select');
	selectElementP.classList.add('blue');
}


randomColorBtn.onclick = () => {
	let selectElementP = document.querySelector('.select');
	randomNumber ();
	selectElementP.style.color = `rgb(${a},${b},${c})`;
}


reserAllStylesBtn.onclick = () => {
	reset();
	let resetElements = document.querySelectorAll('section p');
	resetElements.forEach( function(element1) {
		element1.style.color = `black`;
		//видаляє всі стилі присвоєні і дефолтні
		element1.classList.forEach( function(element2) {
			element1.classList.remove(element2);
		});
	});
	checkedElemCount = 0;
}



deleteBtn.onclick = () => {
	let selectElementP = document.querySelector('.select');
	let selectElementPNew = document.querySelector('section p.select');
	
	selectElementPNew.previousSibling.classList.add('select');
	selectElementP.remove();
	checkedElemCount -= 1;
}


function randomNumber () {
	let MIN = 0;
	let MAX = 255;
	a = Math.floor((Math.random() * (MAX - MIN + 1)) + MIN);
	b = Math.floor((Math.random() * (MAX - MIN + 1)) + MIN);
	c = Math.floor((Math.random() * (MAX - MIN + 1)) + MIN);
}


function reset(){
	let resetElements = document.querySelectorAll('section p');
	resetElements.forEach( function(element) {
		element.classList.remove('select');
	});
}