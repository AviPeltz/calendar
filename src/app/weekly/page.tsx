"use client"
import NavLinks from '../ui/dashboard/nav-link';

export default function Page() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center"> 
        <h1 className="text-5xl font-bold">Weekly Calendar</h1>
        <br />
        <NavLinks />
        {/*<DataPortal />*/}
        
      </div>
    </main>
  );
}