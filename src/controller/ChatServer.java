package controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

@ServerEndpoint("/echoForChat")
public class ChatServer {

    private static final Set<Session> sessions = Collections.synchronizedSet(new HashSet<Session>());
    @OnOpen
    public void onOpen(Session session){
        sessions.add(session);
    }

    @OnMessage
    public void onMessage(String message, Session session){
        System.out.println("Message from " + session.getId() + ": " + message);
        sendMessageToAll(message);
    }

    @OnClose
    public void onClose(Session session){
        sessions.remove(session);
    }

    private void sendMessageToAll(String message){
        for(Session s : sessions){
            try {
                s.getBasicRemote().sendText(message);
            } catch (IOException ex) {
                ex.printStackTrace();
            }
        }
    }

}
