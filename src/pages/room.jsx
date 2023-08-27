import React,{useState,useEffect} from 'react'
import { COLLECTION_ID, DATABASE_ID, databases } from '../AppwriteConfig'

const Room = () => {

  //set the messages state
  const [messages, setMessages] = useState([]);

  //get the messages from the database
  useEffect(() => {
    getmessages()
  }, []) 

  //get the messages from the database
  const getmessages = async () => {
    const messages = await databases.listDocuments(DATABASE_ID, COLLECTION_ID)
    console.log("Response: ",messages)
    setMessages(messages.documents)
  }
  return (
    //display the messages
    <div>
      {messages.map(message => (
        <div key={message.$id}>
          <div>{message.$createdAt}</div> //display the date

          <div>
            <span>{message.body}</span> //display the message
          </div>
        </div>
      ))}
    </div>
  )
  
}

export default Room