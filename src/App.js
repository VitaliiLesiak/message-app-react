import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InboxMessage from './components/inbox-message/inbox-message.component';
import AboutMessage from './components/about-message/about-message.component';
import NavMessage from './components/nav-message/nav-message.component';
import Messages from './components/messages/messages.component';
import Message from './components/message/message.component'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavMessage />
        <div>
          <div className='container'>
            <Routes>
              <Route exact path='/' element={<AboutMessage />} />
              <Route path='/inbox' element={<InboxMessage />} >
                <Route index element={<Messages />} />
                <Route element={<Messages />} >
                  <Route path=':id' element={<Message />} />
                </Route>
              </Route>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
