import { useState } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux';

function UnderstandingForm() {
    const dispatch = useDispatch();
    const [number, setNum] = useState('');
    console.log('in feeling form');
    const handleSubmit = event => {
        event.preventDefault();
        dispatch({ type: 'ADD_UNDERSTANDING', payload: number })
    }

    return (
        <>
            <h2>How well are you understanding content?</h2>

            <section>
                <form onSubmit={handleSubmit}>
                    <input
                        type="number"
                        min={1} max={5}
                        required
                        value={number}
                        onChange={(event) => setNum(event.target.value)}
                    />
                    <button type="submit">submit</button>


                </form>
            </section>
        </>
    )
}
export default UnderstandingForm;