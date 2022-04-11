import { useState, useEffect, useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Link, useNavigate} from "react-router-dom"
import { faWarning } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Test() {

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

export default Test
