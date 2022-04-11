import { useState } from 'react'

function UploadResource() {
    const [text, setText] = useState('')
    const [message, setMessage] = useState('')
    const [isError, setIsError] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    async function createResource(userData) {
        try {
            // await authService.login(userData)

            // // If success,ful put user in data
            // dispatch({
            //     type: 'LOGIN',
            //     payload: userData
            // })
        } catch (error) {
            // look for errors
            const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
            setMessage(message)
            setIsError(true)
        }
    }

    // Gets embed link fro ma video link to submit
    const getYoutubeEmbedLink = () => {

    }

    // Each section / topic for learning can have a code, and links are organized by that code, and requests are made 
    // to that topic's code too.
    
    const onSubmit = e => {
        e.preventDefault()

        // Can do this as async await call to contentService
        // dispatch(createGoal({text}))
    }
  return (
    <section className='form'>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">Goal</label>
                <input type="text" name='text' id='text' value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-group">
                <button className="btn btn-block" type='submit'>
                    Add goal
                </button>
            </div>
        </form>
    </section>
  )
}
export default UploadResource