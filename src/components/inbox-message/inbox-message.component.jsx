
import { Outlet } from 'react-router-dom'
import './inbox-message.styles.css'

function InboxMessage() {
    return (
        <div className='dflex'>
            <Outlet />
        </div>
    )
}

export default InboxMessage