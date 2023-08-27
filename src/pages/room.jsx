import React,{useState,useEffect} from 'react'
import { COLLECTION_ID, DATABASE_ID, databases } from '../AppwriteConfig'

const Room = () => {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getmessages()
  }, []) 

  const getmessages = async () => {
    const messages = await databases.listDocuments(DATABASE_ID, COLLECTION_ID)
    console.log("Response: ",messages)
    setMessages(messages.documents)
  }
  return (
    <div>
      {messages.map(message => (
        <div key={message.$id}>
          
          <div>{message.$createdAt}</div>

          <div>
            <span>{message.body}</span>
          </div>
        </div>
      ))}
    </div>
  )
  
}

export default Room