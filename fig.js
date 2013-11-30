API.on(API.CHAT, begin);
var fig = false;
var froge = false;
var longfig = "";
var longfroge = "";
function begin(data)
{
    if (data.message == ":startfig:")
	{
	    fig = true;
	}
	else if (data.message == ":stopfig:")
	{
	    fig = false;
	}
	else if (data.message == ":startfroge:") 
	{
	    froge = true;
	}
	else if (data.message == ":stopfroge:")
	{
	   if (data.from == "Schizoid man")
	   {
	      froge = false;
	   }
	   else
	   {
	       API.sendChat("@"+data.from+" You can't :stopfroge: while froge is playing!");
	   }
	}
}

API.on(API.CHAT, startfig)
function startfig(data)
{
    if (fig)
    {
	    for(var i = 0; i < Math.floor(Math.random() * (14 - 1 + 1)) + 1; i++)
		{
		    longfig += ":eggplant:";
		}
		API.sendChat(longfig);
		longfig = "";
    }

    if (froge)
	{
	    for(var i = 0; i < Math.floor(Math.random() * (14 - 1 + 1)) + 1; i++)
		{
		    longfroge += ":frog:";
		}
		API.sendChat(longfroge);
		froge = "";
	}
    else {}	
}
