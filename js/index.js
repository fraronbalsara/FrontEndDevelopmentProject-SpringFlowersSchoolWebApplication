let student = [];
function fetchStudentData(){
    fetch("../json/student-data.json").then((response) => response.json()).then((json) => {
        student = JSON.parse(JSON.stringify(json)).student;
    });
}
fetchStudentData();

function login(){
    let entered_username = document.getElementById("username").value;
    let entered_password = document.getElementById("password").value;
    let valid_user = false;
    for(let i = 0; i < student.length; i++){
        if(entered_username == student[i].username && entered_password == student[i].password){
            valid_user = true;
            sessionStorage.setItem('username', student[i].username);
            sessionStorage.setItem('id', student[i].id);
            break;
        }
    }
    if(valid_user){
        window.location.href="../html/home.html";
        return false;
    }
    else{
        document.getElementById("login-error").style.display = "block";
        return false;
    }
}