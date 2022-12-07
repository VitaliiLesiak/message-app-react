
import { NavLink, Outlet } from 'react-router-dom'
import './messages.styles.css'
import axios from 'axios'
import { useEffect, useState } from 'react'


function Messages() {

    // json-server --watch data/messages.json --port 3004
    const URL = 'http://localhost:3004/message'
    let [data, setData] = useState([])
    useEffect(() => {
        axios.get(URL)
            .then(res => {
                const messages = res.data;
                setData(messages)
            })
    }, [])
    return (
        <div>
            <div className='block__message'>
                <ul className='ul'>
                    {
                        data.map((product) => {
                            return <li key={product.id}><NavLink className={({ isActive }) => (isActive ? "activeProduct" : "")} to={`/inbox/${product.id}`}>{product.titleName}</NavLink></li>
                        })
                    }
                </ul>
                <div className='widht'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Messages