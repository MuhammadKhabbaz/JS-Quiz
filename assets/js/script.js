const timeEl = document.getElementById("time");
const startb = document.getElementById("start");
const header = document.querySelector("header");
const highscores = document.getElementById("high");
const heading = document.getElementById("heading")
//submit buttons
const submit1 = document.getElementById("submit1");
const submit2 = document.getElementById("submit2");
const submit3 = document.getElementById("submit3");
const submit4 = document.getElementById("submit4");
const submit5 = document.getElementById("submit5");
const submit6 = document.getElementById("submit6");
const submit7 = document.getElementById("submit7");
const submit8 = document.getElementById("submit8");
//next buttons
const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const next3 = document.getElementById("next3");
const next4 = document.getElementById("next4");
const next5 = document.getElementById("next5");
const next6 = document.getElementById("next6");
const next7 = document.getElementById("next7");
const next8 = document.getElementById("next8");

const quizcard = document.getElementsByClassName("quiz");
const Q1 = document.getElementById("Q1");
const Q2 = document.getElementById("Q2");
const Q3 = document.getElementById("Q3");
const Q4 = document.getElementById("Q4");
const Q5 = document.getElementById("Q5");
const Q6 = document.getElementById("Q6");
const Q7 = document.getElementById("Q7");
const Q8 = document.getElementById("Q8");
const done = document.getElementById("done");
const donebtn = document.getElementById("donebtn");
const userinpt = document.querySelector(".test");
let score = document.getElementById("final-score");
const scoreslist = document.getElementById("scoreslist")
let finalScore = 0;
let scores = [];

const backButton = document.getElementById('back');
const clearButton = document.getElementById('clear');
const highScoresDiv = document.getElementById('high');
const ScoresLink = document.getElementById('scoreslink');

let begintime = 60;
function countdown(){
    
    timeEl.textContent = "Time: " + begintime + " seconds";
    let timerInterval = setInterval(function(){
        if (!isPaused && begintime > 0) {
            begintime--;
            timeEl.textContent = "Time: " + begintime + " seconds";
            // if(begintime < 10){
            //     blinkEL.className="red";
            // }
            if(begintime <= 0) {
                clearInterval(timerInterval); // Stops execution of action at set interval
                for (var i=0; i<quizcard.length; i+=1){
                    quizcard[i].style.display = "none";
                }
                score.textContent = "Your Final Score: " + finalScore;
                done.style.display="inline-block";
            }
        } 
    }, 1000);
};
function updateTime() {
    timeEl.textContent = "Time: " + begintime + " seconds";
}

startb.addEventListener("click",function(){
    isPaused=false;
    countdown()
    startb.style.display="none";
    Q1.style.display="inline-block";
})

