"use client";
import { useState, useEffect } from "react";
import { getUserByEmail } from "@/utils/database";
import { useAuth } from "@/context/authprovider"; 
import Consumo from "./components/Consumo";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState(null);
  const { user,  authReady } = useAuth(); 


  useEffect(() => {
    if (authReady && user) {
      const checkVerification = async () => {
        const userData = await getUserByEmail(user.email); 
        if (userData && userData.name) {
          setIsVerified(true);
        }
      };

      checkVerification();
    }
  }, [authReady, user]);


  return (
    <main
      className="flex flex-col items-center justify-center"
      style={{
        minHeight: "100vh",
        paddingTop: "16px",
        '@media (minWidth: 768px)': {
          paddingTop: "32px",
        },
        '@media (minWidth: 1024px)': {
          paddingTop: "48px",
        },
        '@media (minWidth: 1440px)': {
          paddingTop: "64px",
        },
        '@media (minWidth: 1600px)': {
          paddingTop: "80px",
        },
      }}
    >

      <div className="flex justify-center space-x-4 mb-8">
    
      </div>

     

     

      <Consumo />
    </main>
  );
}
