
// QUESTION 1: SIGNUP FORM


function toggleForm() {
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var number = document.getElementById("number").value

    var myCard = document.getElementById("myCard")
    var form = document.getElementById("form")
    form.style.display = "none"
    myCard.innerHTML = `<div class="id-card">
            <div class="id-header">
               <img src="https://lms.saylaniit.com/sit-logo-on-dark.png" class="id-logo" alt="logo">
               <img class="id-photo" src="https://lms.saylaniit.com/sit-logo-on-dark.png" alt="photo" />
            </div>
            <div class="id-details">
              <h1 class="m-name">Mr. John Doe</h1>
              <h3 class="m-designation">HOD - Company Name</h3>
              <div class="m-info">
                  <div>
                    <div class="m-info-group">
                      <h4 class="info-label">Name: </h4>
                      <h4 class="info-value">${name}</h4>
                    </div>
                    <div class="m-info-group">
                      <h4 class="info-label">Phone: </h4>
                      <h4 class="info-value">${number}</h4>
                    </div>
                    <div class="m-info-group">
                      <h4 class="info-label">Email: </h4>
                      <h4 class="info-value email">${email}</h4>
                    </div>
                   
                  </div>
                  <div class="m-qrcode">
                    <img src="https://img.magnific.com/free-vector/scan-me-qr-code_78370-9714.jpg?semt=ais_hybrid&w=740&q=80" alt="qr-code">
                  </div>
              </div>
            </div>
            <div class="id-footer">
                www.website.com
            </div>
        </div>`

}



// QUESTION 2: READ MORE

function expand() {
    var shortPara = "Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus.";

    var expandedParagraph = "Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";

    if (document.getElementById("link").innerHTML === "see more...") {
        document.getElementById("slowLoris").innerHTML = expandedParagraph;
        document.getElementById("link").innerHTML = "see less";
    } else {
        document.getElementById("slowLoris").innerHTML = shortPara;
        document.getElementById("link").innerHTML = "see more...";
    }
}


// QUESTION 3: STUDENT DETAILS

function addStudent(event) {
    event.preventDefault()
    var studentNameValue = document.getElementById("studentName").value
    var studentClassValue = document.getElementById("studentClass").value
    var studentRollValue = document.getElementById("studentRoll").value
    var studentEmailValue = document.getElementById("studentEmail").value

    var tableBody = document.getElementById("studentTable")
    // var row = document.createElement("tr")

    // row.innerHTML = `
    //                 <td>${studentNameValue}</td>
    //                 <td>${studentClassValue}</td>
    //                 <td>${studentRollValue}</td>
    //                 <td>${studentEmailValue}</td>
    //                 <td><button onclick="editRow()">Edit</button>
    //                   <button onclick="deleteRow()">Delete</button></td>`

    // tableBody.appendChild(row)
    studentTable.innerHTML += `
    <tr>
    <td>${studentNameValue}</td>
    <td>${studentClassValue}</td>
    <td>${studentRollValue}</td>
    <td>${studentEmailValue}</td>
    <td><button onclick="editRow()">Edit</button>
      <button onclick="deleteRow(this)">Delete</button></td>
      </tr>`

}
function editRow(){

}

function deleteRow(e){
   e.closest("tr").remove();
    
}