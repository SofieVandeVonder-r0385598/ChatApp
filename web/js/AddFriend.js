var addFriendRequest = new XMLHttpRequest();

function addFriend() {


    // alert("nieuw vriendje");
    var emailFriend = document.getElementById("emailInput").value;
    var newFriend = "newFriend=" + encodeURIComponent(emailFriend);
    addFriendRequest.open("POST", "Controller?action=AddNewFriend", true);
    addFriendRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    addFriendRequest.onreadystatechange = addFriendData;
    addFriendRequest.send(newFriend);
}


function addFriendData() {
    if (addFriendRequest.status == 200) {
        if (addFriendRequest.readyState == 4) {

            var serverResponse = JSON.parse(addFriendRequest.responseText);


            var tbody = document.getElementById("friends");
            var newFriendTR = document.createElement("newFriend");

            var tdName = document.createElement('td');

            var tdStatus = document.createElement('td');


            var name = document.createTextNode(serverResponse.firstname);
            var status = document.createElement(serverResponse.status);

            tdName.appendChild(name);
            tdStatus.appendChild(status);

            newFriendTR.appendChild(tdName);
            newFriendTR.appendChild(tdStatus);
            tbody.appendChild(newFriendTR)
        }

    }


}