import { useState } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

function FeelingForm() {
    const dispatch = useDispatch();
    const [number, setNum] = useState('');
    const history = useHistory();  // moves to destination
    //console.log('in feeling form');
    const handleSubmit = event => {
        event.preventDefault();
        dispatch({ type: 'ADD_FEELING', payload: number })
        history.push('/understanding');// next stop understanding form
    }

    return (
        <>
            <h2>How are you feeling today?</h2>

            <section>
                <form onSubmit={handleSubmit}>
                    <input type="number"
                        min={1} max={5}  //sets min and max numbers that can submitted
                        required
                        value={number}
                        onChange={(event) => setNum(event.target.value)}
                    />
                    <button type="submit">Next</button>


                </form>
            </section>
        </>
    )
}
export default FeelingForm;