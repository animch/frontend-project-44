import { getGameEngine, getRandomNumber } from '../index.js';

const specification = 'Find the greatest common divisor of given numbers.';

const isGcd = (number1, number2) => {
  let r = number1 % number2;
  while (r !== 0) {
    number1 = number2;
    number2 = r;
    r = number1 % number2;
  }
  return number2;
};

const getTask = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const gameQuestion = String(`${number1} ${number2}`);
  const correctAnswer = String(isGcd(number1, number2));
  return [gameQuestion, correctAnswer];
};

const getBrainGcd = () => {
  getGameEngine(specification, getTask);
};

export default getBrainGcd;
