

// this function clears all values

function clearscreen() {
     document.getElementById("displaybox").value="";
}

// this function displayes values
function display(value) {
    document.getElementById("displaybox").value += value;
}

// this function evaluates operations

function calculate() {
    let p = document.getElementById("displaybox").value;
    let q = eval(p);
    document.getElementById("displaybox").value= p+"="+q;
    
}
