//Purpose.html Functions

function WebPurp(){

	var userPurpose = document.getElementById("userPurpose").value;
	var output = "";

	if(userPurpose == ""){
		output = "";
	}
	else{
		output="Why not try to make this happen? You already know what you want to do! You can literally learn anything you want from the Internet. Make your dreams a reality!";
	}

	document.getElementById("purp").innerHTML = output;

}

//---------------------------------------------------------------------------------------------------------

//Goals.html Functions

function printGoals(){

	var goals = ["Maintaining my GPA at a 3.5 or higher", "Make a beat tape", "Improving in speed and tone on the piano", "Getting to the top of the bonus scale in my business", "Be proficient in at least 2 coding languages", "Gain weight and muscle mass", "Read at least 15 books", "Build my own website", "STAY POSITIVE!!!"]

	var listIterator = "";
	var i = 0;

	while(i < goals.length){

    listIterator = "<li>" + goals[i] + "</li>" + listIterator;
    i++;
  }

  //print list after list is created
  document.getElementById("goals").innerHTML = listIterator;

}



function EvalGoals(){

	var userGoals = document.getElementById("userGoals").value;
	var output = "";

	if(userGoals == ""){
		output = "";
	}
	//Check for string with or without period
	else if(userGoals == "I don't have any." || userGoals == "I don't have any"){
		output = "Hey, don't worry too much. It's okay if you don't have any right now. Just remember that a person with no direction is a lost person. I recommend you take some free time to figure out what you actually want to do and then take the necessary steps to achieve that lifestyle. Nothing is impossible!";
	}
	else{
		output = "Cool! It's nice to see that you have an idea of where you want to go in life. Just remember when things get tough to remember your motivation for achieving the lifestyle you want to live. Never give up on your dreams!";
	}
	//output = "<p>" Texth "</p>"
	document.getElementById("goalResp").innerHTML = output;

}

//---------------------------------------------------------------------------------------------------------

//Books.html Functions

function printBooksToRead(){

	var btr = ["The Business of the 21st Century by Robert Kiyosaki","Rich Dad, Poor Dad by Robert Kiyosaki","The Art of Piano Playing by Heinrich Neuhaus","The Reality of ESP: A Physicist's Proof of Psychic Abilities by Russell Targ","Mind Over Medicine: Scientific Proof That You Can Heal Yourself by Lissa Rankin","Deep Work: Rules for Focused Success in a Distracted World by Cal Newport","Mindfulness in Plain English by Bhante Henepola Gunaratana","The War of Art: Break Through the Blocks and Win Your Inner Creative Battles"];

	var listIterator = "";
	//var i = 0;

	for(var i = 0; i < btr.length; i++){

		listIterator = "<li>" + btr[i] + "</li>" + listIterator;

	}

	//print list after list is created
  document.getElementById("booksToRead").innerHTML = listIterator;


}

//---------------------------------------------------------------------------------------------------------

//UsefulLinks.html Functions

function validateForm(){

	var userName = document.getElementById("name").value;
	var userEmail = document.getElementById("email").value;
	var userNumber = document.getElementById("phone").value;
	var userReason = document.getElementById("info").value;


	//check if whole form was filled out
	if(userName == "" && userEmail == "" && userNumber == "" && userReason == ""){

		alert("Oops! Try filling out the form first ;-)");
		return false;

	}
	//check if name is filled
	else if(userName == ""){

		alert("Who are you? You forgot to enter your name!");
		return false;

	}
	//check if email is filled && input is a valid email
	else if(userEmail == ""){

		alert("Please enter an email that I can spam :) ");
    return false;

	}
	//check if phone number is filled && input is a valid phone number
	else if(userNumber == ""){

		alert("Please enter a phone number that I can spam :) ");
    return false;

	}
	//check if both phone number and email is N/A (request to give at least one of the two options)
	else if(userEmail =="N/A" && userNumber == "N/A"){

		alert("I need some form of contact! Please enter at least an e-mail or a phone number ");
    return false;

	}
	//check if reason for contact is filled
	else if(userReason == ""){

		alert("Please enter why you'd like to get in touch with me. ");
    return false;

	}
	//if all conditions are met
	else{
		return true;
	}


}

//For Comments
function validateComment(){

	var comment = document.getElementById("comment").value;

	if(comment == ""){

		alert("Message is blank! Enter a comment.");
    return false;

	}
	else{
		return true;
	}


}

//For Current Time (onload function)
function displayCurrentTime(){

	var currentTime = new Date();
	document.getElementById("displayTime").innerHTML = currentTime;


}



//---------------------------------------------------------------------------------------------------------


/*
-----------------------------------------------------------------
/Scripts

*/

//Comment trail script- By Kurt (kurt.grigg@virgin.net)
//Script featured on Dynamic Drive
//Visit http://www.dynamicdrive.com for this script and more

colours=new Array('#ff0000','#00ff00','#ffffff','#ff00ff','#ffa500','#ffff00','#00ff00','#ffffff','ff00ff')

n = 10;
y = 0;
x = 0;

n6=(document.getElementById&&!document.all);
ns=(document.layers);
ie=(document.all);

d=(ns||ie)?'document.':'document.getElementById("';
a=(ns||n6)?'':'all.';
n6r=(n6)?'")':'';
s=(ns)?'':'.style';

if (ns){

for (i = 0; i < n; i++)

document.write('<layer name="dots'+i+'" top=0 left=0 width='+i/2+' height='+i/2+' bgcolor=#ff0000></layer>');

}

if (ie)

document.write('<div id="con" style="position:absolute;top:0px;left:0px"><div style="position:relative">');

if (ie||n6){

for (i = 0; i < n; i++)

document.write('<div id="dots'+i+'" style="position:absolute;top:0px;left:0px;width:'+i/2+'px;height:'+i/2+'px;background:#ff0000;font-size:'+i/2+'"></div>');

}

if (ie)

document.write('</div></div>');

(ns||n6)?window.captureEvents(Event.MOUSEMOVE):0;

function Mouse(evnt){

y = (ns||n6)?evnt.pageY+4 - window.pageYOffset:event.y+4;

x = (ns||n6)?evnt.pageX+1:event.x+1;

}

(ns)?window.onMouseMove=Mouse:document.onmousemove=Mouse;

function animate(){

o=(ns||n6)?window.pageYOffset:0;

if (ie)con.style.top=document.body.scrollTop + 'px';

for (i = 0; i < n; i++){

var temp1 = eval(d+a+"dots"+i+n6r+s);



randcolours = colours[Math.floor(Math.random()*colours.length)];

(ns)?temp1.bgColor = randcolours:temp1.background = randcolours;

if (i < n-1){

 var temp2 = eval(d+a+"dots"+(i+1)+n6r+s);

 temp1.top = parseInt(temp2.top) + 'px';

 temp1.left = parseInt(temp2.left) + 'px';

 }

else{

 temp1.top = y+o + 'px';

 temp1.left = x + 'px';

 }

}

setTimeout("animate()",10);

}

animate();

// -->



/***********************************************
* Email Validation script- (c) Dynamic Drive (www.dynamicdrive.com)
* Please keep this notice intact.
* Visit http://www.dynamicdrive.com/ for full source code
***********************************************/

var emailfilter=/^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i

function checkmail(e){
var returnval=emailfilter.test(e.value)
if (returnval==false){
alert("Please enter a valid email address.")
e.select()
}
return returnval
}
