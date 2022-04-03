import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom'

function CommentForm() {
//comment needs to be empty string 

    const dispatch = useDispatch();
    //console.log('in comment form');
    const history = useHistory();  
    const [comment, setComment] = useState('');// can set the comments from event target value
    
    const handleSubmit = event => {
        event.preventDefault();
        dispatch({ type: 'ADD_COMMENT', payload: comment })

        history.push('/review');// next  up review
    }


    return (
        <>
            <h2>Any comments you would like to leave?</h2>
            <section>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        size={75}  // increase text box size
                        required
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                    />
                    <button type="submit">submit</button>


                </form>
            </section>
        </>

    )
}
export default CommentForm;