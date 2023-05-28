function addActivity(){
    let name = document.getElementById("name").value;
    let details = document.getElementById("details").value;
    sessionStorage.setItem(name,details);
    alert("Activity has been added successfully");
    window.location.href="../html/extracurricular-activities.html";
    return false;
}


function listActivity(){
    var activityList = document.getElementById("activityList");
    if (activityList){
        if(sessionStorage.length < 2) {
            activityList.style.display = "none";
        } 
        else{
            activityList.style.display = "block";
            let addNewActivityDiv = document.getElementById("add-new-activity-div");
            addNewActivityDiv.style.cssText = "min-height: 0vh";

            for (let i = 0; i < sessionStorage.length; i++){
                let key = sessionStorage.key(i);
                if(key != "username" && key != "id" && key != "IsThisFirstTime_Log_From_LiveServer" && key != "AddressBarServiceCalled"){

                    let activityDiv = document.createElement("div");
                    activityDiv.style.cssText = "background-color: #ffdac0; border-radius: 20px; padding: 30px 30px 15px 30px; margin-bottom: 50px;";
                    activityList.appendChild(activityDiv);

                    let activityName = document.createElement("h5");
                    activityName.style.cssText = "text-decoration: underline;";
                    activityName.innerHTML = key;
                    activityDiv.appendChild(activityName);

                    let activityDetails = document.createElement("p");
                    activityDetails.innerHTML = sessionStorage.getItem(key);
                    activityDiv.appendChild(activityDetails);
                }
            }
        }
    }
}