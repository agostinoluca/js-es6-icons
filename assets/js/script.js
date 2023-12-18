/* 
Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.

Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

BONUS 1
-modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.

BONUS 2
-popolare le options della select della milestone 3 dinamicamente.

*/

// creo l'array di oggetti con i dati forniti
const iconsList = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// creo delle variabili per la futura assegnazione del colore casuale per categoria di icona
let animalColor = hexRandomColor();
let userColor = hexRandomColor();
let vegetableColor = hexRandomColor();

// collego tramite id un container del file html
const containerEl = document.getElementById('cardContainer');

// utilizzo una funzione per creare e stampare tutte le icone
iconsList.forEach(icon => {
	createIcon(icon);
});

// inserisco il select in una costante
const iconSelect = document.getElementById('iconSelect');

// aggiungo un addEventListener('change') al select
iconSelect.addEventListener('change', function(){

	// creo una variabile per leggere la value select
	let valueType = iconSelect.value;

	// svuotare l`html del container, altrimenti aggiunge le card a quelle già esistenti
	containerEl.innerHTML = '';
	
	// con un for loop creo un box per ogni oggetto della array
	iconsList.forEach(icon => {
		
		// la condizione filtra il tipo dell'icona identico al select oppure il campo vuoto dell'opzione ALL
		if (icon.type === valueType || valueType === '') {

			// richiamo la funzione per creare le card delle icone selezionate dal select
			createIcon(icon);
		}
	});
	
});


// creo un array dedicata al menù select
let optionList = [];

// itero per creare le opzioni
iconsList.forEach(optionIcons => {
		
	// creo una condizione con valore booleano opposto per stabilire se l`array contiene o meno il tipo di icona 
	if (!optionList.includes(optionIcons.type)) {
		// se non lo contiene pusha nella array l'opzione
		optionList.push(optionIcons.type);
		// creo l'opzione
		const optionIcon = document.createElement("option");
		// scrivo dentro l'opzione
		optionIcon.innerText = optionIcons.type;
		// collego al mio html l'opzione appena creata
		iconSelect.append(optionIcon);
	}
	
});


// funzione per creare i box delle icone
function createIcon(icon) {
	// creo gli elementi da inserire al contenitore
	const card = document.createElement("div");			// crea la card
	const cardIcon = document.createElement("i");		// crea l`icona
	const cardTitle = document.createElement("h6");		// crea il titolo dell`icona
	
	
	// aggiungo la classe al div creato per creare la card
	card.classList.add('cardAwesome');
	
	
	// inserisco le classi delle icone
	cardIcon.classList.add(icon.prefix + icon.name);	// aggiunge il tipo d'icona
	cardIcon.classList.add('fa-solid');					// aggiunge stile all`icona
	
	
	// inserisco i nomi delle icone al titolo h6 della card
	cardTitle.innerText = icon.name;
	
	// con append inserisco la card, l'icona e il titolo al containerEl
	containerEl.append(card);	// appendo il box
	card.append(cardIcon);		// appendo l'icona
	card.append(cardTitle);		// appendo il titolo
	
	// creo una condizione per assegnare un colore alle icone
	if (icon.type === 'animal') {			
		// cardIcon.classList.add('user');
		cardIcon.style.color = animalColor;
	} else if (icon.type === 'user') {
		// cardIcon.classList.add('vegetable');
		cardIcon.style.color = userColor;
	} else {
		// cardIcon.classList.add('animal');
		cardIcon.style.color = vegetableColor;
	}
};

// funzione per creare un colore casuale in esadecimale
function hexRandomColor() {
	// inserisco in costante i caratteri utilizzati dai colori HEX
	const characters = '0123456789ABCDEF';

	// inizializzo la variabile del colore con il cancelletto
	let color = '#';
	
	// itero per 6 volte tutti i caratteri
	for (let i = 0; i < 6; i++) {
		// aggiungo alla variabile color le 6 cifre ottenute arrotondando per difetto
		color += characters[Math.floor(Math.random() * 16)]; 
	}
	// faccio il return della variabile finalizzata
	return color;
  };