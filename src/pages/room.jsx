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
    <main className='contsiner'>
    <div className='room--container'>

    
    <div>
      {messages.map(message => (
        <div key={message.$id} className='messages--wrapper'>

          <div className='message--header'>
          <small className='message-timestamp'>{message.$createdAt}</small>
          </div> 

          <div className='message--body'>
            <span>{message.body}</span>
          </div>
        </div>
      ))}
    </div>
    </div>
    </main>
  )
  
}

export default Room