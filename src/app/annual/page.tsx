
"use client"
import { useState } from 'react';

const months = ["January", "February", "March", "April",
                 "May", "June", "July", "August", "September",
                  "October", "November", "December"];
const monthItems = [{
    id: 1,
    name: "January",
    isSelected: false,
    tasks: null,

},
{
    id: 2,
    name: "February",
    isSelected: false,
    tasks: null,
},
{
    id: 3,
    name: "March",
    isSelected: false,
    tasks: null,
},
{
    id: 4,
    name: "April",
    isSelected: false,
    tasks: null,
},
{
    id: 5,
    name:"May",
    isSelected: false,

},
{
    id: 5,
    name: "June",
    isSelected: false,
    tasks: null,
},
{
    id: 6,
    name: "June", 
    isSelected: false,
    tasks: null,
},
{
    id: 7,
    name: "July", 
    isSelected: false,
    tasks: null,
},
{
    id: 8,
    name: "August",
    isSelected: false,
    tasks: null,
},
{
    id: 9,
    name: "September",
    isSelected: false,
    tasks: null,
},
 {
    id: 10,
    name: "October",
    isSelected: false,
    tasks: null,
},
{
    id: 11,
    name: "November", 
    isSelected: false,
    tasks: null,
},
{
    id: 12,
    name: "December",
    isSelected: false,
    tasks: null,
}];

function Month(){
    
}


export default function Calendar() {
    const [months, setMonths] = useState(monthItems);
    const d = new Date();
    const CurrentYear = d.getFullYear();
    const CurrentMonth = d.getMonth();
    const CurrentDay = d.getDate();
    let cellStyle = "hover:bg-blue-100 hover hover:text-blue-500 active:border-blue-500 bg-slate-50 text-center p-2 border rounded-md";
    
    function handleMonthClick(e){
        const newMonth = {
            id: e.target.id,
            name: e.target.name,
            isSelected: !e.target.isSelected,
            tasks: e.target.tasks
        };
        setMonths([
            ...months,
            months[e.target.id] = newMonth
        ]); 
    }
    function dropdown(name, selected){
        if(selected){
            return (
                <div>
                    <h1>Tasks for {name}</h1>
                    <ul>
                        <li>Task 1</li>
                        <li>Task 2</li>
                        <li>Task 3</li>
                    </ul>
                </div>
            )
        }
        else{
            return null;
        }
    }


    return (
        <div>
            <h1 className="text-lg font-medium p-2">
                <span className="font-bold">Annual View: </span>The Year of {CurrentYear} 
            </h1>
            <div className="container w-full">
                <div>
                    {
                    months.map(month =>  
                    <div key={month.id} className={cellStyle}
                        onClick={handleMonthClick}>
                        <h1 className="font-semibold">
                            {month.name}
                        </h1>
                        {dropdown(month.name, month.isSelected)}
                    </div>)
                    }
                </div>
            </div>
        </div>
    );
}