let selectQuiz = [{
    id: 1,
    quiz: "Matematika"
},
];

//menambahkan quiz baru menggunakan set
var setQuiz = new Set(selectQuiz);
setQuiz.add({id: 2, quiz: 'Bahasa'});

//spreadingOperator
selectQuiz = [...setQuiz];

//arrow function
const submitQuiz = (id) => {
  if (id == 1) {
    localStorage.setItem("idq",id);
    location.href = "quiz.html";
  } else {
    localStorage.setItem("idq",id);
    location.href = "quiz2.html";
  }
  }

const show = () =>{
    let question = document.querySelector("#quizq");
  
  // templateliteral
  // forEach
  let parent = `<div>`;
    selectQuiz.forEach((quiz) => {
      parent += `<button onclick='submitQuiz(${quiz.id})'>${quiz.quiz}</button>`;
    }); 
  
parent += `</div>`;
question.innerHTML = parent;
  }

  window.onload = show();
