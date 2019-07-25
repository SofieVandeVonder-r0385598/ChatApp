package controller;

import domain.Person;
import domain.PersonService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

public class AddFriend extends AsyncRequestHandler {
    @Override
    public String handleRequest(HttpServletRequest request, HttpServletResponse response) throws IOException {

        String emailFriendToAdd = request.getParameter("friend");
        System.out.println("email input: "+emailFriendToAdd);

        // session to find out who wants to add a friend
        HttpSession session = request.getSession();
        Person currentUser = (Person) session.getAttribute("user");
        System.out.println("current user: " +currentUser.getFirstName());

        // see if person to add exists
        PersonService service = getPersonService();

        for (Person p : service.getPersons()) {
            if (p.getUserId().equals(emailFriendToAdd)) { // person found

                System.out.println(currentUser.getFriends().size());
                // they need to add each other
                p.addFriend(currentUser);
                currentUser.addFriend(p);
                System.out.println(currentUser.getFriends().size());
            }
        }

        return emailFriendToAdd;
    }
}
