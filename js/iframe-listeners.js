function receiveMessage(event)
{
	console.log("receiveMessage");
  	console.log(event)
}

window.addEventListener("nextLevel", receiveMessage, false);