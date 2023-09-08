import React, { useState, useEffect } from "react";
import client, {
  COLLECTION_ID,
  DATABASE_ID,
  databases,
} from "../AppwriteConfig";
import { ID } from "appwrite";
import { Trash } from "react-feather";

const Room = () => {
  //set the messages state
  const [messages, setMessages] = useState([]);
  const [messageBody, setMessageBody] = useState("");

  //get the messages from the database
  useEffect(() => {
    getmessages();

    const unsubscribe = client.subscribe(
      `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`,
      response => {
      //  console.log("RealTime message:", response);
        if (
          response.events.includes(
            "databases.*.collections.*.documents.*.create"
          )
        ) {
          console.log("RealTime message created:", response);
         setMessages(prevState => [...prevState, response.payload]);
        }

        if (
          response.events.includes(
            "databases.*.collections.*.documents.*.delete"
          )
        ) {
          console.log("RealTime message deleted:", response);
          setMessages(prevState =>
            prevState.filter(message => message.$id !== response.payload.$id)
          );
        }
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  //post the message to the database
  const postMessage = async (e) => {
    e.preventDefault();
    const payload = {
      body: messageBody,
    };
    //const message = e.target.message.value
    const response = await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      ID.unique(),
      payload
    );
    console.log("messagePosted: ", response);
    //setMessages(prevState=>[...prevState,response])
    setMessageBody("");
    // getmessages()
  };

  //get the messages from the database
  const getmessages = async () => {
    const messages = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
    console.log("getMessage: ", messages);
    setMessages(messages.documents);
  };

  //delete the message
  const deleteMessage = async (message_id) => {
    await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, message_id);
    // setMessages(messages.filter(message=>message.$id!==message_id));
    console.log("Delete: ", message_id);
  };

  function formatTimestamp(timestamp) {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(timestamp).toLocaleDateString("en-US", options);
  }

  return (
    //display the messages
    <main className="contsiner">
      <div className="room--container">
        <div>
          {messages.map((message) => (
            <div key={message.$id} className="messages--wrapper">
              <div className="message--header">
                <small className="message-timestamp">
                  {" "}
                  {formatTimestamp(message.$createdAt)}
                </small>
                <Trash
                  className="delete-icon"
                  onClick={() => deleteMessage(message.$id)}
                />
                {/* <button className='btn btn--secondary' onClick={()=>deleteMessage(message.$id)}>Delete</button> */}
              </div>

              <div className="message--body">
                <span>{message.body}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={postMessage} id="message--form">
        <div>
          <textarea
            required
            maxLength="1000"
            placeholder="Type your message here..."
            onChange={(e) => setMessageBody(e.target.value)}
            value={messageBody}
          ></textarea>
        </div>

        <div className="send-btn--wrapper">
          <input
            className="btn btn--secondary"
            type="submit"
            value={"Send"}
          ></input>
        </div>
      </form>
    </main>
  );
};

export default Room;
