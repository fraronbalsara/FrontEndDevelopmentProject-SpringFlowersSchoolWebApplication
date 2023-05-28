let student = [];

//To display subjects in the select tag
function fetchSubjects(){
    fetch("../json/student-data.json").then((response) => response.json()).then((json) => {
        student = JSON.parse(JSON.stringify(json)).student;
        callDisplaySubjects();
    });
}
fetchSubjects();

function callDisplaySubjects(){
    let subject1 = document.getElementById("subject1");
    let subject2 = document.getElementById("subject2");
    let subject3 = document.getElementById("subject3");
    let subject4 = document.getElementById("subject4");
    let subject5 = document.getElementById("subject5");
    let subject6 = document.getElementById("subject6");
    let subject7 = document.getElementById("subject7");

    for(let i = 0; i < student.length; i++){
        if(student[i].id == sessionStorage.getItem("id")){
            subject1.innerHTML = student[i].subjects_selection[0]["subject1"];
            subject1.value = student[i].subjects_selection[0]["subject1"];
            subject2.innerHTML = student[i].subjects_selection[0]["subject2"];
            subject2.value = student[i].subjects_selection[0]["subject2"];
            subject3.innerHTML = student[i].subjects_selection[0]["subject3"];
            subject3.value = student[i].subjects_selection[0]["subject3"];
            subject4.innerHTML = student[i].subjects_selection[0]["subject4"];
            subject4.value = student[i].subjects_selection[0]["subject4"];
            subject5.innerHTML = student[i].subjects_selection[0]["subject5"];
            subject5.value = student[i].subjects_selection[0]["subject5"];
            subject6.innerHTML = student[i].subjects_selection[0]["subject6"];
            subject6.value = student[i].subjects_selection[0]["subject6"];
            subject7.innerHTML = student[i].subjects_selection[0]["subject7"];
            subject7.value = student[i].subjects_selection[0]["subject7"];
        }
    }
}

//To populate marks and grade
function displayMarks(){
    fetch("../json/student-data.json").then((response) => response.json()).then((json) => {
        student = JSON.parse(JSON.stringify(json)).student;
        callDisplayMarks();
    });
}

function callDisplayMarks(){

    let subject = document.getElementById("subject").value;
    let marks = document.getElementById("marks");
    let grade = document.getElementById("grade");

    for(let i = 0; i < student.length; i++){
        if(student[i].id == sessionStorage.getItem("id")){
            for(let j = 0; j < student[i].exam_results.length; j++){
                for(const key in student[i].exam_results[j]){
                    if(student[i].exam_results[j].hasOwnProperty(key)){
                        if(subject == key){
                            marks.value = student[i].exam_results[j][key][0]["marks"];
                            grade.value = student[i].exam_results[j][key][0]["grade"];
                        }
                    }
                }
            }
        }
    }
}