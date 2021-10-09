import React, {useState} from 'react';
import TimePicker from '@mui/lab/TimePicker';
import TextField from '@mui/material/TextField';



export const CreateTheme = () => {
    const [bookingTime, setBookingTime] = useState([]);
    
    return (
        
        <div className="h-80 w-full bg-white">
            <div className="flex flex-row">
                <p>테마 이름</p>
                <input/>
            </div>
            <div className="flex flex-row">
                <p>난이도</p>
                <input/>
            </div>
            <div className="flex flex-row">
                <p>장르</p>
                <input/>
            </div>
            <div>
            <TimePicker
                label="Time"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
            />
            </div>
        
        </div>
    )
}