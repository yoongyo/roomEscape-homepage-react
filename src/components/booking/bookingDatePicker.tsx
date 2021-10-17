import React, {useState, useEffect} from 'react';


const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토']


export const BookingDatePicker = () => {
    const [pickDate, setPickDate] = useState('');

    
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const theDate = today.getDate();
    const theDayofWeek = today.getDay();

    const dateList:any = [];

    for(var i=0; i<14; i++) {
        var resultDay = new Date(year, month, theDate + (i - theDayofWeek));
        var mm = Number(resultDay.getMonth()) + 1;
        var dd = resultDay.getDate();
        var day = WEEKDAY[resultDay.getDay()];
        
        const resultDate = String(mm) +'/'+ dd
        dateList.push({resultDate, day});
    }

    useEffect(() => {
        setPickDate(dateList[0].resultDate)
    }, [])

    
    return (
        <div className="bg-theme py-14">
        <div className="text-white flex flex-row max-w-2xl overflow-x-scroll mx-auto">
            {dateList.map((date:any) => (
                <button className="text-center p-5" onClick={() => setPickDate(date.resultDate)}>
                    {pickDate === date.resultDate ? (
                        <div className="text-booking">
                            <p>{date.day}</p>
                            <p>{date.resultDate}</p>
                        </div>
                    )
                     : (
                        <div>
                            <p>{date.day}</p>
                            <p>{date.resultDate}</p>
                        </div>
                     )}
                    
                </button>
            ))}
        </div>
        </div>
    )
}