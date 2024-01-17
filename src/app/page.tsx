"use client";
import Image from 'next/image'
import NavLinks from './ui/dashboard/nav-link'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center"> 
        <h1 className="text-5xl font-bold">Avi's Calendar <br /> Dashboard</h1>
        <NavLinks />
      </div>
    </main>
  )
}
