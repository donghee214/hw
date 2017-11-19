let options = document.getElementById('options');


var destroyFunction = function(){
	this.remove()
}

var createRoom = function(){
	document.getElementById('label').style.opacity = 1;
	document.getElementById('roomId').style.zIndex = 1;
	var continueButton = document.createElement("div");
	continueButton.className = "continueButton";
	
	document.getElementById('body').appendChild(continueButton);
}

var roomName;

var createPlaylist = function(){
	roomName = document.getElementById('input1').value;
	document.getElementById('roomId').addEventListener("animationend", destroyFunction);
	document.getElementById('roomId').style.WebkitAnimation = "translateIdToBottom 0.35s 1";
	document.getElementsByClassName('continueButton')[0].remove();

	document.getElementById('create').innerHTML = roomName;
	document.getElementById('create').style.marginTop = 0;
	var title = document.getElementById('muse');
	title.className = "joinCode"
	title.innerHTML = "CODE:";
	var addSongButton = document.createElement("div");
	addSongButton.className = "addSongButton";
	var controlButtons = document.createElement("div");
	controlButtons.className += "controlContainer";
	var back = document.createElement("div");
	back.className = "back";
	var play = document.createElement("div");
	play.className = "play";
	var next = document.createElement("div");
	next.className = "next";
	controlButtons.appendChild(back);
	controlButtons.appendChild(play);
	controlButtons.appendChild(next);
	document.getElementById('body').appendChild(addSongButton);
	var darkBackground = document.createElement('div');
	darkBackground.className += "backgroundDark";
	darkBackground.appendChild(controlButtons);
	document.getElementById('body').appendChild(darkBackground);
	document.getElementsByClassName('addSongButton')[0].addEventListener('click', searchSong)
}

var searchSong = function(){
	var searchBar = document.createElement("input");
	searchBar.className += "searchBar";
	searchBar.placeholder = "Search";
	document.getElementsByClassName('controlContainer')[0].style.display = "none";
	document.getElementsByClassName('backgroundDark')[0].appendChild(searchBar);
	document.getElementsByClassName('searchBar')[0].style.WebkitAnimation = "showSearchBar 0.35s 1";
	document.getElementsByClassName('addSongButton')[0].removeEventListener('click', searchSong);
	document.getElementsByClassName('addSongButton')[0].addEventListener('click', searchFunction);
	document.getElementsByClassName('addSongButton')[0].className += " searchIcon";

}

var previous = function(){
	document.getElementsByClassName('songContainer')[0].remove();
	document.getElementById('create').innerHTML = roomName;
	document.getElementById('muse').innerHTML = 'CODE:';
}





var createSongBoxes = function(arr){
	var ret = []
	for(var i = 0; i < arr.length; i++){
		var outerBlock = document.createElement('div');
		outerBlock.className = "songBox";
		var songTitle = document.createElement('h2');
		songTitle.className = "songTitle";
		songTitle.innerHTML = arr[i].name;
		var artistName = document.createElement('h3');
		artistName.className = "artistName";
		artistName.innerHTML = arr[i].artist;
		var image = document.createElement('img');
		image.className = "imageName";
		image.src = arr[i].imageUrl;
		var songLength = document.createElement('h3');
		songLength.className = 'songLength';
		songLength.innerHTML = arr[i].songLength;
		var sampleButton = document.createElement('div');
		sampleButton.className += "sampleButton";
		var idArray = document.createElement('p');
		idArray.style.display = "none";
		idArray.innerHTML = arr[i].id;
		var songPlaybackUri = document.createElement('p');
		songPlaybackUri.style.display = "none";
		songPlaybackUri.innerHTML = arr[i].songPlaybackUri;

		outerBlock.appendChild(songTitle);
		outerBlock.appendChild(artistName);
		outerBlock.appendChild(sampleButton);
		outerBlock.appendChild(image);
		outerBlock.appendChild(songLength);
		outerBlock.appendChild(idArray);
		outerBlock.appendChild(songPlaybackUri);
		ret.push(outerBlock)
	}
	console.log(ret)
	return ret
}

var returnResults = function(songName){
	var songContainer = document.createElement("div")
	songContainer.className = "songContainer";
	var song1 = {
		name: "songName",
		artist: "artistName",
		imageUrl: "add.svg",
		songLength: "3:26",
		sampleUrl: 'test',
		id: 'uniqueId',
		songPlaybackUri: 'someOtherId'
	}
	var arraySongs = [song1, song1, song1, song1, song1, song1];
	var arraySongsObjects = createSongBoxes(arraySongs)

	for (var i = 0; i < arraySongsObjects.length; i++){
		songContainer.appendChild(arraySongsObjects[i])
	}
	body.appendChild(songContainer);
	var backBox = document.createElement('div');
	backBox.addEventListener('click',previous);
	backBox.className = "backArrow";
	body.appendChild(backBox);
}

var searchFunction = function(){
	var title = document.getElementById('muse');
	document.getElementsByClassName('addSongButton')[0].addEventListener('click', searchSong);
	title.innerHTML = "Search Results For";
	document.getElementsByClassName('controlContainer')[0].style.display = "flex";
	document.getElementById('create').innerHTML = document.getElementsByClassName('searchBar')[0].value;
	returnResults(document.getElementsByClassName('searchBar')[0].value);
	document.getElementsByClassName('searchBar')[0].remove()
	document.getElementsByClassName('addSongButton')[0].classList.remove("searchIcon");
}






options.addEventListener('click', function(e){
	if (e.target.id == "create"){
		document.getElementById('join').addEventListener("animationend", destroyFunction);
		document.getElementById('backgroundImage').addEventListener("animationend", destroyFunction);
		document.getElementById('muse').addEventListener("animationend", createRoom);
		document.getElementById('backgroundImage').style.WebkitAnimation = "translateUp 0.35s 1";
		document.getElementById('join').style.WebkitAnimation = "translateDown 0.35s 1";
		document.getElementById(e.target.id).style.WebkitAnimation = "translateTopTitleCreate 0.35s 1";
		document.getElementById('muse').style.WebkitAnimation = "translateTop 0.35s 1";

		// document.getElementById('backgroundImage').addEventListener("animationend", destroyFunction);

	}
	else if(e.target.id == "join"){
		console.log("join")
	}


});

document.getElementById('input1').addEventListener('keydown', function(){
	if(this.value.length > 3){
		document.getElementsByClassName('continueButton')[0].className += ' continueGreen';
		document.getElementsByClassName('continueButton')[0].addEventListener('click', createPlaylist)
	}
});
