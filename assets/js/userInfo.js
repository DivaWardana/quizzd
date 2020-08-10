// get item dari localStorage
let user_name = localStorage.getItem("name");
let user_points = localStorage.getItem("points");
let user_time = localStorage.getItem("time");
if (user_name === '') {
    document.querySelector("#name").innerHTML = "Tamu";
} else {
    document.querySelector("#name").innerHTML = user_name;
}
// memberi nilai 0 jika jawban salah semua
if (user_points === null) {
    document.querySelector("span.points").innerHTML = 0;
} else {
    document.querySelector("span.points").innerHTML = user_points + '%';
}
if (user_points === null) {
    document.querySelector("span.points2").innerHTML = 0;
} else {
    document.querySelector("span.points2").innerHTML = user_points ;
}
let progress = document.querySelector('#progress-done');
progress.style.width = user_points + '%';
progress.style.opacity = 1;

document.querySelector("span.time_taken").innerHTML = user_time +"s";

const submitForm = (e) => {
    e.preventDefault();

    if (localStorage.getItem("idq") == 1) {
        localStorage.removeItem('points');
        localStorage.removeItem('time');
        localStorage.removeItem('answer');
        localStorage.removeItem('answer2');
        localStorage.removeItem('answer3');
        localStorage.removeItem('answer4');
        localStorage.removeItem('answer5');
        localStorage.removeItem('idq');
    
        location.href = "quiz.html";
    } else {
        localStorage.removeItem('points');
        localStorage.removeItem('time');
        localStorage.removeItem('answer');
        localStorage.removeItem('answer2');
        localStorage.removeItem('answer3');
        localStorage.removeItem('answer4');
        localStorage.removeItem('answer5');
    
        location.href = "quiz2.html";
    }
    
  }
const submitForm2 = (e) => {
    e.preventDefault();
    localStorage.removeItem('points');
    localStorage.removeItem('time');
    localStorage.removeItem('answer');
    localStorage.removeItem('answer2');
    localStorage.removeItem('answer3');
    localStorage.removeItem('answer4');
    localStorage.removeItem('answer5');
    localStorage.removeItem('idq');
  
    location.href = "selectq.html";
  }

let user_answer = localStorage.getItem("answer");
let user_answer2 = localStorage.getItem("answer2");
let user_answer3 = localStorage.getItem("answer3");
let user_answer4 = localStorage.getItem("answer4");
let user_answer5 = localStorage.getItem("answer5");

document.querySelector("#jawab").innerHTML ='<span style=" color : #8854c0;">Q1. </span>' + user_answer;
document.querySelector("#jawab2").innerHTML ='<span style=" color : #8854c0;">Q2. </span>' + user_answer2;
document.querySelector("#jawab3").innerHTML ='<span style=" color : #8854c0;">Q3. </span>' + user_answer3;
document.querySelector("#jawab4").innerHTML = '<span style=" color : #8854c0;">Q4. </span>' + user_answer4;
document.querySelector("#jawab5").innerHTML = '<span style=" color : #8854c0;">Q5. </span>' + user_answer5;