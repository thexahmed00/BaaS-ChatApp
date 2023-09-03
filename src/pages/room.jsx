import React,{useState,useEffect} from 'react'
import { COLLECTION_ID, DATABASE_ID, databases } from '../AppwriteConfig'
import {ID} from 'appwrite'
import { Trash } from 'react-feather'

const Room = () => {

  //set the messages state
  const [messages, setMessages] = useState([]);
  const [messageBody, setMessageBody] = useState('');

  //get the messages from the database
  useEffect(() => {
    getmessages()
  }, []) 

  

  //post the message to the database
  const postMessage = async (e) => {
    e.preventDefault()
    let payload = {
      body:messageBody
    }
    //const message = e.target.message.value
    let response = await databases.createDocument(DATABASE_ID, COLLECTION_ID,ID.unique(), 
      payload)
    console.log("Response: ",response)
    
    setMessageBody('')
    getmessages()
  }

  //get the messages from the database
  const getmessages = async () => {
    const messages = await databases.listDocuments(DATABASE_ID, COLLECTION_ID)
  //  console.log("Response: ",messages)
    setMessages(messages.documents)
  }


  //delete the message
  const deleteMessage=async(message_id)=>{
    databases.deleteDocument(DATABASE_ID,COLLECTION_ID,message_id);
    setMessages(messages.filter(message=>message.$id!==message_id));
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
          <Trash className='delete-icon' onClick={()=>deleteMessage(message.$id)}/>
          {/* <button className='btn btn--secondary' onClick={()=>deleteMessage(message.$id)}>Delete</button> */}
          </div> 

          <div className='message--body'>
            <span>{message.body}</span>
          </div>
        </div>
      ))}
    </div>

    </div>
    <form onSubmit={postMessage} id='message--form'>
      <div>
        <textarea 
          required 
          maxLength="1000"
          placeholder='Type your message here...'
          onChange={(e) => setMessageBody(e.target.value)}
          value={messageBody}>
        </textarea>
      </div>

        <div className='send-btn--wrapper'>
          <input className="btn btn--secondary" type='submit' value={"Send"}></input>
        </div>

    </form>
    </main>
  )
  
}

export default Room