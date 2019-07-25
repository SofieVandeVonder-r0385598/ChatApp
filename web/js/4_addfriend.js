var addFriendRequest = new XMLHttpRequest();

function addFriend(){


    var email = document.getElementById("emailInput").value;
    console.log("email: " +email);
    var friend ="friend="+encodeURIComponent(email);


    addFriendRequest.open("POST", "Controller?action=AddFriend", true);
    addFriendRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    addFriendRequest.onreadystatechange=addFriendData;
    addFriendRequest.send(friend);




}

function addFriendData(){

    if(addFriendRequest.status == 200){
        if(addFriendRequest.readyState == 4){

          //  var serverResponse = JSON.parse(addFriendRequest.responseText);
            getFriends();


        }
    }



}