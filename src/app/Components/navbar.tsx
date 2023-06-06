import React from "react";
import Image from "next/image";
import { Contact } from "lucide-react";
import Link from "next/link";
import Home from "../page";

const Navbar=()=> {
    return (<div> <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <div className="flex">
      <Image src={require('../Components/Picture/Piaic.png')} alt="" width={50} height={50} loading="lazy"className="w-[600px]h-[600px] ml-5 rounded-full"/>
      
      </div>
      
        <span className="ml-3 text-xl">Piaic UMT LAHORE</span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <Link href={"Contact"} className="mr-5 hover:text-gray-900">Contact</Link >
        <Link href= {"Home"}className="mr-5 hover:text-gray-900">Home</Link >
        <Link href= {"Project"} className="mr-5 hover:text-gray-900">Project</Link >
        <Link href={"Email"} className="mr-5 hover:text-gray-900">Email</Link >
      </nav>
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
        <svg fill="none"
         stroke="currentColor" 
         strokeLinecap="round" 
         strokeLinejoin="round" 
         strokeWidth="2" 
         className="w-4 h-4 ml-1"

         viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
          
                  </svg>
      </button>
      
    </div>
    
  </header>
  
    
   </div>)
  

}
export default Navbar

//<Image src={require('../Components/Picture/asif-300x300.jpg')} alt="" width={350} height={350} loading="lazy"className="w-[600px]h-[600px] ml-5 rounded-full"/>
  