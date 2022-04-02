import { useState } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

function SupportForm() {

    const dispatch = useDispatch();

    const [number, setNum] = useState(0);
    const history = useHistory();  
    //console.log('in support form');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: 'ADD_SUPPORT', payload: number })

        history.push('/comments');
    }

    return (
        <>
            <h2>How well are you being supported?</h2>

            <section>
                <form onSubmit={handleSubmit}>
                    <input type="number"
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
export default SupportForm;