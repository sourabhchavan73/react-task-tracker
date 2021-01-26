import React, { useState } from 'react'

const Addtitle = ({ onAdd }) => {
    const [title, settitle] = useState('');
    const [day, setday] = useState('');
    const [reminder, setreminder] = useState(false);
    const [validate, setValidate] = useState(""); 

    const titleFromController = (e) => {
        e.preventDefault();

        if(!title){
            setValidate("Enter a Title")
            return;
        }

        onAdd({title, day, reminder});
        
        settitle('');
        setday('');
        setreminder(false);
    }

 
    return (
        <form className="add-form" onSubmit={titleFromController}>
            <div className="form-control">
                <label htmlFor="title">Add title</label>
                <input 
                    type="text" 
                    placeholder="Enter your title"
                    value={title} 
                    onChange={(e) => settitle(e.target.value)}/>
                    <span className="error">{validate}</span>
            </div>

            <div className="form-control">
                <label htmlFor="title">Add day</label>
                <input 
                    type="text" 
                    placeholder="Enter day" 
                    value={day}
                    onChange={(e)=> setday(e.target.value)} />
            </div>

            <div className="form-control form-control-check">
                <label htmlFor="title">Set Reminder</label>
                <input 
                    type="checkbox"
                    checked={reminder} 
                    value={reminder}
                    onChange={(e)=> setreminder(e.currentTarget.checked)}/>
            </div>

            <input type="submit" className="btn" style={{width: '100%'}} />
        </form>
       
    )
}

export default Addtitle
