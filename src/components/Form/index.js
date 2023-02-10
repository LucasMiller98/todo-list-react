import React from "react";
import { FaPlus } from "react-icons/fa";
import './Form.css';
import { string, func } from 'prop-types'

export function Form({ handleSubmit, handleChange, newTask }) {

  return(
    <form onSubmit={handleSubmit} className='form'>
      <input
        onChange={handleChange}
        type="text"
        value={newTask}
      />
      <button type='submit'>
        <FaPlus />
      </button>
    </form>
  )
}

Form.propTypes = {
  handleChange: func.isRequired,
  handleSubmit: func.isRequired,
  newTask: string.isRequired
}
