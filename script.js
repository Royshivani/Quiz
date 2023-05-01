
const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "Which notation is used to find the complexity of an algorithm?",
    a: "Asymptotic Notation",
    b: "Big oh Notation",
    c: "Omega Notation",
    d: "None of these",
    correct: "a",
},
{
    question: "Stack is based on which principle?",
    a: "FIFO",
    b: "Push",
    c: "LIFO",
    d: "none of the above",
    correct: "c",
},

{
    question: "Omega Notation is also known as",
    a: "Upper Bound",
    b: "Lower Bound",
    c: "Minimum Bound",
    d: "none of the above",
    correct: "a",
},

{
    question: "A function which calls itself is called ",
    a: "Algorithm",
    b: "Iteration",
    c: "Recursion",
    d: "none of the above",
    correct: "c",
},

{
    question: "Master Theorem is used to solve",
    a: "All Problems",
    b: "Time Complexity",
    c: "Recurrence functions",
    d: "none of the above",
    correct: "c",
},

{
    question: "Which one of the following is the size of int arr[9] assuming that int is of 4 bytes?",
    a: "9",
    b: "36",
    c: "30",
    d: "42",
    correct: "b",
},

{
    question: "Which data structure is the best for implementing a priority queue?",
    a: "Stack",
    b: "Heap",
    c: "Array",
    d: "Linked List",
    correct: "b",
},

{
    question: "Which of the following is the time complexity to search an element in the linked list?",
    a: "O(n)",
    b: "O(logn)",
    c: "O(nlogn)",
    d: "O(1)",
    correct: "a",
},

{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> You have scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);