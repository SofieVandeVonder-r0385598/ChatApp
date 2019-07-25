package domain;

public class Message {

   private Person sender;
   private Person receiver;
  private  String message;

    public Message(Person sender, Person receiver, String message) {
       setSender(sender);
       setReceiver(receiver);
       setMessage(message);
    }

    public Person getSender() {
        return sender;
    }

    public void setSender(Person sender) {
        this.sender = sender;
    }

    public Person getReceiver() {
        return receiver;
    }

    public void setReceiver(Person receiver) {
        this.receiver = receiver;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }


}
