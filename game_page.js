var player_1_name = localStorage.getItem("Player1Name");
var player_2_name = localStorage.getItem("Player2Name");
var player_1Score=0;
var player_2Score=0;
document.getElementById("Player1name").innerHTML=player_1_name+ " : ";
document.getElementById("Player2name").innerHTML=player_2_name+ " : ";
document.getElementById("Player1score").innerHTML=player_1Score;
document.getElementById("Player2score").innerHTML=player_2Score;
document.getElementById("Question").innerHTML="Question- "+player_1_name;
document.getElementById("Answer").innerHTML="Answer- "+player_2_name;


function Send() {
     QuestionStore=document.getElementById("question").value;
    QuestionLower=QuestionStore.toLowerCase();
    console.log(QuestionLower);
    CarAt1=QuestionLower.charAt(1);
    console.log(CarAt1);
    var Letter2= Math.floor(QuestionLower.length/2);
    CarAt2=QuestionLower.charAt(Letter2);
    console.log(CarAt2);
    var Letter3= QuestionLower.length-1;
    CarAt3=QuestionLower.charAt(Letter3);
    console.log(CarAt3);

    var RemoveCarAt1=QuestionLower.replace(CarAt1,"_");
    var RemoveCarAt2=RemoveCarAt1.replace(CarAt2,"_");
    var RemoveCarAt3=RemoveCarAt2.replace(CarAt3,"_");
    console.log(RemoveCarAt3);
    question= "<h4 id='word_display'>Q. "+RemoveCarAt3+ "</h4>";
    input= "<br>Answer: <input type='text' id='enterans'>";
    button= "<br><br> <button class= 'btn btn-info' onclick='checkans()'>Check</button>";
    row= question+input+button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("question").value="";
}
question_turn = "player1";
answer_turn = "player2";
function checkans() {
    Answer= document.getElementById("enterans").value;
    AnsLower= Answer.toLowerCase();
    if (AnsLower==QuestionLower) {
        if(answer_turn == "player1")
		{
			player_1Score = player_1Score +1;
		    document.getElementById("Player1score").innerHTML=player_1Score;
		}
		else 
		{
			player_2Score = player_2Score +1;
		    document.getElementById("Player2score").innerHTML = player_2Score;
		}  
    }
    if(question_turn == "player1")
	{
		question_turn = "player2"
		document.getElementById("Question").innerHTML="Question- "+player_2_name;
	}
	else 
	{
		question_turn = "player1"
		document.getElementById("Question").innerHTML="Question- "+player_1_name;
	}
    if(answer_turn == "player1")
	{
		answer_turn = "player2"
		document.getElementById("Answer").innerHTML="Answer- "+player_2_name;
	}
	else 
	{
		answer_turn = "player1"
		document.getElementById("Answer").innerHTML="Answer- "+player_1_name;
	}
    document.getElementById("output").innerHTML = "";
}