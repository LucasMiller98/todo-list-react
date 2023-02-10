import { FaEdit, FaWindowClose } from "react-icons/fa";
import { array, func } from 'prop-types'
import './Tasks.css'

export function Tasks({ tasks, handleEdit, handleDelete }) {
  return (
    <ul className='tasks'>
      { tasks.map((task, index) => (
        <li key={task}>
          {task}
          <span>
            <FaEdit
              className='edit'
              onClick={(event) => handleEdit(event, index)}
            />
            <FaWindowClose
              className='delete'
              onClick={(event) => handleDelete(event, index)}
            />
          </span>
        </li>
      )) }
    </ul>
  )
}

Tasks.propTypes = {
  handleEdit: func.isRequired,
  handleDelete: func.isRequired,
  tasks: array.isRequired
}
