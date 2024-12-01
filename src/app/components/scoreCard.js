"use client"

import Image from "next/image";
import SolLogo from "../../../public/assets/solana-sol-logo 1.jpg"
import PigBank from "../../../public/assets/bank.png"
import Pi from "../../../public/assets/pi.svg"   
import Alpha from "../../../public/assets/alpha.svg"
import Sigma from "../../../public/assets/sigma.svg"
import Keys from "../../../public/assets/key.svg"
import Beta from "../../../public/assets/beta.svg"
import SolanaLines from "../../../public/assets/solana-svgrepo-com.svg"
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaCopy } from "react-icons/fa";
import { useState, useEffect } from "react";

const ScoreCard = () => {
    const [time, setTime] = useState(7200);
    const [activeSection, setActiveSection] = useState('purchase');
    const [activeNav, setActiveNav] = useState('round');

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => prevTime > 0 ? prevTime - 1 : 0);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const renderContent = () => {
        switch (activeSection) {
            case 'purchase':
                return (
                    <div className="h-[85%] w-[90%] rounded-md purpleGradient flex items-center flex-col">
                        <div className="font-bold text-2xl  w-[90%]">
                            <p className="m-5 ml-0 mb-3 title">Token Purchase</p>
                        </div>
                        <div className="w-full h-[5vh] flex justify-center items-center">
                            <div className="w-[90%] h-full bg-gray-700 rounded-md flex items-center p-2">
                                <input type="number" className="w-[90%] h-full p-4 bg-transparent focus:outline-none" placeholder="Amount" />
                                <p className="text- text-nowrap">0.005 SOL</p>
                            </div>
                        </div>
                        <div className="w-[90%] h-[8vh] flex gap-x-3 mt-3 items-center">
                            <button className="bg-gray-600/45 p-2 py-1 rounded-sm">1 Key</button>
                            <button className="bg-gray-600/45 p-2 py-1 rounded-sm">5 Keys</button>
                            <button className="bg-gray-600/45 p-2 py-1 rounded-sm">10 Keys</button>
                            <button className="bg-gray-600/45 p-2 py-1 rounded-sm">25 Keys</button>
                        </div>
                        <div className="w-[90%] justify-between mt-3 flex h-[5vh]">
                            <button className="px-2 text-[#1C022A] flex justify-center items-center gap-x-1 title rounded w-[49%] bg-[#E5B4FF]"> <Image className="h-[70%] w-auto" src={SolanaLines} alt="Solana Logo" />Send SOL</button>
                            <button className="px-2 text-[#1C022A] flex justify-center items-center gap-x-1 title rounded w-[49%] bg-[#E5B4FF]"> <Image className="h-[65%] w-auto" src={PigBank} alt="Solana Logo" />Use Vault</button>
                        </div>
                        <div className="font-bold text-2xl  w-[90%]">
                            <p className="m-4 ml-0 mb-3 title">Choose a Team</p>
                        </div>
                        <div className="w-[90%] flex justify-between h-[20vh]">
                            <div className="bg-black/45 rounded-md w-[22%] h-full flex flex-col items-center transition-all justify-center hover:bg-black/75">
                                <Image className="w-[90px] h-auto" src={Alpha} alt="Solana Logo" />
                                <p>Alpha Team</p>
                            </div>
                            <div className="bg-black/45 rounded-md w-[22%] h-full flex flex-col items-center transition-all justify-center hover:bg-black/75">
                                <Image className="w-[50px] my-5 h-auto" src={Sigma} alt="Solana Logo" />
                                <p>Sigma Team</p>
                            </div>
                            <div className="bg-black/45 rounded-md w-[22%] h-full flex  flex-col  items-center transition-all justify-center hover:bg-black/75">
                                <Image className="w-[50px] my-5 h-auto" src={Pi} alt="Solana Logo" />
                                <p>Pi Team</p>
                            </div>
                            <div className="bg-black/45 rounded-md w-[22%] h-full flex flex-col items-center transition-all justify-center hover:bg-black/75">
                                <Image className="w-[50px]  h-auto" src={Beta} alt="Solana Logo" />
                                <p>Beta team</p>
                            </div>
                        </div>
                    </div>
                );
            case 'vault':
                return (
                    <div className="h-[85%] w-[90%] rounded-md purpleGradient flex items-center flex-col">
                        <div className="font-bold text-2xl  w-[90%]">
                            <p className="m-5 ml-0 mb-3 title">Vault</p>
                        </div>
                        <div className="w-full h-[70vh] flex flex-col justify-evenly items-center">
                            <div className="w-[90%] rounded flex justify-between items-center h-[12vh] innerGradient">
                                <p className="text-xl ml-5 uppercase title">At Exit (Estimated)</p>
                                <div className="w-[50%] mr-5 h-full flex flex-col justify-center items-end">
                                    <p className="flex title  gap-x-2 text-xl">00.000 <Image className="w-fit h-[3.5vh]" src={SolLogo} alt="" /></p>
                                    
                                </div>
                            </div>
                            <div className="w-[90%] rounded flex justify-between items-center h-[12vh] innerGradient">
                                <p className="text-xl ml-5 title">DIVIDEND</p>
                                <div className="w-[50%] mr-5 h-full flex flex-col justify-center items-end">
                                    <p className="flex title  gap-x-2 text-xl">0.000 <Image className="w-fit h-[3.5vh]" src={SolLogo} alt="" /></p>
                                    
                                </div>
                            </div>
                            <div className="w-[90%] rounded flex justify-between items-center h-[12vh] innerGradient">
                                <p className="text-xl ml-5 title uppercase">Referrals</p>
                                <div className="w-[50%] mr-5 h-full flex flex-col justify-center items-end">
                                    <p className="flex title  gap-x-2 text-xl">00.0000 </p>
                                    
                                </div>
                            </div>
                            <div className="w-[90%] rounded flex justify-between items-center h-[12vh] innerGradient">
                                <p className="text-xl ml-5 title uppercase">TOTAL GAINS</p>
                                <div className="w-[50%] mr-5 h-full flex flex-col justify-center items-end">
                                    <p className="flex title  gap-x-2 text-xl">00.0000 </p>
                                </div>
                            </div>
                            <button className="w-[90%] rounded flex justify-center items-center  bg-[#E5B4FF] text-[#1C022A] h-[6vh]">
                                <p className="text-lg ml-5 title flex justify-center items-center uppercase"><BiMoneyWithdraw className="text-2xl"/>Withdraw Dividends</p>
                            </button>
                        </div>
                    </div>
                );
            case 'referrals':
                return (
                    <div className="h-[85%] w-[90%] rounded-md purpleGradient flex items-center flex-col">
                        <div className="font-bold text-2xl  w-[90%]">
                            <p className="m-5 ml-0 mb-3 title">Referrals</p>
                        </div>
                        <div className="h-[85%] flex justify-around items-center flex-col">
                          <p className="text-center mx-8 font-bold">Advise others to invest in this exit scam and we'll reward you 10% of everything they lose in SOL.</p>
                       
                        <div className="flex justify-center items-center flex-col">
                          <p className="text-xl font-semibold mb-2">Wallet Referral</p>
                          <p className="mb-2">BigWin3d.net</p>
                          <a href="#" className="w-[90%] rounded flex justify-center items-center gap-x-1 font-semibold bg-[#E5B4FF] text-[#1C022A] h-[6vh]">
                           <FaCopy/> Copy
                          </a>
                        </div>
                        <div className="flex justify-center items-center flex-col">
                          <p className="text-xl font-semibold mb-2">Anonymous Referral</p>
                          <p className="mb-2">BigWin3d.net</p>
                          <a href="#" className="w-[90%] rounded flex justify-center items-center gap-x-1 font-semibold bg-[#E5B4FF] text-[#1C022A] h-[6vh]">
                           <FaCopy/> Copy
                          </a>
                        </div>  
                        <div className="flex justify-center items-center flex-col">
                          <p className="text-xl font-semibold mb-2">Vanity Referral</p>
                          <p className="mb-2">BigWin3d.net</p>
                          <a href="#" className="w-[90%] rounded flex justify-center items-center gap-x-1 font-semibold bg-[#E5B4FF] text-[#1C022A] h-[6vh]">
                           <FaCopy/> Copy
                          </a>
                        </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    const renderNavContent = () => {
        switch (activeNav) {
            case 'round':
                return (
                    <div className="h-[85%] w-[90%] rounded-md purpleGradient">
                        <div className="w-full h-fit flex justify-center mt-3 flex-col items-center">
                            <p className="title mt-2 text-shadow-custom pink-glow text-5xl">Round X</p>
                            <p className="mt-2 my-5 font-bold">Time remaining</p>
                            <p className="text-5xl Digital flex justify-center text-shadow-custom pink-glow w-[30vw]">
                                {new Date(time * 1000).toISOString().substr(11, 8)}
                            </p>
                        </div>
                        <div className="w-full h-[50vh] flex flex-col justify-evenly items-center">
                            <div className="w-[90%] rounded flex justify-between items-center h-[12vh] innerGradient">
                                <p className="text-xl ml-5 uppercase title">Jackpot</p>
                                <div className="w-[50%] mr-5 h-full flex flex-col justify-center items-end">
                                    <p className="flex title  gap-x-2 text-xl">90.3651 <Image className="w-fit h-[3.5vh]" src={SolLogo} alt="" /></p>
                                    <p>0.83USD</p>
                                </div>
                            </div>
                            <div className="w-[90%] rounded flex justify-between items-center h-[12vh] innerGradient">
                                <p className="text-xl ml-5 title">YOUR KEYS</p>
                                <div className="w-[50%] mr-5 h-full flex flex-col justify-center items-end">
                                    <p className="flex title  gap-x-2 text-xl">0.000 <Image className="w-fit h-[3.5vh]" src={Keys} alt="" /></p>
                                    <p>0.000USD</p>
                                </div>
                            </div>
                            <div className="w-[90%] rounded flex justify-between items-center h-[12vh] innerGradient">
                                <p className="text-xl ml-5 title">YOUR EARNINGS</p>
                                <div className="w-[50%] mr-5 h-full flex flex-col justify-center items-end">
                                    <p className="flex title  gap-x-2 text-xl">00.0000 </p>
                                    <p>0.00USD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'stats':
                return (
                    <div className="h-[85%] w-[90%] rounded-md purpleGradient">
                        <div className="font-bold text-2xl mx-5 w-[90%]">
                            <p className="m-5 ml-0 mb-3 title">Team</p>
                        </div>
                        <div className="flex w-[95%]justify-center items-center gap-x-3">
                           <div className="bg-black/45 rounded-md w-[22%] h-full flex flex-col items-center transition-all justify-center hover:bg-black/75">
                                <Image className="w-[90px] h-auto" src={Alpha} alt="Solana Logo" />
                                <p>Alpha Team</p>
                            </div>
                            <div className="bg-black/45 rounded-md w-[22%] h-full flex flex-col items-center transition-all justify-center hover:bg-black/75">
                                <Image className="w-[90px] h-auto" src={Alpha} alt="Solana Logo" />
                                <p>Alpha Team</p>
                            </div>
                            <div className="bg-black/45 rounded-md w-[22%] h-full flex flex-col items-center transition-all justify-center hover:bg-black/75">
                                <Image className="w-[90px] h-auto" src={Alpha} alt="Solana Logo" />
                                <p>Alpha Team</p>
                            </div>
                            <div className="bg-black/45 rounded-md w-[22%] h-full flex flex-col items-center transition-all justify-center hover:bg-black/75">
                                <Image className="w-[90px] h-auto" src={Alpha} alt="Solana Logo" />
                                <p>Alpha Team</p>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="h-[95vh] rounded-md w-[95vw] backdrop-blur-lg flex">
            <div className="flex flex-col justify-evenly items-center w-[50%]">
                <div className="bg-[#1C022A] navlinks rounded-md flex items-center w-[90%] gap-x-4 py-6 h-[5vh]">
                    <button className={`ml-2 font-bold p-1.5 rounded-md ${activeSection === 'purchase' ? 'bg-[#E5B4FF] text-[#1C022A]' : 'bg-transparent text-white'}`} onClick={() => setActiveSection('purchase')}>Purchase</button>
                    <button className={`ml-2 font-bold p-1.5 px-6 rounded-md ${activeSection === 'vault' ? 'bg-[#E5B4FF] text-[#1C022A]' : 'bg-transparent text-white'}`} onClick={() => setActiveSection('vault')}>Vault</button>
                    <button className={`ml-2 font-bold p-1.5 rounded-md ${activeSection === 'referrals' ? 'bg-[#E5B4FF] text-[#1C022A]' : 'bg-transparent text-white'}`} onClick={() => setActiveSection('referrals')}>Referrals</button>
                </div>
                {renderContent()}
            </div>
            <div className="flex flex-col justify-evenly items-center w-[50%]">
                <div className="bg-[#1C022A] navlinks rounded-md flex items-center w-[90%] gap-x-4 py-6 h-[5vh]">
                    <button className={`ml-2 font-bold p-1.5 rounded-md ${activeNav === 'round' ? 'bg-[#E5B4FF] text-[#1C022A]' : 'bg-transparent text-white'}`} onClick={() => setActiveNav('round')}>Round</button>
                    <button className={`ml-2 font-bold p-1.5 rounded-md ${activeNav === 'stats' ? 'bg-[#E5B4FF] text-[#1C022A]' : 'bg-transparent text-white'}`} onClick={() => setActiveNav('stats')}>Team</button>
                </div>
                {renderNavContent()}
            </div>
        </div>
    )
}

export default ScoreCard