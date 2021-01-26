import { FaTimes  } from 'react-icons/fa';


const Task = ({task,  onDelete, onDoubleClick}) => {
    return (
        <div className={`taskContainer ${task.reminder ? "reminderActive" : ""}`} onDoubleClick={() => onDoubleClick(task.id)}>
            <h3 className="task-title">
                {`${task.id}. `} 
                {task.title} <FaTimes onClick = {() => onDelete(task.id)} style={{color: "red", cursor: "pointer"}} />
            </h3>  

            <p>{task.day}</p>
        </div>
    )
}

export default Task
