var number=0;
var ht=document.getElementById("ht");
var questions=["Which is the first flyover of Pune?",
            "Who built Shaniwarwada?",
            "Where did Shahista Khan lost his fingers?",
            "Which is not a Peth in Pune?",
            "What is the long form of SPDP?",
            "Where is Veer Savarkar's room located?",
            "Who changed the name of Ray market  named after a Britisher to Phule Mandai?",
            "Which is the 1st honoured Ganesha ( पहिला मानाचा गणपती ) of Pune?",
            "Where are Vaishali, Rupali and Wadeshwar restaurants are located?"];
var answers=["Veer Savarkar Flyover","Bajirao I","Laal Mahal","Naathpaar Peth","Shev Puri Dahi Puri","Fergusson Collge","Acharya Atre","Guruji Talim Ganapati","FC"];
var options=["University Flyover","Lakdi Pul","Wakad Flyover","Veer Savarkar Flyover",
            "Shivaji Maharaj","Sambhaji Maharaj","Bajirao I","Bajirao II",
            "Shaniwarwada","Kesari Wada","Laal Mahal","None of the above",
            "Shaniwar Peth","Guruvaar Peth","Somwar Peth","Naathpaar Peth",
            "Shahi Puri Dal Puri","Shev Potato Dahi Puri","Shev Puri Dahi Puri","All of the mentioned",
            "Kesari Wada","Fergusson Collge","Garware*","Modern",
            "Babasaheb Ambedkar","Mahatma Gandhi","Savitribai Phule","Acharya Atre",
            "Dagadusheth Halwai Ganapati","Guruji Talim Ganapati","Sarasbaug Ganapati","Kasba Ganapati",
            "JM","FC","MG","SB"];
var quest=document.getElementById("quest");
var newopt=document.getElementsByName("option");
var opt1=document.getElementById("1");
var opt2=document.getElementById("2");
var opt3=document.getElementById("3");
var opt4=document.getElementById("4");
var opta1=document.getElementById("a1");
var opta2=document.getElementById("a2");
var opta3=document.getElementById("a3");
var opta4=document.getElementById("a4");

var pointsdom=document.getElementById("points");
var points=0;
var optno=0;
var forhid1=document.getElementById("forhid1");
var forhid2=document.getElementById("forhid2");
function submit()
{
	forhid2.hidden=true;
	ht.innerHTML="This has been changed";
	var selectedoption;
	forhid1.hidden=false;
	quest.innerHTML="Q"+(number+1)+". "+questions[number];
	opta1.innerHTML=options[optno];
	opta2.innerHTML=options[optno+1];
	opta3.innerHTML=options[optno+2];
	opta4.innerHTML=options[optno+3];
	if(document.querySelector('input[name="option"]:checked').value==answers[number-1])
	{
		ht.innerHTML="Bravo";
		points=points+1;
	}
	else
	ht.innerHTML="Wrong answer";
	opt1.value=options[optno];
	opt2.value=options[optno+1];
	opt3.value=options[optno+2];
	opt4.value=options[optno+3];
	pointsdom.innerHTML="Your Score is :"+points;
	optno=optno+4;
	if(number==answers.length)
	{
		alert("Ohh boy this Ends here Your Score is "+ points +"/"+number);
		forhid1.hidden=true;
		forhid2.hidden=false;
		forhid2.innerHTML="Congo Your Score is "+points;
		return;
	}
	number=number+1;
	
}