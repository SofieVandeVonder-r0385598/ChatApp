<%--
  Created by IntelliJ IDEA.
  User: Sofie
  Date: 23/09/2018
  Time: 15:35
  To change this template use File | Settings | File Templates.
--%>

<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<jsp:include page="head.jsp">
    <jsp:param name="title" value="Chat home"/>
</jsp:include>
<body onload="getStatus(); getFriends(); ">
<jsp:include page="header.jsp">
    <jsp:param name="title" value="Chat"/>
</jsp:include>
<main>


    <h1>Welcome</h1>
    <p>You are logged in as: ${user.getFirstName()}</p>

    <div class="opdracht">
        <p class="status">You are now:</p>
        <div style="margin-left:100px;font-weight: bold; margin-top: 1%" id="currentStatus"></div>


    </div>


    <div class="opdracht">
        <p class="status">Change status:</p>

        <input list="selectedStatus"id="statusInput">

        <select  id="selectedStatus">

            <option value="Online">Online</option>
            <option value="Busy">Busy</option>
            <option value="Away">Away</option>
            <option value="Offline">Offline</option>

        </select>




        <input type="button" id="changeStatusButton" value="Change status" onclick="changeStatus()">


    </div>


    <div class="opdracht">

        <p>Friends:</p>

        <table id="table">

            <thead>
            <th>Name</th>
            <th>Status</th>
            <th>Chat</th>
            </thead>

            <tbody id="friends">


            <tr id="newFriend"></tr>


            </tbody>
        </table>


    </div>


    <div class="opdracht">

             <input type="text" name="emailFriend" id="emailInput">
            <input type="button" onclick="addFriend();" value="Add friend">
        <%--onclick="addFriend(); getFriend()" ?--%>



    </div>

    <div class="opdracht">

        <div id="chatbox">
           <%-- <button href="#" id="openchat">Chat</button>--%>
            <form id="chatForm">
                <input type="text" id="receiver" placeholder="Enter user to chat with">
                <input type="submit" id="chatButton" value="Chat">


            </form>


        </div>

        <%----%><div id="chatBox">
        <div id="divMessages"></div>
        </div>
       <%--<input id="userName" name="userName" type="text">
        <input id="openChat" name="openChat" type="button">--%>

    </div>

    <%--<div class="opdracht" id="chatpopup">--%>

      <%--  <div id="chatpopup" >

        <h1>Chat</h1>

            <label>Message</label>
            <textarea placeholder="Enter message..." name="message" id="message"></textarea>

            <button type="submit" class="sendButton" id="sendButton">Send message</button>
            <button type="button" class="closeButton" id="closeButton">Close</button>
        </div>--%>

    </div>
</main>

<jsp:include page="footer.jsp">
    <jsp:param name="title" value="Home"/>
</jsp:include>



<script src="js/1_onlinestatus.js"></script>
<script src="js/2_changestatus.js"></script>
<script src="js/3_getfriends.js"></script>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</body>
</html>
