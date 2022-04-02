import {useState} from 'react';
import axios from 'axios'

function CommentForm () {

    console.log('in comment form');
    return(
<>
<h2>Any comments you would like to leave?</h2>
<label htmlFor="comments">Comments</label>

<textarea id="comments" name="comments"
          rows="5" cols="33">
Here is some place holder text and stuff.
</textarea>

</>

    )
}
export default CommentForm;