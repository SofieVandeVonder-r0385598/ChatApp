package controller;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/Controller2")
public class RepositoryToJSonController extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public RepositoryToJSonController(){

    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        processRequest(request, response);
    }

    private void processRequest(HttpServletRequest request, HttpServletResponse response) throws IOException {

        String users= "[" + "{ \"userId\": 1, \"firstName\": \"Sofie, \"lastName\":\"vdv\"}"+ "]";


        response.setContentType("application/json");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.getWriter().write(users);




    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        processRequest(request, response);
    }
}
