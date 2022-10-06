const score = document.querySelector('.score');
const dispLevel = document.querySelector('.level');
const btn = document.querySelector('.btn');
const input = document.querySelector(".input");
const comment = document.querySelector('.comment');
let gameLevel = 1;
let max = 2
let min = 0

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + 1) + min;
}

const changeLevel = () => {
  gameLevel++;
  dispLevel.innerText = gameLevel;
}

const resetValue = () => {
  input.value = "";
}

const increaseRange = (max) => {
  return max++
}
// console.log(gameLevel)

btn.addEventListener("click", (e) => {
  e.preventDefault()

  const guess = Number(input.value)

  const randomNumber = randomInt(min, max);

  console.log(guess);

  if (guess === 0) {
    comment.textContent = 'Invalid Input⚠️'
    return;
  }

  if (guess === randomNumber) {
    comment.textContent = 'Congratulations🎉🎉';
    changeLevel();
    resetValue();
    increaseRange(max);
  }

  if (guess != randomNumber) {
    comment.textContent = 'Try Again😢😢';
    resetValue();
  }

  console.log(randomNumber, max)
  // console.log(max)
})