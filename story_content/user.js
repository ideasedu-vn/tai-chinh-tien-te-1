function ExecuteScript(strId)
{
  switch (strId)
  {
      case "61CAmdVZiSj":
        Script1();
        break;
      case "6ZFCNu8LGxr":
        Script2();
        break;
      case "5zmDI7vnKxc":
        Script3();
        break;
      case "5y86cfbm3Qi":
        Script4();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var newVar = player.GetVar("dien1");
newVar = newVar.toUpperCase();
player.SetVar("dien1", newVar);
}

function Script2()
{
  var player = GetPlayer();
var newVar = player.GetVar("dien2");
newVar = newVar.toUpperCase();
player.SetVar("dien2", newVar);
}

function Script3()
{
  var player = GetPlayer();
var newVar = player.GetVar("dien3");
newVar = newVar.toUpperCase();
player.SetVar("dien3", newVar);
}

function Script4()
{
  var player = GetPlayer();
var newVar = player.GetVar("dien4");
newVar = newVar.toUpperCase();
player.SetVar("dien4", newVar);
}

