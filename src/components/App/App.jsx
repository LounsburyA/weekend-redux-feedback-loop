import React from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch } from 'react-redux'

import FeelingForm from '../FeelingForm/FeelingForm';
import CommentForm from '../CommentForm/CommentForm';
import SupportForm from '../SupportForm/SupportForm';
import FeedbackReview from '../FeedbackReview/FeedbackReview';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import Thankyou from '../Thankyou/Thankyou';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


function App() {

 
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <div>
          <Route path= '/' exact><FeelingForm/></Route>
          <Route path = '/comments'><CommentForm/></Route>
          <Route path = '/support'><SupportForm/></Route>
          <Route path = '/understanding'><UnderstandingForm/></Route>
          <Route path = '/review'><FeedbackReview/></Route>
          <Route path = '/thanks'><Thankyou/></Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
