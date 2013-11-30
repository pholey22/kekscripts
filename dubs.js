var checked = ""

API.on(API.VOTE_UPDATE, checkdubs);
function checkdubs(obj)
{
    var list = API.getUsers();
    for (user in list) {
        var score = list[user].listenerPoints + list[user].curatorPoints + list[user].djPoints;
		if (list[user].vote !== 0)
		{
			score +=1;
		}
        var digits = score.toString();
        var lastDigit = digits[digits.length - 1];
        var SecondLastDigit = digits[digits.length -2];
        var ThirdLastDigit = digits[digits.length - 3];
        var FourthLastDigit = "0";
        if (digits.length >= 4) 
        {
             var FourthLastDigit = digits[digits.length-4];  
        }
        
    
      if (lastDigit === SecondLastDigit && SecondLastDigit === ThirdLastDigit
              && ThirdLastDigit === FourthLastDigit && checked.indexOf(list[user].username) === -1)
      {
          API.sendChat("#WOW! @"+list[user].username+", ebin quads!");
          checked += list[user].username;
      }
      else if (lastDigit === SecondLastDigit && SecondLastDigit === ThirdLastDigit && checked.indexOf(list[user].username) === -1)
      {
            API.sendChat("whoa, @"+list[user].username+", nice trips!");
            checked += list[user].username;
      }
      else if (lastDigit === SecondLastDigit && checked.indexOf(list[user].username) === -1)
      {
        API.sendChat("@"+list[user].username+", nice dubs!");
        checked += list[user].username;
      }
      else
      {
        
      } 
    }
}

API.on(API.DJ_ADVANCE, clear);
function clear(obj)
{
    checked = "";
}
