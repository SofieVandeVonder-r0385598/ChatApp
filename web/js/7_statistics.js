var getStatisticsRequest = new XMLHttpRequest();

function getStatisticsFunction(){

    getStatisticsRequest.open("GET", "Controller?action=getStatistics", true);
    getStatisticsRequest.onreadystatechange=getStatisticsData;
    getStatisticsRequest.send(null);

}

function getStatisticsData(){


    if (getStatisticsRequest.status == 200){
        if(getStatisticsRequest.readyState==4){



            var serverResponse = JSON.parse(getStatisticsRequest.responseText);
            //console.log(serverResponse);


            var onlineDiv = document.getElementById("onlineDIV");
            var offlineDiv = document.getElementById("offlineDIV");

            var pOnline = onlineDiv.childNodes[1];

            var pOffline = offlineDiv.childNodes[1];

            if(pOnline == undefined ){

                var pOnline = document.createElement('p');
                var nrOnline = document.createTextNode( serverResponse.online);
                console.log("online:" +serverResponse.online);
                var pOffline = document.createElement('p');
                var nrOffline = document.createTextNode( serverResponse.offline);
                console.log("offline" +nrOffline);

                pOnline.appendChild(nrOnline);
                pOffline.appendChild(nrOffline);

                onlineDiv.appendChild(pOnline);
                offlineDiv.appendChild(pOffline);
          }
          else{


             /*   var nrOnline = document.createTextNode("Online: " + serverResponse.online);

                var nrOffline = document.createTextNode("Offline: " + serverResponse.offline);

                pOnline.appendChild(nrOnline);
                pOffline.appendChild(nrOffline);*/
             //console.log("maybe i should sleeeeeeeep");
          }


        }
    }

setTimeout(getStatisticsFunction, 2000);

}