
let questions = [
  {
    id: 1,
    question: "Berapakah hasil dari 10 x 10 =",
    answer: '100',
    options: [
      "10",
      "20",
      "100",
      '1000'
    ]
  },
  {
    id: 2,
    question: "Berapakah hasil dari (20x20)+4 =",
    answer: "404",
    options: [
      "404",
      "44",
      "4004",
      "1600"
    ]
  },
  {
    id: 3,
    question: "Berapakah hasil dari (20+20)+(35x0)+12",
    answer: "52",
    options: [
      "412",
      "52",
      "447",
      "87"
    ]
  },
  {
    id: 4,
    question: "12+12+24-12 =",
    answer: "36",
    options: [
      "60",
      "38",
      "24",
      "36"
    ]
  },
  {
    id: 5,
    question: "a + 16 = 28 Berapakah nilai a ?",
    answer: "12",
    options: [
      "22",
      "12",
      "2",
      "18"
    ]
  }
];

// variable let
let question_count = 0;
let points = 0;

// arrow function kosong
if (localStorage.getItem("idq") == 1) {
    window.onload = () => show(question_count);
} else {
    window.onload = () => show2(question_count2);
}

// arrow function
const next = () => {

   
  // jika pertanyaan sudah terakhir maka akan di redirect ke selesai.html
  if (question_count == questions.length - 1) {
    localStorage.setItem("time", time);
    clearInterval(mytime);
    if (questions[0].id == 1 && questions[1].id == 2 && questions[2].id == 3 && questions[3].id == 4 && questions[4].id == 5) {
      localStorage.setItem("answer", questions[0].answer);
      localStorage.setItem("answer2", questions[1].answer);
      localStorage.setItem("answer3", questions[2].answer);
      localStorage.setItem("answer4", questions[3].answer);
      localStorage.setItem("answer5", questions[4].answer);
    }
    location.href = "selesai.html";
  }
  // console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // mengecek jawaban benar dan memberi point
  if (user_answer == questions[question_count].answer) {
    points += 20;
    localStorage.setItem("points", points);
  }

  question_count++;
  show(question_count);
}

// arrow function expression
const show = (count) =>{
  let question = document.getElementById("questions");
  
  //destructuring array manual
  let [first, second, third, fourth] = questions[count].options;

// templateliteral
  question.innerHTML = `
  <h2><span style="color : #7536C0;">${count + 1}.</span> ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

// variable const dan arrowfunction
const toggleActive = () => {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = () => {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}


//questions2
let questions2 = [
  {
    id: 1,
    question: 'Bahasa Inggris dari "Selamat Pagi!" adalah',
    answer: 'Good Morning!',
    options: [
      "Good Morning!",
      "Good Evening",
      "Good Night",
      'Good Afternoon'
    ]
  },
  {
    id: 2,
    question: "Arti dari Hiragana おはようございます ",
    answer: "Selamat Pagi",
    options: [
      "Selamat Pagi",
      "Selamat Siang",
      "Selamat Sore",
      "Selamat Malam"
    ]
  },
  {
    id: 3,
    question: "Bahasa Indonesia dari مساء الخير ",
    answer: "Selamat Siang",
    options: [
      "Selamat Pagi",
      "Selamat Siang",
      "Selamat Sore",
      "Selamat Malam"
    ]
  },
  {
    id: 4,
    question: "Arti dari 안녕히 주무세요 adalah",
    answer: "Selamat Malam",
    options: [
      "Selamat Pagi",
      "Selamat Siang",
      "Selamat Sore",
      "Selamat Malam"
    ]
  },
  {
    id: 5,
    question: "Arti dari вкусные adalah",
    answer: "Enak",
    options: [
      "Mantap",
      "Tidak Enak",
      "Enak",
      "Bagus"
    ]
  }
];

// variable let
let question_count2 = 0;
let points2 = 0;

// arrow function kosong
// window.onload = () => show2(question_count2);

// arrow function
const next2 = () => {

   
  // jika pertanyaan sudah terakhir maka akan di redirect ke selesai.html
  if (question_count2 == questions2.length - 1) {
    localStorage.setItem("time", time);
    clearInterval(mytime);
    if (questions2[0].id == 1 && questions2[1].id == 2 && questions2[2].id == 3 && questions2[3].id == 4 && questions2[4].id == 5) {
      localStorage.setItem("answer", questions2[0].answer);
      localStorage.setItem("answer2", questions2[1].answer);
      localStorage.setItem("answer3", questions2[2].answer);
      localStorage.setItem("answer4", questions2[3].answer);
      localStorage.setItem("answer5", questions2[4].answer);
    }
    location.href = "selesai.html";
  }
  // console.log(question_count2);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // mengecek jawaban benar dan memberi point
  if (user_answer == questions2[question_count2].answer) {
    points2 += 20;
    localStorage.setItem("points", points2);
  }

  question_count2++;
  show2(question_count2);
}

// arrow function expression
const show2 = (count) =>{
  let question2 = document.getElementById("questions2");
  
  //destructuring array manual
  let [first, second, third, fourth] = questions2[count].options;

// templateliteral
  question2.innerHTML = `
  <h2><span style="color : #7536C0;">${count + 1}.</span> ${questions2[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive2();
}

// variable const dan arrowfunction
const toggleActive2 = () => {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = () => {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
