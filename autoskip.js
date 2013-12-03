API.on(API.CHAT, forceskip)
var d = document.getElementsByTagName("span")[7];
function forceskip(data)
{
    if (data.message === "%skip")
	{
		if (d.innerHTML === "00:00")
		{
			API.moderateForceSkip();
			API.sendChat("AutoSkip: Video reached end");
		}
		else
		{
			API.sendChat("You may not skip a dj unless their song has already ended!");
		}

	}
	else
	{
	}
}
