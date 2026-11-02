
// QUESTION 1: SIGNUP FORM
function detailsForm() {
  var userName = document.getElementById("userName").value;
  var email = document.getElementById("email").value;
  var course = document.getElementById("course").value;
  var phoneNo = document.getElementById("phoneNo").value;
  var myCard = document.getElementById("myCard");
  var form = document.getElementById("form")
  form.style.display = "none";
  myCard.innerHTML = `<div class="id-card-wrapper">
            <div class="id-card">
                <div class="profile-row">

                    <div class="dp">
                        <div class="dp-arc-outer"></div>
                        <div class="dp-arc-inner"></div>

                        <img src=image/profile.avif
                             alt="Profile Picture">
                    </div>

                    <div class="desc">
                        <h1>Name: ${userName}</h1>
                        <p>Email: ${email}</p>
                        <p>Course: ${course}</p>
                        <p>Phone No: ${phoneNo}</p>
                    </div>

                </div>
            </div>
        </div>`
    ;

  console.log(userName, email, course, phoneNo, myCard);
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
    <td><button onclick="editRow(this)">Edit</button>
      <button onclick="deleteRow(this)">Delete</button></td>
      </tr>`

}
function editRow(e) {
  var activeRow = e.parentNode.parentNode
  var currentName = activeRow.children[0].textContent
  var currentClass = activeRow.children[1].textContent
  var currentRoll = activeRow.children[2].textContent
  var currentEmail = activeRow.children[3].textContent

  document.getElementById("editFormContainer").style.display = "block"
  document.getElementById("editName").value = currentName
  document.getElementById("editClass").value = currentClass
  document.getElementById("editRoll").value = currentRoll
  document.getElementById("editEmail").value = currentEmail


}
function saveChanges(e) {
  e.preventDefault();

    // var activeRow = e.parentNode.parentNode

  var updatedName = document.getElementById("editName").value;
  var updatedClass = document.getElementById("editClass").value;
  var updatedRoll = document.getElementById("editRoll").value;
  var updatedEmail = document.getElementById("editEmail").value;

document.getElementById("studentNameValue").textContent = updatedName;
document.getElementById("studentClassValue").textContent = updatedClass;
document.getElementById("studentRollValue").textContent = updatedRoll;
document.getElementById("studentEmailValue").textContent = updatedEmail;

}

function closeEditForm() {
  document.getElementById("editFormContainer").style.display = "none"
}


function deleteRow(e) {
  e.closest("tr").remove();

}