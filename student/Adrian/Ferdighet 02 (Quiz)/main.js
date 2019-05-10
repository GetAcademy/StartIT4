function submitAnswers(){
    var total = 5;
    var score = 0;

    //get user inpur
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;

    //validation
    for(i = 1; i <= total;i++){
        if(eval('q'+i) == null || eval('q'+i) == ''){
            alert('Du magnler spørsmål ' + i);
            return false;
        }
    }
    //riktig svar
    var answers = ['b', 'a', 'c', 'b', 'd'];

    //sett rikitge svar
    if(q1 == answers[0]){
        score++;
    }
    if(q2 == answers[1]){
        score++;
    }
    if(q3 == answers[2]){
        score++;
    }
    if(q4 == answers[3]){
        score++;
    }
    if(q5 == answers[4]){
        score++;
    }
    alert('You fikk '+score+' ut av ' +total);
}