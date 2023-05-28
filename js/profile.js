let student = [];
function fetchStudentData(){
    fetch("../json/student-data.json").then((response) => response.json()).then((json) => {
        student = JSON.parse(JSON.stringify(json)).student;
        callDisplayStudentData();
    });
}
fetchStudentData();

function callDisplayStudentData(){
    let profileimage = document.getElementById("maleorfemale_profileimage");
    let my_name = document.getElementById("my_name");
    let my_mobile = document.getElementById("my_mobile");
    let my_email = document.getElementById("my_email");
    let pm_name = document.getElementById("pm_name");
    let pm_mobile = document.getElementById("pm_mobile");
    let pm_email = document.getElementById("pm_email");
    let gender = document.getElementById("gender");
    let dob = document.getElementById("dob");
    let nationality = document.getElementById("nationality");
    let current_address = document.getElementById("current_address");
    let permanent_address = document.getElementById("permanent_address");
    let guardian_name = document.getElementById("guardian_name");
    let guardian_contact = document.getElementById("guardian_contact");
    let exchange_student = document.getElementById("exchange_student");
    let sin = document.getElementById("sin");
    let class_name = document.getElementById("class_name");
    let class_representative = document.getElementById("class_representative");
    let subjects = document.getElementById("subjects");
    let doa = document.getElementById("doa");

    for(let i = 0; i < student.length; i++){
        if(student[i].id == sessionStorage.getItem("id")){

            if(student[i].profile[0]["gender"] == "Female"){
                profileimage.src = "../img/female-profile-image.png"
            }

            my_name.innerHTML = student[i].profile[0]["my_name"];
            my_mobile.innerHTML = student[i].profile[0]["my_mobile"];
            my_email.innerHTML = student[i].profile[0]["my_email"];
            pm_name.innerHTML = student[i].profile[0]["pm_name"];
            pm_mobile.innerHTML = student[i].profile[0]["pm_mobile"];
            pm_email.innerHTML = student[i].profile[0]["pm_email"];
            gender.innerHTML = student[i].profile[0]["gender"];
            dob.innerHTML = student[i].profile[0]["dob"];
            nationality.innerHTML = student[i].profile[0]["nationality"];
            current_address.innerHTML = student[i].profile[0]["current_address"];
            permanent_address.innerHTML = student[i].profile[0]["permanent_address"];
            guardian_name.innerHTML = student[i].profile[0]["guardian_name"];
            guardian_contact.innerHTML = student[i].profile[0]["guardian_contact"];
            exchange_student.innerHTML = student[i].profile[0]["exchange_student"];
            sin.innerHTML = student[i].profile[0]["sin"];
            class_name.innerHTML = student[i].profile[0]["class_name"];
            class_representative.innerHTML = student[i].profile[0]["class_representative"];
            subjects.innerHTML = student[i].profile[0]["subjects"];
            doa.innerHTML = student[i].profile[0]["doa"];
        }
    }
}