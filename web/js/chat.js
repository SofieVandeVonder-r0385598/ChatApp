/*
// online status
/!*
var getStatusRequest = new XMLHttpRequest();

function getStatus() {
    getStatusRequest.open("GET", "Controller?action=Status");
    getStatusRequest.onreadystatechange = getData;
    getStatusRequest.send(null);
   // alert(openChat("Nick"));
}

function getData() {

    if (getStatusRequest.status == 200) {
        if (getStatusRequest.readyState == 4) {
            var div = document.getElementById("currentStatus");
            var p = document.createElement('p');
            var text = document.createTextNode(getStatusRequest.responseText);
            p.appendChild(text);
            div.appendChild(p);
        }
    }
}
*!/


//change status
/!*
var newStatusRequest = new XMLHttpRequest();

function changeStatus() {
    var newStatus = document.getElementById("statusInput").value;
    var status = "status=" + encodeURIComponent(newStatus); // special chars

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

            setTimeout(changeStatus, 1);
        }
    }
}
*!/


//vriendenlijst tonen => pull

/* getFriendsRequest = new XMLHttpRequest();*/

/*function getFriends() {

    getFriendsRequest.open("GET", "Controller?action=getFriends", true);
    getFriendsRequest.onreadystatechange = getFriendsData;
    getFriendsRequest.send(null);


}

/*
/!*function goToChatroomPage() {
$.ajax({
    type:"GET",
    url: "Controller?action=toChatroomPage",


})
}


function dzqddzq() {

    if (getFriendsRequest.status == 200) {
        if (getFriendsRequest.readyState == 4) {

            var serverResponse = JSON.parse(getFriendsRequest.responseText);

            var tbody = document.getElementById("friends");

            // hier had je 0 staan
            var tr = tbody.childNodes[1];
            // hier had je null staan
            if (tr == undefined) {

                for (var i = 0; i < serverResponse.length; i++) {
                    var newTR = document.createElement('tr');
                    // dit werkt niet goed met innerHTML, beter met create methodes
                    //nameTD.innerHTML = serverResponse[i].firstName;
                    //statusTD.innerHTML = serverResponse[i].status;
                    var nameTD = document.createElement('button');
                    var statusTD = document.createElement('td');
                    var nameText = document.createTextNode(serverResponse[i].firstName);
                    var statusText = document.createTextNode(serverResponse[i].status);
                    nameTD.appendChild(nameText);
                    statusTD.appendChild(statusText);
                    var chatTD = document.createElement('td');

                    /!*       var chatButton = document.createElement('button');
                           chatButton.id = serverResponse[i].firstName;
                           chatButton.innerText= "Chat";
                           chatButton.onclick=openChat();
                           chatButton.type="button";
                           console.log(chatTD);*!/
                    tr.appendChild(nameTD);
                    tr.appendChild(statusTD);
                    tr.appendChild(chatTD);
                    tbody.appendChild(tr);
                }
            } else {
                // for lus was je hier vergeten
                for (var i = 0; i < serverResponse.length; i++) {
                    var newTR = document.createElement('tr');
                    tbody.removeChild(tbody.childNodes[1]);


                    var nameTD = document.createElement('td');
                    var statusTD = document.createElement('td');
                    var nameText = document.createTextNode(serverResponse[i].firstName);
                    var statusText = document.createTextNode(serverResponse[i].status);


                    //var linkToChatroomPage = document.createElement('a');
                    //linkToChatroomPage.onclick("Controller?action=toChatroomPage");
                    //chatTD.appendChild(linkToChatroomPage);
                    //nameTD.id = serverResponse[i].firstName;


                    /!* var chatTD = document.createElement('td');

                     var chatButton = document.createElement('button');
                     chatButton.type="button";
                     chatButton.id = serverResponse[i].firstName;
                     chatButton.innerText= "Chat";
                     chatButton.onclick="openChat()";
                     console.log(chatTD);*!/


                    //var chatText = document.createTextNode("Chat");
                    //chatTD.id = serverResponse[i].firstName;


                    //   chatTD.onclick(openChat());

                    var chatTD = document.createElement('td');
                    chatTD.innerHTML = "<button id='chatButton' onclick='openChat(document.getElementById('nameText').value)')>Chat</button>";

                    console.log(chatTD.innerHTML);
                    //   alert("hallo?");

                    nameTD.appendChild(nameText);
                    statusTD.appendChild(statusText);
                    //chatTD.appendChild(chatButton)
                    newTR.appendChild(nameTD);
                    newTR.appendChild(statusTD);
                    newTR.appendChild(chatTD);

                    tbody.append(newTR);
                }
            }

            setTimeout(getFriends, 10000);


        }
    }


}


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


//blogpost

var webSocket;
var postDiv;

function openSocket() {
    webSocket = new WebSocket("ws://localhost:8080/echo");


    // event listeners
    webSocket.onopen = function (event) {
        // writeResponse("connection opened")
    };

    webSocket.onmessage = function (event) {
        //writeResponse(event.data);

        if (event.data == null) {
            alert('null????? :(');
        } else {
            // alert(event.toString());
            var nr = JSON.parse(event.data).number;


            // console.log(nr);
            var user = JSON.parse(event.data).user;
            //console.log(user);
            var rating = JSON.parse(event.data).rating;
            //console.log(rating);
            var comment = JSON.parse(event.data).comment;
            //console.log(comment);

            //var whichDiv = "post" + "" +nr;
            postDiv = document.getElementById("post" + nr);

            var userP = document.createElement('p');
            userP.innerText = "User: " + user.toString();

            var ratingP = document.createElement('p');
            ratingP.innerText = "Rating: " + rating.toString();

            var commentP = document.createElement('p');
            commentP.innerText = ("Comment: " + comment);


            postDiv.appendChild(userP);
            postDiv.appendChild(ratingP);
            postDiv.appendChild(commentP);
        }


    };

    webSocket.onclose = function (event) {
        // writeResponse("Connection closed");
    };
}


function closeSocket() {
    webSocket.close();
}

function addCommentForBlogNumber(number) {
    //openSocket();
    //console.log(webSocket.toString());

    //var blogNumber = number;

    //alert('help');

    var email = document.getElementById("user" + number).value;
    console.log(email);

    var comment = document.getElementById("comment" + number).value;
    console.log(comment);
    var rating = document.getElementById("rating" + number).value;
    console.log(rating);

    webSocket.send("{\"" + "number\": \"" + number + "\", \"user\": \"" + email + "\", \"comment\": \"" + comment + "\", \"rating\":\"" + rating + "\"}");


}

/!*

function openChat(friend) {
    alert(friend);
}

document.getElementById("openchat").addEventListener("click", function () {
    openChat(this.id);

});
*!/


/!*
$(document).ready(function()
{
    $("Test").click(function () {
        alert($("chatID").attr("id"));
    });
});*!/


function getMessages() {
    $.ajax({
        type: "GET",
        url: "Controller?action=getMessages",
        dataType: "json",
        success: function (json) {
            $('#divMessages').html(json.text);
            setTimeout(getMessages, 10000);
        },
        error: function () {
            console.log("messages werkt niet");
        }

    });
}

function sendMessage(toUser) {
    $.post("Controller?action=sendMessage", {user: $userName}, {message: $message})


}

$(document).ready(function () {
    var $chatButton = $('#chatButton');
    var $receiver = $('#receiver');
    var $chatForm = $('#chatForm');
    var $chatBox = $('#chatBox');

    $chatForm.show();
    $chatButton.hide();

    $('#chatForm').on('click', function () {
        var textInput = document.createElement('input');
        textInput.id = "message";
        var sendButton = document.createElement('button');

        var berichtP = document.createElement('p');
        berichtP.innerText = "Chatbox";
        $chatBox.append(berichtP);

        $chatBox.append(textInput);
        $chatBox.append(sendButton);

        $bericht = document.getElementById("message").value;
        $.post("Controller?action=sendMessage", {receiver:$receiver}, {message:$bericht}, function(data) {
            var newMessageParagraph = $('<p/>').text(data);
            $('#divMessages').append(newMessageParagraph);
        });


    });


});








*!/
*/
