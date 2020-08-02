let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
let user_points2 = sessionStorage.getItem("points");
let user_time = sessionStorage.getItem("time");
document.querySelector("p.name").innerHTML = user_name;
// memberi nilai 0 jika jawban salah semua
if (user_points === null) {
    document.querySelector("span.points").innerHTML = 0;
} else {
    document.querySelector("span.points").innerHTML = user_points + '%';
}
if (user_points2 === null) {
    document.querySelector("span.points2").innerHTML = 0;
} else {
    document.querySelector("span.points2").innerHTML = user_points2 + '%';
}
let progress = document.querySelector('#progress-done');
progress.style.width = user_points + '%';
progress.style.opacity = 1;

document.querySelector("span.time_taken").innerHTML = user_time +"s";

function submitForm(e) {
    e.preventDefault();
    sessionStorage.clear();
  
    location.href = "index.html";
  }