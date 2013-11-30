API.on(API.CHAT, beatles);
function beatles(data)
{
    if (data.message.indexOf("beatles") !== -1 && data.from !== "Schizoid man" || data.message.indexOf("Beatles") !== -1 && data.from !== "Schizoid man")
	{
	    API.sendChat("Well I'll live the Beatles, for she reason I'm obsessed with Jason Brazil");
	}
	
}