//Q1 Answer
const submitAnswer1 = function() {
    var radios = document.getElementsByName('q1');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            val = radios[i].value; 
            break;
        }
    }
    if (val == "" ) {
        return
    } else if ( val == "Scripting" ) {
        Q1.style.color = "green";
        finalScore=finalScore+1;
        console.log(finalScore);
    } else {
        Q1.style.color = "red";
        begintime -= 3;
        timeEl.textContent = "Time: " + begintime + " seconds";
    }
    submit1.style.display = "none";
    next1.style.display = "inline-block";
    next1.addEventListener("click", function(){
        Q1.style.display="none";
        Q2.style.display="inline-block";
    })
    score.textContent = "Your Final Score: " + finalScore;
}
//Q2 answer
const submitAnswer2 = function() {
    var radios = document.getElementsByName('q2');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            val = radios[i].value; 
            break;
        }
    }
    if (val == "" ) {
        return;
    } else if ( val == "<script>" ) {
        Q2.style.color = "green";
        finalScore=finalScore+1;
        console.log(finalScore);
    } else {
        Q2.style.color = "red";
        begintime -= 3;
        timeEl.textContent = "Time: " + begintime + " seconds";
    }
    submit2.style.display = "none";
    next2.style.display = "inline-block"
    next2.addEventListener("click", function(){
        Q2.style.display="none";
        Q3.style.display="inline-block";
    })
    score.textContent = "Your Final Score: " + finalScore;
};
//Q3 answer
const submitAnswer3 = function(){
    var radios = document.getElementsByName('q3');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            val = radios[i].value; 
            break;
        }
    }
    if (val == "" ) {
        return
    } else if ( val == "function MyFunction()" ) {
        Q3.style.color = "green";
        finalScore=finalScore+1;
    } else {
        Q3.style.color = "red";
        begintime -= 3;
        timeEl.textContent = "Time: " + begintime + " seconds";
    }
    submit3.style.display = "none";
    next3.style.display = "inline-block"
    next3.addEventListener("click", function(){
        Q3.style.display="none";
        Q4.style.display="inline-block";
    })
    score.textContent = "Your Final Score: " + finalScore;
}
//Q4 answer
const submitAnswer4 = function(){
    var radios = document.getElementsByName('q4');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            val = radios[i].value; 
            break;
        }
    }
    if (val == "" ) {
        return
    } else if ( val == "var colors = ['red','green','blue']" ) {
        Q4.style.color = "green";
        finalScore=finalScore+1;
    } else {
        Q4.style.color = "red";
        begintime -= 3;
        timeEl.textContent = "Time: " + begintime + " seconds";
    }
    submit4.style.display = "none";
    next4.style.display = "inline-block"
    next4.addEventListener("click", function(){
        Q4.style.display="none";
        Q5.style.display="inline-block";
    })
    score.textContent = "Your Final Score: " + finalScore;
}
const submitAnswer5 = function(){
    var radios = document.getElementsByName('q5');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            val = radios[i].value; 
            break;
        }
    }
    if (val == "" ) {
        return
    } else if ( val == "myFunction()" ) {
        Q5.style.color = "green";
        finalScore=finalScore+1;
    } else {
        Q5.style.color = "red";
        begintime -= 3;
        timeEl.textContent = "Time: " + begintime + " seconds";
    }
    submit5.style.display = "none";
    next5.style.display = "inline-block"
    next5.addEventListener("click", function(){
        Q5.style.display="none";
        Q6.style.display="inline-block";
    })
    score.textContent = "Your Final Score: " + finalScore;
}
const submitAnswer6 = function(){
    var radios = document.getElementsByName('q6');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            val = radios[i].value; 
            break;
        }
    }
    if (val == "" ) {
        return
    } else if ( val == "if(i==5)" ) {
        Q6.style.color = "green";
        finalScore=finalScore+1;
    } else {
        Q6.style.color = "red";
        begintime -= 3;
        timeEl.textContent = "Time: " + begintime + " seconds";
    }
    submit6.style.display = "none";
    next6.style.display = "inline-block"
    next6.addEventListener("click", function(){
        Q6.style.display="none";
        Q7.style.display="inline-block";
    })
    score.textContent = "Your Final Score: " + finalScore;
}
const submitAnswer7 = function(){
    var radios = document.getElementsByName('q7');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            val = radios[i].value; 
            break;
        }
    }
    if (val == "" ) {
        return
    } else if ( val == "//comment" ) {
        Q7.style.color = "green";
        finalScore=finalScore+1;
    } else {
        Q7.style.color = "red";
        begintime -= 3;
        timeEl.textContent = "Time: " + begintime + " seconds";
    }
    submit7.style.display = "none";
    next7.style.display = "inline-block"
    next7.addEventListener("click", function(){
        Q7.style.display="none";
        Q8.style.display="inline-block";
    })
    score.textContent = "Your Final Score: " + finalScore;
}
const submitAnswer8 = function(){
    var radios = document.getElementsByName('q8');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            val = radios[i].value; 
            break;
        }
    }
    if (val == "" ) {
        return
    } else if ( val == "for(i=0; i<=5)" ) {
        Q8.style.color = "green";
        finalScore=finalScore+1;
    } else {
        Q8.style.color = "red";
        begintime -= 3;
        timeEl.textContent = "Time: " + begintime + " seconds";
    }
    submit8.style.display = "none";
    next8.style.display = "inline-block"
    next8.addEventListener("click", function(){
        isPaused = true;
        Q8.style.display="none";
        done.style.display="block";
    })
    score.textContent = "Your Final Score: " + finalScore;
}

function renderScores() {
    scoreslist.innerHTML = ""; // Clear any previous scores
    let storedScores = JSON.parse(localStorage.getItem("quizScores"));
    for (let score of storedScores) {
        let li = document.createElement("li");
        li.textContent = score.user + ": " + score.score;;
        scoreslist.appendChild(li);
    }
}


donebtn.addEventListener("click", function(){
    let storedScores = JSON.parse(localStorage.getItem("quizScores"));
    storedScores.push({ user: userinpt.value, score: finalScore });
    localStorage.setItem("quizScores", JSON.stringify(storedScores));
    done.style.display="none";
    heading.style.display="none"
    header.style.display="none"
    highscores.style.display="inline-block";
    scoreslist.textContent = userinpt.value + ": " + localStorage.getItem(userinpt.value)
    console.log(userinpt.value)
    renderScores();
})

backButton.addEventListener('click', function() {
    location.reload()
})
clearButton.addEventListener('click', function() {
    // Clear the highscores list
    scoreslist.innerHTML = '';
    localStorage.removeItem('highscores');
});
ScoresLink.addEventListener('click', function(event) {
    event.preventDefault();
    
    // Hide main content
    heading.style.display = 'none';
    startb.style.display = 'none';

    let quizSections = document.querySelectorAll('.quiz');
    for (let section of quizSections) {
        section.style.display = 'none';
    }
    // Show highscores
    highScoresDiv.style.display = 'block';
});