import Task from './Task'

const Tasks = ({tasks, onDelete, onDoubleClick}) => {
    return (
        <div className="tasksContainer">
            {tasks.map((task)=> (
                <div key={task.id}>
                    <Task task={task}  onDelete = {onDelete} onDoubleClick = {onDoubleClick} />
                </div>
            ))}
        </div>
    )
}

export default Tasks
