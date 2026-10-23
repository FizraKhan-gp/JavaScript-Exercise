// 1. Show an alert box on click on a link.

// 2. Display some Mobile images in browser. On click on animage Show the message in alert to user.

// 3. Display 10 student records in table and each row should contain a deletebutton. If you click on a button to delete a record, entire row should bedeleted

function deleteRow (e){
    var row= e.closest("tr")
    row.remove()
}


// 4. Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.

// 5. Show a counter in browser. Counter should increase on click on increase\button and decrease on click on decrease button. And show updated countervalue in browser

var counter = 0;

function increase() {
    counter++;
    console.log(counter);
    document.getElementById("count").innerText = counter;
}

function decrease() {
    counter--;
    console.log(counter);
    document.getElementById("count").innerText = counter;
}