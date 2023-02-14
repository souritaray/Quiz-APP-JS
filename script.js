const quizData = [
    {
        question: "Which built-in method calls a function for each element in the array?",
        a: "while()",
        b: "loop()",
        c: "forEach()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        a: "changeOrder(order)",
        b: "reverse()",
        c: "sort(order)",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which of the following is a valid type of function javascript supports?",
        a: "named function",
        b: "anonymous function",
        c: "Both the above",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz=document.getElementById("quiz");
const questionEl=document.querySelector("#question");
const a_text=document.querySelector("#a_text");
const b_text=document.querySelector("#b_text");
const c_text=document.querySelector("#c_text");
const d_text=document.querySelector("#d_text");;
const submitBtn=document.querySelector("#submit");
const answerEls=document.querySelectorAll(".answer");

let currentQuiz = 0
let score = 0



loadQuiz();
 
function loadQuiz() {
  
    questionEl.innerHTML=quizData[currentQuiz].question;
    a_text.innerHTML=quizData[currentQuiz].a;
    b_text.innerHTML=quizData[currentQuiz].b;
    c_text.innerHTML=quizData[currentQuiz].c;
    d_text.innerHTML=quizData[currentQuiz].d;
    answerEls.forEach(e=>{e.checked=false});
    quiz.style.backgroundColor="#5DA3FA";
    submitBtn.innerHTML="SUBMIT";
    
   
}

function deselectAnswers() {
    quiz.style.backgroundColor="red";
    submitBtn.innerHTML="NEXT";  
}

function getSelected() {
    quiz.style.backgroundColor="green";
    submitBtn.innerHTML="NEXT";
    score=score+1;
}

submitBtn.addEventListener('click', () => {
    if(submitBtn.innerHTML==="NEXT"){
        if(currentQuiz==(quizData.length-1)){
            quiz.style.height="170px";
            quiz.style.backgroundColor="#8e44ad";
            quiz.style.fontSize="60px";
            quiz.innerHTML=`YOUR SCORE IS: ${score}/${quizData.length}`
            let replay = document.createElement("button");
            replay.style.fontFamily="cursive";
            replay.style.color="coral";
            quiz.appendChild(replay);
            replay.innerText="REPLAY";
            replay.addEventListener("click",()=>{location.reload()})
        }
        else{
            currentQuiz=currentQuiz+1;
            loadQuiz();
        }
       
    }

    else{

        for(let i=0;i<answerEls.length;i++){
            if(answerEls[i].checked){
                if(answerEls[i].id===quizData[currentQuiz].correct){
                getSelected();
            }
                else{
                deselectAnswers();
            }
        }
    }
    
    }
    })
