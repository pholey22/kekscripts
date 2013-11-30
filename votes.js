API.on(API.CHAT, votes);
function votes(data)
{
    var message = data.message;
	var list = API.getUsers();
	var froge = "";
	if (data.message == "%woots")
	{
	    for (user in list)
		{
		    if (list[user].vote === 1)
			{
			    API.sendChat(list[user].username+" voted woot");
			}
		}
	}
	else if (data.message == "%mehs")
	{
	    for (user in list)
		{
		    if (list[user].vote === -1)
			{
			    API.chatLog(list[user].username+" voted meh");  
			}
		}
	}
	else if (data.message == "%test")
	{
	    API.sendChat("@"+data.from+" Up and running.");
	}
	else if (data.message == ":startfroge:")
	{
	   for (var i = 0; i < 5; i++)
	   {
	      froge += ":frog:";
		  API.sendChat(froge);
	   }
	   froge = "";
	}
	else if (data.message == "%grabs")
	{
	    for (user in list)
		{
		    if (list[user].curated === true)
			{
			    API.sendChat(list[user].username+" grabbed this");  
			}
		}
	}
	else
	{
	    
	}
}
