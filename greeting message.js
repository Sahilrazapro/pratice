var name = prompt("What is your name ?");
var firstLetter = name.slice(0,1);
var capitalisedLetter = firstLetter.toUpperCase();
var lastLetter = name.slice(1,name.length);
var capitalisedLetterLastword = lastLetter.toLowerCase();
var myName = capitalisedLetter + capitalisedLetterLastword ;
alert("Hello " + myName);
