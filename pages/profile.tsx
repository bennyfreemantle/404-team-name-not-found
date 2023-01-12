import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState } from "react";

export default function Profile() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const session = useSession();

  

  return (
    <div className="bg-slate-800">
      <div className="flex flex-col container mx-auto my-0 p-3">
        <Head>
          <title>CineMate</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
      </div>      
      <div className="flex flex-col min-h-screen container mx-auto my-0 p-3">
        <main className="flex gap-4 flex-1 flex-col text-amber-50">
          <div>
            <h1 className="text-2xl font-bold">Profile settings</h1>
            <p>Change your account settings here</p>
          </div>
        <div className="flex justify-center md:justify-start">
          <Image alt="profile pic placeholder" src='./person.svg' width={50} height={50}/>
        </div>
        <form className="flex flex-col gap-4 md:w-1/2">
          <div className="flex flex-col md:flex-row md:justify-between">
            <label>Your name:</label>
            <input className="w-2/3" type="text" value={name} onChange={(e) => 
              setName(e.target.value)}>
            </input>
          </div>  
          <div className="flex flex-col md:flex-row md:justify-between">
            <label>Your Username:</label>
            <input className="w-2/3" type="text" value={username} onChange={(e) => 
              setUsername(e.target.value)}>
            </input>
          </div>  
          <div className="flex flex-col md:flex-row md:justify-between">
            <label>Your Email:</label>
            <input className="w-2/3" type="email" value={email} onChange={(e) => 
              setEmail(e.target.value)}>
            </input>
          </div> 
          <div className="flex flex-col md:flex-row md:justify-between">
            <label>Your Password:</label>
            <input className="w-2/3" type="password" value={password} onChange={(e) => 
              setPassword(e.target.value)}>
            </input>
          </div>
          <button className="rounded-xl bg-red-400 text-amber-50 p-1 text-lg md:w-32">Save</button>
        </form>  
            
        </main>
        <Footer />
      </div>
    </div>
  );
}