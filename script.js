import { type1, type2, type3, type4 } from './obj.js'

let pipes110 = document.querySelector('.pipes110');
let pipes63 = document.querySelector('.pipes63');
let pipes50 = document.querySelector('.pipes50');
let pipes40 = document.querySelector('.pipes40');
let pipesExtras = document.querySelector('.pipesExtras');

let rooms = document.querySelectorAll('.room');

rooms.forEach(room => room.addEventListener('click', activateRoom))


//Event functions
function activateRoom(e) {
	rooms.forEach(room => {
		if(room.classList.contains("roomActive")) {
			room.classList.remove("roomActive");
		}
	})

	e.target.classList.add("roomActive");

	switch(e.target.classList[1]) {
	  	case 'type1': makeAllCards(type1);
	  		break;
	  	case 'type2': makeAllCards(type2);
	  		break;
	  	case 'type3': makeAllCards(type3);
	  		break;
	  	case 'type4': makeAllCards(type4);
	  		break;
	  	default: '';
	  		break;
	  	
	}

}

function makeCards(obj, category) {
	let h2 = document.createElement('h2');
	h2.textContent = category;

	let divPipesContainer = document.createElement('div');
	divPipesContainer.className = "pipesCardsContainer";

	//Loop for cards
	for(let prop in obj) {
		let divCard = document.createElement('div');
		divCard.className = "pipesCard";

		//img
		if(category != 'Extras') {
			let cardImgContainer = document.createElement('div');
			cardImgContainer.className = "cardImgContainer";

			let img = document.createElement('img');
			img.src = obj[prop][1];

			cardImgContainer.append(img);

			divCard.append(cardImgContainer);
		}

		//text
		let cardTextContainer = document.createElement('div');
		let pipeDetail = document.createElement('p');
		pipeDetail.textContent = prop;
		let amount = document.createElement('p');
		amount.className = 'amount';
		amount.textContent = 'x ' + obj[prop][0];

		cardTextContainer.append(pipeDetail);
		cardTextContainer.append(amount);

		divCard.append(cardTextContainer);

		divPipesContainer.append(divCard);
	//end loop
	}

	//ugly if, sue me
	if(category == 110) {
		pipes110.innerHTML = "";
		pipes110.append(h2);
		pipes110.append(divPipesContainer);
	} else if(category == 63) {
		pipes63.innerHTML = "";
		pipes63.append(h2);
		pipes63.append(divPipesContainer);
	} else if(category == 50) {
		pipes50.innerHTML = "";
		pipes50.append(h2);
		pipes50.append(divPipesContainer);
	} else if(category == 40) {
		pipes40.innerHTML = "";
		pipes40.append(h2);
		pipes40.append(divPipesContainer);
	} else if(category == 'Extras') {
		pipesExtras.innerHTML = "";
		pipesExtras.append(h2);
		pipesExtras.append(divPipesContainer);
	}

}

function makeAllCards(type) {
	makeCards(type.pipes110, 110);
	makeCards(type.pipes63, 63);
	makeCards(type.pipes50, 50);
	makeCards(type.pipes40, 40);
	makeCards(type.extras, 'Extras');
}
