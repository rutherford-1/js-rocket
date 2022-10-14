// hey this is invisible comment
var doCoolStuff = function () {
	document.getElementById('cool').className = 'cool blue';
}
var artifact = {
		set: 'Gilded Dreams',
		piece: 'Goblet',
		mainStat: 'Dendro DMG',
		isEquipped: false,
		substats: ['EM','ER','ATK%','CR'],
		equip: function () {
			this.isEquipped = true;
		},
		unequip: function () {
			this.isEquipped = false;
		},
}

console.log('hello there friends!');

	