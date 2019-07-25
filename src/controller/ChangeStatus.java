package controller;

import domain.Person;
import domain.PersonService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ChangeStatus extends AsyncRequestHandler {

    public String handleRequest(HttpServletRequest request, HttpServletResponse response) throws IOException {

        PersonService service = super.getPersonService();
        Person person =  (Person) request.getSession().getAttribute("user");
        String oudeStatus = person.getStatus();
        String nieuweStatus = request.getParameter("status").toUpperCase();
        person.setStatus(nieuweStatus);
        service.updatePersons(person);
        System.out.println("change " + oudeStatus +" to " + nieuweStatus);
        return nieuweStatus;

    }
}
