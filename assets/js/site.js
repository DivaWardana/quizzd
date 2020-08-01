
let questions = [
  {
    id: 1,
    // hasil penjumlahan binner
    question: "Berapakah hasil dari 1 + 1 ?",
    answer: "10",
    options: [
      "0",
      "2",
      "10",
      "11"
    ]
  },
  {
    id: 2,
    // hasil dari penjumlahan binner
    question: "Berapakah hasil dari 10 + 10 ?",
    answer: "4",
    options: [
      "4",
      "20",
      "100",
      "1010"
    ]
  },
  {
    id: 3,
    // sama dengan oktal
    question: "Angka berapakah yang sama dengan 4 ?",
    answer: "100",
    options: [
      "4",
      "2+2",
      "100",
      "1000"
    ]
  },
  {
    id: 4,
    // karena phyton ada di bahasa pemrograman
    question: "Menurutmu apakah itu Pyhton ?",
    answer: "Bahasa Pemrograman",
    options: [
      "Sejenis Ular",
      "Sangat jelas itu adalah ular",
      "Bahas Pemrograman",
      "Salah satu bahas pemrograman"
    ]
  },
  {
    id: 5,
    question: "Javascript adalah bahasa pemrograman backend atau frontend ?",
    answer: "Hybrid",
    options: [
      "Backend",
      "Frontend",
      "Hybrid",
      "Backend dan Frontend"
    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
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
  <h2>Q${count + 1}. ${questions[count].question}</h2>
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
