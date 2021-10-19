const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-button")
const questionNumberText = document.getElementById("question-number")
const scoreText = document.getElementById("score")

let score = 0
let questionNumber = 1

const MAX_QUESTIONS = 10

console.log(questionNumberText)


window.onload = sendApiRequest

async function sendApiRequest() {
  let response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple")
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData(data)
}

function useApiData(data) {
  document.querySelector(".category").innerHTML = `Category is ${data.results[0].category}`
  document.querySelector(".difficulty").innerHTML = `This has a level of ${data.results[0].difficulty}`
  document.querySelector(".question").innerHTML = `${data.results[0].question}`
  questionNumberText.innerText = questionNumber + "/" + MAX_QUESTIONS
  scoreText.innerText = score


  questionNumber++

  let correctAnswerPosition = Math.floor(Math.random() * 4)

  console.log(correctAnswerPosition)
  const {correct_answer, incorrect_answers} = data.results[0]
  let correctAnswer = data.results[0].correct_answer
  const _answers = [correct_answer, ...incorrect_answers]
  console.log(_answers)
  const shuffledAnswers = _answers.sort(() => (Math.random() > .5) ? 1 : -1);
  console.log(shuffledAnswers)

  const answers = Array.from(document.getElementsByClassName('answers'));
  console.log(answers)

  answers.forEach((ans,index) => {
    ans.addEventListener("click", (e) => {
      console.log("click")
      if (ans.innerHTML === correct_answer) {
        console.log("correct")
        ans.classList.add("correct")
        addToScore()
        setTimeout( () => {
          ans.classList.remove("correct")
          sendApiRequest(data)
        }, 1000)
      } else {
        console.log("incorrect")
        ans.classList.add("incorrect")
        setTimeout( () => {
          ans.classList.remove("correct")
          sendApiRequest(data)
        }, 1000)
      }
    })
    ans.innerHTML = _answers[index]
  })

  

  

startButton.addEventListener("click", startGame);

function startGame() {
  console.log("started");
  startButton.classList.add("hide")
  questionContainerElement.classList.remove("hide")
}};

function addToScore () {
  score++
}



