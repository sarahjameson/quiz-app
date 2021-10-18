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

  let correctAnswerPosition = Math.floor(Math.random() * 4)

  console.log(correctAnswerPosition)

  let correctAnswer = data.results[0].correct_answer

  if (correctAnswerPosition === 0) {
      document.querySelector("#answer1").innerHTML = data.results[0].correct_answer
      document.querySelector("#answer2").innerHTML = data.results[0].incorrect_answers[0]
      document.querySelector("#answer3").innerHTML = data.results[0].incorrect_answers[1]
      document.querySelector("#answer4").innerHTML = data.results[0].incorrect_answers[2]

  } else if (correctAnswerPosition === 1) {
    document.querySelector("#answer1").innerHTML = data.results[0].incorrect_answers[0]
    document.querySelector("#answer2").innerHTML = data.results[0].correct_answer
    document.querySelector("#answer3").innerHTML = data.results[0].incorrect_answers[1]
    document.querySelector("#answer4").innerHTML = data.results[0].incorrect_answers[2]
  } else if (correctAnswerPosition === 2) {
    document.querySelector("#answer1").innerHTML = data.results[0].incorrect_answers[0]
    document.querySelector("#answer2").innerHTML = data.results[0].incorrect_answers[1]
    document.querySelector("#answer3").innerHTML = data.results[0].correct_answer
    document.querySelector("#answer4").innerHTML = data.results[0].incorrect_answers[2]
  } else {
    document.querySelector("#answer1").innerHTML = data.results[0].incorrect_answers[0]
    document.querySelector("#answer2").innerHTML = data.results[0].incorrect_answers[1]
    document.querySelector("#answer3").innerHTML = data.results[0].incorrect_answers[2]
    document.querySelector("#answer4").innerHTML = data.results[0].correct_answer
  }

  correctAnswer.addEventListener("click", () => {
    console.log("hell yeah")
    useApiData(data)
  });
}
  


const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-button")

startButton.addEventListener("click", startGame);

function startGame() {
  console.log("started");
  startButton.classList.add("hide")
  questionContainerElement.classList.remove("hide")
};

