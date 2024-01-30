
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



export default function Calendar() {
    const [monthSelected, setMonthSelected] = useState(false);
    const d = new Date();
    const CurrentYear = d.getFullYear();
    const CurrentMonth = d.getMonth();
    const CurrentDay = d.getDate();
    let i = 1;
    let cellStyle = "hover:bg-blue-100 hover hover:text-blue-500 active:border-blue-500 bg-slate-50 text-center p-2 border rounded-md w-24"
    function handleClick(){
        setMonthSelected(!monthSelected);
    }


    return (
        <div>
            <h1 className="text-lg font-medium p-2"><span className="font-bold">Annual View: </span>The Year of {CurrentYear} </h1>
            <div className="container w-full">
                <div className="columns-12" >
                    {
                    months.map(month =>  
                    <div key={month} className={cellStyle}
                        onClick={handleClick}>
                        <h1 className="font-semibold">
                            {i++}
                        </h1>
                        {monthSelected ? <div> hi </div> : null}
                    </div>)
                    }
                </div>
            </div>
        </div>
    );
}