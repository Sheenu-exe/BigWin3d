'use client'
import { client } from '@/client';
import { useState, useEffect } from 'react'
import { ConnectButton } from "thirdweb/react";



const Header = () => {
    const [time, setTime] = useState(7200)

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => prevTime > 0 ? prevTime - 1 : 0)
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
      
                <header className="w-full bg-opacity-50 bg-black text-white h-[10vh] p-4 flex justify-between items-center">
                    <h1 className="text-3xl w-[30vw]">BigWin3D</h1>
                    <div className="flex w-[30vw] gap-4 justify-end items-center">
                        <a className="btn bg-pink-700 rounded px-3 py-1 flex justify-center items-center" href="Home">
                            Tutorial
                        </a>
                        <a href="Community">Community</a>
                        <a href="Community">Wiki3D</a>                                    
                        <ConnectButton client={client} />
                    </div>
                </header>
           
    )
}

export default Header