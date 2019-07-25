package controller;

import domain.Person;
import domain.PersonService;
import jdk.nashorn.internal.parser.JSONParser;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

public class UserApp extends AsyncRequestHandler {
    @Override
    public String handleRequest(HttpServletRequest request, HttpServletResponse response) throws IOException {


        //   private usersURL = 'http://localhost:8080/Controller?action=UserApp';



    /*    String userID = "sofie@ucll.be";
        String firstName = "Sofie";
        String lastName = "VdV";
        String gender = "F";
        String age = "23";
        String users = "[" + "{\"" + "userID\": \"" + userID + "\", \"firstName\": \"" + firstName + "\", \"lastName\": \"" + lastName + "\", \"gender\":\"" + gender + "\"}" +"]";
        System.out.println(users);*/
        //System.out.println();


        response.setContentType("application/json");
        response.setHeader("Access-Control-Allow-Origin", "*");
        return makeJsonStringFromUsers();
    }


    public String makeJsonStringFromUsers() {

        PersonService service = getPersonService();

        List<Person> allPersons = service.getPersons();

        System.out.println(allPersons.size());

        String users = "[";

        for (int i = 0; i < allPersons.size(); i++) {

            String id = Integer.toString(i + 1);
            String userID = allPersons.get(i).getUserId();
            String firstName = allPersons.get(i).getFirstName();
            String lastName = allPersons.get(i).getLastName();
            // String gender = Character.toString(allPersons.get(i).getGender());
            //String age = Integer.toString(allPersons.get(i).getAge());


            if (i == allPersons.size() - 1) {

                users += "{\"" + "id\": \"" + id + "\", \"userID\": \"" + userID + "\", \"firstName\": \"" + firstName + "\", \"lastName\": \"" + lastName + "\"}" + "]";
            } else {


                //String users = "[" + "{\"" + "userID\": \"" + userID + "\", \"firstName\": \"" + firstName + "\", \"lastName\": \"" + lastName + "\", \"gender\":\"" + gender + "\"}" +"]";
                users += "{\"" + "id\": \"" + id + "\", \"userID\": \"" + userID + "\", \"firstName\": \"" + firstName + "\", \"lastName\": \"" + lastName + "\"},";

            }
        }
        System.out.println(users);
        return users;
    }
}
