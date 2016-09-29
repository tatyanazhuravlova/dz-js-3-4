// alert ('this is script.js file');
var test = {
  testBody: document.body,
  testForm: document.createElement("form"),
  testHead: document.createElement("header"),
  testTitle: document.createElement("h1"),
  testButton: document.createElement("button"),

  qCounter: 0,


  createTest: function () {
    this.testHead.innerHTML =  "Тест по программированию";
    this.testButton.innerHTML = "Проверить мои результаты";

    this.testForm.classList.add('test');
    this.testHead.classList.add('test--header');
    this.testTitle.classList.add('test--title');
    this.testButton.classList.add('test--button');

    test.testBody.appendChild(this.testForm);
    this.testForm.appendChild(this.testHead);
    this.testHead.appendChild(this.testTitle);
    this.testForm.appendChild(this.testButton);
  },

     createTestQuestion: function() {

    var questionBody = document.createElement('div');
    var questionHead = document.createElement('div');
    var questionTitle = document.createElement('h2');
    var questionAnswerCheckbox;
    var questionAnswerLabel;

    questionBody.classList.add('questions');
    questionHead.classList.add('questions--header');


    questionTitle.innerHTML = ((this.qCounter+1) + '. Вопрос №' + (this.qCounter+1) );

    questionBody.appendChild(questionHead);
    questionHead.appendChild(questionTitle);

    this.qCounter++;

      for (var i = 0; i < 3; i++) {
      var labelInput = document.createTextNode('Вариант ответа №'+(i+1) );
      questionAnswerLabel =  document.createElement('label');
      questionAnswerCheckbox =  document.createElement('input');
      questionAnswerCheckbox.type = "checkBox";

      questionAnswerLabel .classList.add('questions--label');

      questionBody.appendChild(questionAnswerLabel);
      questionAnswerLabel.appendChild(questionAnswerCheckbox);
      questionAnswerLabel.appendChild(labelInput);
    }

    this.testForm.insertBefore(questionBody, this.testButton);

  }

     };

test.createTest();
test.createTestQuestion();
test.createTestQuestion();
test.createTestQuestion();
