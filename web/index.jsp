<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<jsp:include page="head.jsp">
    <jsp:param name="title" value="Home"/>
</jsp:include>
<body onload="getStatus(); getFriends(); getStatisticsFunction();">
<jsp:include page="header.jsp">
    <jsp:param name="title" value="Home"/>
</jsp:include>
<main>


    <c:if test="${errors.size()>0 }">
        <div class="danger">
            <ul>
                <c:forEach var="error" items="${errors }">
                    <li>${error }</li>
                </c:forEach>
            </ul>
        </div>
    </c:if>


    <c:choose>
        <c:when test="${user!=null}">
            <p>Welcome ${user.getFirstName()}!</p>
            <form style="float: right" method="post" action="Controller?action=LogOut">
                <p>
                    <input type="submit" id="logoutbutton" value="Log Out">
                </p>
            </form>

            <div>
                <section class="opdracht">
                    <p>Your current status:</p>
                    <div id="currentStatus"></div>
                </section>

                <section class="opdracht">
                    <p>Online: </p>
                    <div id="onlineDIV">


                    </div>
                    <p>Offline: </p>
                    <div id="offlineDIV">


                    </div>
                </section>
            </div>

            <section class="opdracht">
                <p style="margin-bottom: 2%">Change your status:</p>

                <select id="selectedStatus">
                    <option value="null"></option>
                    <option value="Online">Online</option>
                    <option value="Busy">Busy</option>
                    <option value="Away">Away</option>
                    <option value="Offline">Offline</option>
                </select>
                <input type="button" id="changeSelectedStatus" value="Change status" onclick="changeSelectedStatus()">

                <input id="statusInput">
                <input type="button" id="changeStatusButton" value="Change status" onclick="changeStatus()">

            </section>


            <section class="opdracht">
                <p>Your friends:</p>

                <table>
                    <thead>
                    <tr>
                        <td style="font-weight:bold; color:mediumseagreen">Name</td>
                        <td style="font-weight:bold; color:mediumseagreen">Status</td>
                    </tr>
                    </thead>
                    <tbody id="friends"></tbody>
                </table>
            </section>

<section class="opdracht">


    <input type="text" name="emailFriend"  value="email of existing user" id="emailInput">
    <input type="button" onclick="addFriend();" value="Add friend">





</section>
        </c:when>


        <c:otherwise>
            <form method="post" action="Controller?action=LogIn">
                <p>
                    <label for="email">Your email </label>
                    <input type="text" id="email" name="email" value="jan@ucll.be">
                </p>
                <p>
                    <label for="password">Your password</label>
                    <input type="password" id="password" name="password" value="t">
                </p>
                <p>
                    <input type="submit" id="loginbutton" value="Log in">
                </p>
            </form>
        </c:otherwise>
    </c:choose>


</main>

<jsp:include page="footer.jsp">
    <jsp:param name="title" value="Home"/>
</jsp:include>

<script src="js/1_onlinestatus.js"></script>
<script src="js/2_changestatus.js"></script>
<script src="js/3_getfriends.js"></script>
<script src="js/4_addfriend.js"></script>
<script src="js/7_statistics.js"></script>
</body>
</html>