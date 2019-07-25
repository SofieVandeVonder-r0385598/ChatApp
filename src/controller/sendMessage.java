package controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import domain.Person;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

public class sendMessage extends AsyncRequestHandler {
    @Override
    public String handleRequest(HttpServletRequest request, HttpServletResponse response) throws IOException {

        Person currentUser= (Person) request.getSession().getAttribute("user");
        System.out.println(currentUser.getFirstName());

        String message = request.getParameter("message");
        response.setContentType("text/plain");
        return messageToJson(message);
    }

    private String messageToJson(String message) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        return mapper.writeValueAsString(message);
    }
}
