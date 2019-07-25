package controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import domain.Person;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

public class getFriends extends AsyncRequestHandler {
    @Override
    public String handleRequest(HttpServletRequest request, HttpServletResponse response) throws IOException {

        Person person = (Person) request.getSession().getAttribute("user");
        ArrayList<Person> friends = person.getFriends();
        //System.out.println("friends: " + friends);
        // json
        response.setContentType("application/json");
        //dankzij extra methode
        String jsonString =  toJSON(friends);
        //System.out.println("friends in json: " + jsonString);


/*
        for(int i = 0; i < friends.size(); i++){
            System.out.print("name: " + friends.get(i).getFirstName());
            System.out.print("status: " + friends.get(i).getStatus());
        }
*/


        return jsonString;
    }

    public String toJSON(ArrayList<Person> friends) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        return mapper.writeValueAsString(friends);
    }

}
