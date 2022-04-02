
import { useState } from 'react';
import { useHistory } from 'react-router-dom'

const history = useHistory(); 

function Thankyou(){
    console.log('in thankyou');
   
    history.push('/feeling');
    return(
<>
<h1>Thankyou for your feedback</h1>
<button onClick = {Thankyou}>Complete</button>

</>
    )
}
export default Thankyou;