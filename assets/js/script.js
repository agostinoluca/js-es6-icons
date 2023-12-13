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

console.log('Hello World');

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

// collego tramite id un container del file html
const containerEl = document.getElementById('cardContainer');

// con un for loop creo un box per ogni oggetto della array
iconsList.forEach(icon => {
    console.log(icon.name);

    // creo gli elementi da inserire al contenitore
    const card = document.createElement("div");
    const cardIcon = document.createElement("i");
    const cardTitle = document.createElement("h6");


    // aggiungo la classe al div creato per creare la card
    card.classList.add('cardAwesome');


    // inserisco le classi delle icone
    cardIcon.classList.add(icon.prefix + icon.name);
    cardIcon.classList.add('fa-solid');


    // inserisco i nomi delle icone al titolo h6 della card
    cardTitle.innerText = icon.name;

    // con append inserisco la card, l'icona e il titolo al containerEl
    containerEl.append(card); 
    card.append(cardIcon);
    card.append(cardTitle);

    // creo una condizione per assegnare un colore alle icone
    if (icon.color === 'blue') {
        cardIcon.classList.add('user');        
    } else if (icon.color === 'green') {
        cardIcon.classList.add('vegetable');
    } else {
        cardIcon.classList.add('animal');
    }
});

// inserisco il select in una costante
const iconSelect = document.getElementById('iconSelect');

// itero per creare le opzioni (IN LAVORAZIONE, APPROCCIO PROBABILMENTE NON CORRETTO)
iconsList.forEach(optionIcons => {
    const optionIcon = document.createElement("option");

    optionIcon.innerText = optionIcons.type;

    iconSelect.append(optionIcon);
    
});