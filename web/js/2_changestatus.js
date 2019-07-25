var newStatusRequest = new XMLHttpRequest();

//var statusbutton = document.getElementById("changeStatusButton");
//statusbutton.onclick = changeStatus;
//   <p className="opgave">opdracht 2 ASYNCHROON: status veranderen </p>
function changeSelectedStatus(){
    var selected=document.getElementById("selectedStatus");
    var element = selected.options[selected.selectedIndex].text;
    console.log(element);


    var status = "status=" + encodeURIComponent(element);
    newStatusRequest.onreadystatechange = getDataChangedStatus;
    newStatusRequest.open("POST", "Controller?action=ChangeStatus");
    newStatusRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    newStatusRequest.send(status);
}
function changeStatus() {

    var input = document.getElementById("statusInput").value;


 /*   if (    input != null)
    {
        console.log("selected: "+element);
        newStatus = input;
    } else {
        // get value from select ?
        var select = document.getElementById("selectedStatus");
        var element = select.options[select.selectedIndex].text;

        console.log("input: " + input);
        newStatus = element;
    }*/

    var status = "status=" + encodeURIComponent(input); // special chars

    newStatusRequest.onreadystatechange = getDataChangedStatus;
    newStatusRequest.open("POST", "Controller?action=ChangeStatus");
    newStatusRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    newStatusRequest.send(status);
}

function getDataChangedStatus() {
    if (newStatusRequest.status == 200) {
        if (newStatusRequest.readyState == 4) {

            var div = document.getElementById("currentStatus");
            var p = div.childNodes[0]; // maakt p aan

            var text = document.createTextNode(newStatusRequest.responseText);
            p.removeChild(p.childNodes[0]);
            p.appendChild(text);
        }
    }
}
