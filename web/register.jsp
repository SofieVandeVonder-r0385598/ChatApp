<%--
  Created by IntelliJ IDEA.
  User: Sofie
  Date: 20/12/2018
  Time: 15:44
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <jsp:include page="head.jsp">
        <jsp:param name="title" value="Register" />
    </jsp:include>
</head>
<body>
<jsp:include page="header.jsp">
    <jsp:param name="title" value="Blog"/>
</jsp:include>

<main>

    <div class="opdracht">

        <p>Register new user:</p>

        <form action="Controller?action=AddNewUser" method="POST">

            <p>	<label>Firstname: </label>
                <input type="text" id="firstNameOfNewUser" name="firstNameOfNewUser">
            </p>
            <p>
                <label>Lastname: </label>
                <input type="text" id="lastNameOfNewUser" name="lastNameOfNewUser">
            </p>

            <p>
                <label>Email: </label>
                <input type="text" id="emailOfNewUser" name="emailOfNewUser">

            <p id="genderP">
                <label>Gender: </label>

                <%--

                            <input type="radio" name="gender" value="M"> M
                            <input type="radio" name="gender" value="F"> F
                --%>


                <select id="genderOfNewUser" name="genderOfNewUser">

                    <option value="M">M</option>
                    <option value="F">F</option>
                </select>

            </p>

            <p id="pw">
                <label>Password: </label>
                <input type="text" id="pwOfNewUser" name="pwOfNewUser">
            </p>
            <p>
                <label>Repeat password: </label>
                <input type="text" id="pw2OfNewUser" name="pw2OfNewUser">

            </p>

            <p>
                <label>Birth date: </label>

            <fieldset class="date">
                <select id="day" name="day">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>

                </select>

                <select id="month" name="month">
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>


                <select id="year" name="year">
                    <option  value="1995">1995</option>
                    <option  value="1996">1996</option>
                    <option  value="1997">1997</option>
                    <option  value="1998">1998</option>
                    <option  value="1999">1999</option>
                    <option  value="2000">2000</option>

                </select>
            </fieldset>
            </p>

            <p><input type="submit" value="Register" id="registerbutton"></p>

        </form>


    </div>



</main>
<jsp:include page="footer.jsp">
    <jsp:param name="title" value="Home" />
</jsp:include>
</body>
</html>
