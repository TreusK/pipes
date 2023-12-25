let pipes110 = document.querySelector('.pipes110');
let pipes63 = document.querySelector('.pipes63');
let pipes50 = document.querySelector('.pipes50');
let pipes40 = document.querySelector('.pipes40');
let pipesExtras = document.querySelector('.pipesExtras');
let rooms = document.querySelectorAll('.room');
let firstMain = document.querySelector('.firstMain');
let normalMain = document.querySelector('.normalMain');

//State of main
let firstMainState = true;

rooms.forEach(room => room.addEventListener('click', activateRoom))


//Event functions
function activateRoom(e) {
	rooms.forEach(room => {
		if(room.classList.contains("roomActive")) {
			room.classList.remove("roomActive");
		}
	})

	e.target.classList.add("roomActive");

	if(firstMainState) { 
		firstMain.classList.add('hide');
		normalMain.classList.remove('hide');
		firstMainState = false;
	}

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
		if(obj[prop][0] == 0) { continue }
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


//Deptos obj 
//Deptos tipo 1
let type1 = {
	pipes110: {
		"caño 110 4m": [10, './imgs/110 4m.png'],
		"caño 110 2m": [20, './imgs/110 2m.png'],
		"caño 110 1m": [30, './imgs/110 1m.png'],
		"caño 110 50cm": [0, './imgs/110 30cm.png'],
		"caño 110 30cm": [4, './imgs/110 30cm.png'],
		"ramal Y 110 110": [2, './imgs/ramal Y 110.png'],
		"ramal Y 110 64": [2, './imgs/ramal Y 110 64.png'],
		"ramal L c/vent": [2, './imgs/ramal L 110 ventilacion.png'],
		"curva 110 45'": [2, './imgs/curva 110 45 grados.png'],
		"curva 110 90'": [2, './imgs/codo 110 90 grados.png'],
	},

	pipes63: {
		"caño 63 4m": [0, './imgs/63 4m.png'],
		"caño 63 2m": [6, './imgs/63 2m.png'],
		"caño 63 1m": [0, './imgs/63 1m.png'],
		"caño 63 50cm": [2, './imgs/63 30cm.png'],
		"caño 63 30cm": [8, './imgs/63 30cm.png'],
		"ramal Y 63 63": [2, './imgs/ramal Y 63.png'],
		"curva 63 45'": [18, './imgs/curva 63 45 grados.png'],
		"curva 63 90'": [0, './imgs/curva 63 90 grados.png'],
	},

	pipes50: {
		"caño 50 4m": [0, './imgs/50 4m.png'],
		"caño 50 2m": [6, './imgs/50 2m.png'],
		"caño 50 1m": [0, './imgs/50 1m.png'],
		"caño 50 50cm": [2, './imgs/50 30cm.png'],
		"caño 50 30cm": [8, './imgs/50 30cm.png'],
		"curva 50 45'": [18, './imgs/curva 63 45 grados.png'],
		"curva 50 90'": [0, './imgs/curva 63 90 grados.png'],
	},

	pipes40: {
		"caño 40 4m": [0, './imgs/40 4m.png'],
		"caño 40 2m": [6, './imgs/40 2m.png'],
		"caño 40 1m": [0, './imgs/40 1m.png'],
		"caño 40 50cm": [2, './imgs/40 30cm.png'],
		"caño 40 30cm": [8, './imgs/40 30cm.png'],
		"curva 40 45'": [4, './imgs/curva 63 45 grados.png'],
		"curva 40 90'": [18, './imgs/codo 63 90 grados.png'],
	},
};





//Deptos tipo 2
let type2 = {
	pipes110: {
		"caño 110 4m": [4, './imgs/110 4m.png'],
		"caño 110 2m": [0, './imgs/110 2m.png'],
		"caño 110 1m": [4, './imgs/110 1m.png'],
		"caño 110 50cm": [0, './imgs/110 30cm.png'],
		"caño 110 30cm": [4, './imgs/110 30cm.png'],
		"ramal Y 110 110": [2, './imgs/ramal Y 110.png'],
		"ramal Y 110 64": [2, './imgs/ramal Y 110 64.png'],
		"ramal L c/vent": [2, './imgs/ramal L 110 ventilacion.png'],
		"curva 110 45'": [2, './imgs/curva 110 45 grados.png'],
		"curva 110 90'": [2, './imgs/codo 110 90 grados.png'],
	},

	pipes63: {
		"caño 63 4m": [0, './imgs/63 4m.png'],
		"caño 63 2m": [6, './imgs/63 2m.png'],
		"caño 63 1m": [0, './imgs/63 1m.png'],
		"caño 63 50cm": [2, './imgs/63 30cm.png'],
		"caño 63 30cm": [8, './imgs/63 30cm.png'],
		"ramal Y 63 63": [2, './imgs/ramal Y 63.png'],
		"curva 63 45'": [18, './imgs/curva 63 45 grados.png'],
		"curva 63 90'": [0, './imgs/curva 63 90 grados.png'],
	},

	pipes50: {
		"caño 50 4m": [0, './imgs/50 4m.png'],
		"caño 50 2m": [6, './imgs/50 2m.png'],
		"caño 50 1m": [0, './imgs/50 1m.png'],
		"caño 50 50cm": [2, './imgs/50 30cm.png'],
		"caño 50 30cm": [8, './imgs/50 30cm.png'],
		"curva 50 45'": [18, './imgs/curva 63 45 grados.png'],
		"curva 50 90'": [0, './imgs/curva 63 90 grados.png'],
	},

	pipes40: {
		"caño 40 4m": [0, './imgs/40 4m.png'],
		"caño 40 2m": [6, './imgs/40 2m.png'],
		"caño 40 1m": [0, './imgs/40 1m.png'],
		"caño 40 50cm": [2, './imgs/40 30cm.png'],
		"caño 40 30cm": [8, './imgs/40 30cm.png'],
		"curva 40 45'": [4, './imgs/curva 63 45 grados.png'],
		"curva 40 90'": [18, './imgs/codo 63 90 grados.png'],
	},

	extras: {
		"pileta de patio": [4, './imgs/*.png'],
		"boca de acceso": [2, './imgs/*.png'],
		"subida cocina 50 65cm": [1, './imgs/*.png'],
		"subida baño 40 55cm": [1, './imgs/*.png'],
		"subida lavarropas 40 51cm": [1, './imgs/*.png'],
		"varilla roscada 30cm": [1, './imgs/*.png'],
		"perfil L": [3, './imgs/*.png'], 
	}

};




//Deptos tipo 3
let type3 = {
	pipes110: {
		"caño 110 4m": [4, './imgs/110 4m.png'],
		"caño 110 2m": [0, './imgs/110 2m.png'],
		"caño 110 1m": [4, './imgs/110 1m.png'],
		"caño 110 50cm": [0, './imgs/110 30cm.png'],
		"caño 110 30cm": [4, './imgs/110 30cm.png'],
		"ramal Y 110 110": [2, './imgs/ramal Y 110.png'],
		"ramal Y 110 64": [2, './imgs/ramal Y 110 64.png'],
		"ramal L c/vent": [2, './imgs/ramal L 110 ventilacion.png'],
		"curva 110 45'": [2, './imgs/curva 110 45 grados.png'],
		"curva 110 90'": [2, './imgs/codo 110 90 grados.png'],
	},

	pipes63: {
		"caño 63 4m": [0, './imgs/63 4m.png'],
		"caño 63 2m": [6, './imgs/63 2m.png'],
		"caño 63 1m": [0, './imgs/63 1m.png'],
		"caño 63 50cm": [2, './imgs/63 30cm.png'],
		"caño 63 30cm": [8, './imgs/63 30cm.png'],
		"ramal Y 63 63": [2, './imgs/ramal Y 63.png'],
		"curva 63 45'": [18, './imgs/curva 63 45 grados.png'],
		"curva 63 90'": [0, './imgs/curva 63 90 grados.png'],
	},

	pipes50: {
		"caño 50 4m": [0, './imgs/50 4m.png'],
		"caño 50 2m": [6, './imgs/50 2m.png'],
		"caño 50 1m": [0, './imgs/50 1m.png'],
		"caño 50 50cm": [2, './imgs/50 30cm.png'],
		"caño 50 30cm": [8, './imgs/50 30cm.png'],
		"curva 50 45'": [18, './imgs/curva 63 45 grados.png'],
		"curva 50 90'": [0, './imgs/curva 63 90 grados.png'],
	},

	pipes40: {
		"caño 40 4m": [0, './imgs/40 4m.png'],
		"caño 40 2m": [6, './imgs/40 2m.png'],
		"caño 40 1m": [0, './imgs/40 1m.png'],
		"caño 40 50cm": [2, './imgs/40 30cm.png'],
		"caño 40 30cm": [8, './imgs/40 30cm.png'],
		"curva 40 45'": [4, './imgs/curva 63 45 grados.png'],
		"curva 40 90'": [18, './imgs/codo 63 90 grados.png'],
	},

	extras: {
		"pileta de patio": [4, './imgs/*.png'],
		"boca de acceso": [2, './imgs/*.png'],
		"varilla roscada 30cm": [12, './imgs/*.png'],
		"perfil L": [6, './imgs/*.png'], 
	}
};




//Deptos tipo 4
let type4 = {
	pipes110: {
		"caño 110 4m": [4, './imgs/110 4m.png'],
		"caño 110 2m": [0, './imgs/110 2m.png'],
		"caño 110 1m": [4, './imgs/110 1m.png'],
		"caño 110 50cm": [0, './imgs/110 30cm.png'],
		"caño 110 30cm": [4, './imgs/110 30cm.png'],
		"ramal Y 110 110": [2, './imgs/ramal Y 110.png'],
		"ramal Y 110 64": [2, './imgs/ramal Y 110 64.png'],
		"ramal L c/vent": [2, './imgs/ramal L 110 ventilacion.png'],
		"curva 110 45'": [2, './imgs/curva 110 45 grados.png'],
		"curva 110 90'": [2, './imgs/codo 110 90 grados.png'],
	},

	pipes63: {
		"caño 63 4m": [0, './imgs/63 4m.png'],
		"caño 63 2m": [6, './imgs/63 2m.png'],
		"caño 63 1m": [0, './imgs/63 1m.png'],
		"caño 63 50cm": [2, './imgs/63 30cm.png'],
		"caño 63 30cm": [8, './imgs/63 30cm.png'],
		"ramal Y 63 63": [2, './imgs/ramal Y 63.png'],
		"curva 63 45'": [18, './imgs/curva 63 45 grados.png'],
		"curva 63 90'": [0, './imgs/curva 63 90 grados.png'],
	},

	pipes50: {
		"caño 50 4m": [0, './imgs/50 4m.png'],
		"caño 50 2m": [6, './imgs/50 2m.png'],
		"caño 50 1m": [0, './imgs/50 1m.png'],
		"caño 50 50cm": [2, './imgs/50 30cm.png'],
		"caño 50 30cm": [8, './imgs/50 30cm.png'],
		"curva 50 45'": [18, './imgs/curva 63 45 grados.png'],
		"curva 50 90'": [0, './imgs/curva 63 90 grados.png'],
	},

	pipes40: {
		"caño 40 4m": [0, './imgs/40 4m.png'],
		"caño 40 2m": [6, './imgs/40 2m.png'],
		"caño 40 1m": [0, './imgs/40 1m.png'],
		"caño 40 50cm": [2, './imgs/40 30cm.png'],
		"caño 40 30cm": [8, './imgs/40 30cm.png'],
		"curva 40 45'": [4, './imgs/curva 63 45 grados.png'],
		"curva 40 90'": [18, './imgs/codo 63 90 grados.png'],
	},
};
