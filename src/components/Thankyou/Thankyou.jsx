
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Thankyou() {

    const history = useHistory();
    const handleSubmit = (event) => {
        history.push('/')
    }

    return (
        <>

            <div>
                <h1>Thank You for your feedback</h1>
                <button onClick={handleSubmit} type="submit">Complete</button>

            </div>
        </>
    )
}

export default Thankyou;