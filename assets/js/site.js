
let questions = [
  {
    id: 1,
    question: "Siapakah pencipta MYSQL ?",
    answer: 'Michael "Monty" Widenius',
    options: [
      "Carles Cabbage",
      "Howard Akein",
      "Linus Torvald",
      'Michael "Monty" Widenius'
    ]
  },
  {
    id: 2,
    question: "Pengembangan MYSQL dengan tool database UNIREG dibuat oleh?",
    answer: "E.F Codd",
    options: [
      "E.F Codd",
      "Michael Widenius",
      "R.F Boyce",
      "David"
    ]
  },
  {
    id: 3,
    question: "Pesonil yang berhak untuk merubah struktur storage dan strategi akses didalam basis data adalah ?",
    answer: "DBMS",
    options: [
      "DBA",
      "DBMS",
      "Programmer",
      "Analyst"
    ]
  },
  {
    id: 4,
    question: "Program enterprise yang dibuat untuk mengaplikasikan basis data oracle adalah ?",
    answer: "Ulead10.0",
    options: [
      "Ms.powepoint",
      "Corel Draw",
      "Ms.Visual Basic",
      "Ulead10.0"
    ]
  },
  {
    id: 5,
    question: "Proses pertukaran informasi dari satu tingkat ke tingkat lainnya dalam arsitektur system basis data disebut ?",
    answer: "Physical data independence",
    options: [
      "Data independence",
      "Mapping",
      "Physical data independence",
      "Logical data independence"
    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // jika pertanyaan sudah terakhir maka akan di redirect ke end.html
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "selesai.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // mengecek jawaban benar atau salah
  if (user_answer == questions[question_count].answer) {
    points += 20;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2><span style="color : #7536C0;">Q${count + 1}.</span> ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}


