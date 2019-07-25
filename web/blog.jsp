<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<jsp:include page="head.jsp">
    <jsp:param name="title" value="Blog page"/>
</jsp:include>
<body onload="openSocket()">
<jsp:include page="header.jsp">
    <jsp:param name="title" value="Blog"/>
</jsp:include>

<div class="blog">
    <h5>Post 1</h5>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
        sociis
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>

    <div id="post1"></div>


    <p>Email: </p>
    <p><input type="text" id="user1"></p>
    <p>Comment:</p>
    <p><input type="text" id="comment1"></p>
    <p>Rating:
    <p><input type="number" id="rating1"></p>


    <p><input type="button" id="blog1Button" value="Post your comment" onclick="addCommentForBlogNumber(1)"></p>
</div>

<div class="blog">
    <h5>Post 2</h5>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.</p>

    <div id="post2"></div>


    <p>Email: </p>
    <p><input type="text" id="user2"></p>
    <p>Comment:</p>
    <p><input type="text" id="comment2"></p>
    <p>Rating:
    <p><input type="number" id="rating2"></p>
    <p><input type="button" id="blog2Button" value="Post your comment" onclick="addCommentForBlogNumber(2)"></p>


</div>

<div class="blog">
    <h5>Post 3</h5>
    <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
        venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>

    <div id="post3"></div>


    <p>Email: </p>
    <p><input type="text" id="user3"></p>
    <p>Comment:</p>
    <p><input type="text" id="comment3"></p>
    <p>Rating:
    <p><input type="number" id="rating3"></p>
    <p><input type="button" id="blog3Button" value="Post your comment" onclick="addCommentForBlogNumber(3)"></p>

</div>

<div class="blog">
    <h5>Post 4</h5>
    <p>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
        consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>


    <div id="post4"></div>


    <p>Email: </p>
    <p><input type="text" id="user4"></p>
    <p>Comment:</p>
    <p><input type="text" id="comment4"></p>
    <p>Rating:
    <p><input type="number" id="rating4"></p>
    <p><input type="button" id="blog4Button" value="Post your comment" onclick="addCommentForBlogNumber(4)"></p>

</div>

<div class="blog">
    <h5>Post 5</h5>
    <p>Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies
        nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.</p>

    <div id="post5"></div>

    <p>Email: </p>
    <p><input type="text" id="user5"></p>
    <p>Comment:</p>
    <p><input type="text" id="comment5"></p>
    <p>Rating:
    <p><input type="number" id="rating5"></p>
    <p><input type="button" id="blog5Button" value="Post your comment" onclick="addCommentForBlogNumber(5)"></p>

</div>
<jsp:include page="footer.jsp">
    <jsp:param name="title" value="Home"/>
</jsp:include>

<script src="js/PostComment.js"></script>
</body>
</html>
