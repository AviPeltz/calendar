
"use client"
import { useState } from 'react';
import NavLinks from '../ui/dashboard/nav-link';

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

/**
 * 
 * 
 * 
 */



export default function Calendar() {
    const [months, setMonths] = useState(monthItems);
    const d = new Date();
    const CurrentYear = d.getFullYear();
    const CurrentMonth = d.getMonth();
    const CurrentDay = d.getDate();
    let cellStyle = "hover:bg-blue-100 hover hover:text-blue-500 active:border-blue-500 bg-slate-50 text-center p-2 border rounded-md";


    return(
        <div className="flex flex-col min-h-screen w-full">
            <header className="flex h-16 items-center justify-center border-b px-4  md:px-6">
                <NavLinks />
            </header>
            <main>
                <div>
                    <h1 className="text-xl font-medium p-2">
                        <span className="font-bold">Annual View: </span>The Year of {CurrentYear} 
                    </h1>
                </div>
                <div className='grid lg:grid-cols-10 md:grid-cols-8 sm:grid-cols-5 gap-2 m-1 border rounded p-2'>
                    {monthItems.map(month => (
                      <div key={month.id} className="border rounded min-w-fit">
                        <h2 className="justify-center text-bold mx-4">{month.name}</h2>
                      </div>  
                    ))}
                </div>
            </main>
        </div>
    );
}