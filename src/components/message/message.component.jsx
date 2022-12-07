
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './message.styles.css'
import { useEffect, useState } from 'react'

function Message() {
  const params = useParams()
  const prodId = params.id
  const URL = `http://localhost:3004/message/${params.id}`
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get(URL)
      .then(res => {
        const messages = res.data;
        setData(messages)
      })
  }, [prodId])
  const { from, to, title, mess } = data
  return (
    <div className='message-form'>
      <div className="mess__about">
        <div className='from-message'>From: <a href="#">{from}</a></div>
        <div className='to-message'>To: {to}</div>
        <div className='subject-message'>Subject: {title}</div>
        <div className="text-message">{mess}</div>
      </div>
    </div>
  )
}

export default Message