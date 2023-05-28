//Download button function
function Download() {
    html2canvas(document.getElementById('time-table'), {
        onrendered: function (canvas) {
            var data = canvas.toDataURL();
            var docDefinition = {
                content: [{
                    image: data,
                    width: 500
                }]
            };
            pdfMake.createPdf(docDefinition).download("Time-Table.pdf");
        }
    });
}

//Display time-table subjects according to student
let student = [];
function fetchTimeTableData(){
    fetch("../json/student-data.json").then((response) => response.json()).then((json) => {
        student = JSON.parse(JSON.stringify(json)).student;
        callDisplayTimeTableData();
    });
}
fetchTimeTableData();

function callDisplayTimeTableData(){

    let mon1 = document.getElementById("mon1");
    let mon2 = document.getElementById("mon2");
    let mon3 = document.getElementById("mon3");
    let mon4 = document.getElementById("mon4");
    let mon5 = document.getElementById("mon5");

    let tue1 = document.getElementById("tue1");
    let tue2 = document.getElementById("tue2");
    let tue3 = document.getElementById("tue3");
    let tue4 = document.getElementById("tue4");
    let tue5 = document.getElementById("tue5");

    let wed1 = document.getElementById("wed1");
    let wed2 = document.getElementById("wed2");
    let wed3 = document.getElementById("wed3");
    let wed4 = document.getElementById("wed4");
    let wed5 = document.getElementById("wed5");

    let thu1 = document.getElementById("thu1");
    let thu2 = document.getElementById("thu2");
    let thu3 = document.getElementById("thu3");
    let thu4 = document.getElementById("thu4");
    let thu5 = document.getElementById("thu5");

    let fri1 = document.getElementById("fri1");
    let fri2 = document.getElementById("fri2");
    let fri3 = document.getElementById("fri3");
    let fri4 = document.getElementById("fri4");
    let fri5 = document.getElementById("fri5");

    for(let i = 0; i < student.length; i++){
        if(student[i].id == sessionStorage.getItem("id")){
            mon1.innerHTML = student[i].time_table[0]["mon1"];
            mon2.innerHTML = student[i].time_table[0]["mon2"];
            mon3.innerHTML = student[i].time_table[0]["mon3"];
            mon4.innerHTML = student[i].time_table[0]["mon4"];
            mon5.innerHTML = student[i].time_table[0]["mon5"];

            tue1.innerHTML = student[i].time_table[0]["tue1"];
            tue2.innerHTML = student[i].time_table[0]["tue2"];
            tue3.innerHTML = student[i].time_table[0]["tue3"];
            tue4.innerHTML = student[i].time_table[0]["tue4"];
            tue5.innerHTML = student[i].time_table[0]["tue5"];

            wed1.innerHTML = student[i].time_table[0]["wed1"];
            wed2.innerHTML = student[i].time_table[0]["wed2"];
            wed3.innerHTML = student[i].time_table[0]["wed3"];
            wed4.innerHTML = student[i].time_table[0]["wed4"];
            wed5.innerHTML = student[i].time_table[0]["wed5"];

            thu1.innerHTML = student[i].time_table[0]["thu1"];
            thu2.innerHTML = student[i].time_table[0]["thu2"];
            thu3.innerHTML = student[i].time_table[0]["thu3"];
            thu4.innerHTML = student[i].time_table[0]["thu4"];
            thu5.innerHTML = student[i].time_table[0]["thu5"];

            fri1.innerHTML = student[i].time_table[0]["fri1"];
            fri2.innerHTML = student[i].time_table[0]["fri2"];
            fri3.innerHTML = student[i].time_table[0]["fri3"];
            fri4.innerHTML = student[i].time_table[0]["fri4"];
            fri5.innerHTML = student[i].time_table[0]["fri5"];
        }
    }
}