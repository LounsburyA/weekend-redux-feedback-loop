import { useState } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux';
function CommentForm() {
    const dispatch = useDispatch();
    //console.log('in comment form');

    const [comment, setComment] = useState('');
    const handleSubmit = event => {
        event.preventDefault();
        dispatch({ type: 'ADD_COMMENT', payload: comment })
    }


    return (
        <>
            <h2>Any comments you would like to leave?</h2>
            <section>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        size={75}
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