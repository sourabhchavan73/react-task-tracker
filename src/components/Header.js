import React from 'react'
import Button from './Button'

const Header = ({onAdd, showBtn, taskLength}) => {


    return (
        <div className="header">
            <h1>Task Tracker</h1>
            <Button onClick={onAdd}  text = {showBtn ?  "Hide" : taskLength > 0 ? "Add More" : "Add Task"} color={showBtn ? '#000' : 'green'} />
        </div>
    )
}

export default Header
