"use client"
import MainPage from "./home/page";
import Image from "next/image";
import SolCoin from "../../public/assets/solana-sol-logo 1.jpg"
import ScoreCard from "./components/scoreCard";
import { useState, useEffect } from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Home() {
  const [time, setTime] = useState(7200);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => prevTime > 0 ? prevTime - 1 : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <QueryClientProvider client={queryClient}>

    <div className="w-full h-screen relative">
      <MainPage>
        <div className="h-screen w-full flex justify-center items-center">
          <div className="w-fit backdrop-blur-md bg-black/50 gap-y-2 p-10 h-fit rounded flex flex-col justify-center items-center">
            <p className="text-5xl BoldGilroy text-shadow-custom">EXIT SCAMMING</p>
            <div className="flex justify-center items-center gap-x-3">
              <p className="text-6xl solanaAmount BoldGilroy text-shadow-custom pink-glow">90.3651</p>
              <Image className="w-[50px] h-auto" src={SolCoin} alt="Solana Logo" />
            </div>
            <p className="italic Gilroy">+Pre-Seed: 680.0863</p>
            <p>Total: 770.340</p>
            <p className="text-5xl Digital flex justify-center text-shadow-custom pink-glow w-[30vw]">
              {new Date(time * 1000).toISOString().substr(11, 8)}
            </p>
            <button className="w-full bg-[#9BDBFF] Gilroy text-black font-bold py-2 px-4 rounded">
              One More Key?
            </button>
          </div>
        </div>
        <div className="h-screen w-full flex justify-center items-center">
          <ScoreCard/>
        </div>
      </MainPage>
    </div>
    </QueryClientProvider>
  );
}
