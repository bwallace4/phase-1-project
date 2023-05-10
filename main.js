function searchPokemon (name){
	var url = 'https://pokeapi.co/api/v2/pokemon/' + name 
	fetch(url).then(function(response){
		console.log(response);
	})
}

async function getPokeMonList (){
	var url = 'https://pokeapi.co/api/v2/pokemon/'; 
	var response = await fetch(url)
	var data = await response.json();

	var result = data.results.forEach(function(item){
	let selectOption = document.createElement('option');
		selectOption.text = item.name;
		selectOption.value = item.name;
		document.getElementById('pokeSearch').append(selectOption);

	});
}

function initEventListerners(){
	document.getElementById('pokeSearchButton').addEventListener('click', function(){
		var searchValue = document.getElementById('pokeSearch').value;
		searchPokemon(searchValue);
	});
}

function init(){
	getPokeMonList();
	initEventListerners();
}

document.addEventListener('DOMContentLoaded', function(event) { 
  init();
});
