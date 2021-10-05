const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),

  // Task 3
  displayResults(type = 'string', arr = this.answers) {
    type === 'string'
      ? console.log(`Poll results are ${arr.join(', ')}`)
      : console.log(arr);
  },

  // Task 1
  registerNewAnswer() {
    const optionStr = this.options.join('\n');
    const option = Number(
      prompt(`${this.question}\n${optionStr}\n(Write option number)`)
    );
    option >= 0 && option <= this.options.length && this.answers[option]++;
    poll.displayResults();
  },
};

// Task 2
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// Task 5
const data1 = [2, 5, 3];
const data2 = [1, 5, 3, 9, 6, 1];
const newPoll = poll.displayResults;
newPoll('string', data1);
newPoll('array', data2);
