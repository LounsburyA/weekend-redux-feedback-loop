import React from 'react';
import { useSelector, useDispatch, useEffect } from 'react-redux';
import Axios from 'axios';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';






function FeedbackReview() {
    const history = useHistory();

    const comments = useSelector(state => state.commentReducer);
    const feeling = useSelector(state => state.feelingReducer);
    const support = useSelector(state => state.supportReducer);
    const understanding = useSelector(state => state.understandingReducer);

    const feedback = {
        feeling: feeling,
        comments: comments,
        support: support,
        understanding: understanding
    }

    const handleSubmit = (event) => {
        Axios.post('/feedback', feedback)

            .then(response => {
                history.push('/thanks')
            }).catch(error => {
                console.log('error in post', error);
            });
    }
    return (
        <>
            <div>
                <h1> Review Your Feedback</h1>
                <div> Feeling: {feeling}</div>
                <div> Understanding: {understanding}</div>
                <div>Support: {support}</div>
                <div> Comments: {comments}</div>
                <button type="submit" onClick={handleSubmit}>Submit</button>


            </div>
        </>


    )
}
export default FeedbackReview