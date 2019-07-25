var getFriendsRequest = new XMLHttpRequest();

// polling
function getFriends() {

    getFriendsRequest.open("GET", "Controller?action=getFriends", true);
    getFriendsRequest.onreadystatechange = getFriendsData;
    getFriendsRequest.send(null);
}


function getFriendsData() {

    if (getFriendsRequest.status == 200) {
        if (getFriendsRequest.readyState == 4) {

            var serverResponse = JSON.parse(getFriendsRequest.responseText);

            //console.log(serverResponse);
            var friendsTBODY = document.getElementById("friends");
            var firstTR = friendsTBODY.childNodes[1];

            if (firstTR == undefined) {
                for (var i = 0; i < serverResponse.length; i++) {
                    makeFriendsTable(serverResponse);
                }
            } else {
                //console.log("no friends");
                for (var i = 0; i < serverResponse.length; i++) {
                    friendsTBODY.removeChild(friendsTBODY.childNodes[1]);
                    makeFriendsTable(serverResponse);
                }
            }
        }
        setTimeout(getFriends, 1000);
}
function makeFriendsTable(Json) {


        var tr = document.createElement('tr');
        var tdName = document.createElement('td');
        var tdStatus = document.createElement('td');


        var name = document.createTextNode(serverResponse[i].firstName);
        var status = document.createTextNode(serverResponse[i].status);
        console.log("status= " + status);


        tdName.appendChild(name);
        tdStatus.appendChild(status);

        tr.appendChild(tdName);
        tr.appendChild(tdStatus);

        friendsTBODY.appendChild(tr);
    }

}

