import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';



export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"> 
       <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Yuvrajsingh Chouhan
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Technologies
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 rounded text-base mt-4 md:mt-0">
          Hire Me
        
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
        <div className="flex items-center justify-center">  
          <a href="https://github.com/uvsingh2706" className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
         <GitHubIcon className=" inline-flex items-center justify-center ml-3 "/> 
         </a>
         <a href="https://www.linkedin.com/in/yuvrajsingh-chouhan-9a76b1202/" className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0"> 
          <LinkedInIcon className="inline-flex items-center justify-center ml-3"/> 
          </a>
         <a href="https://www.instagram.com/uvsingh_2706/"  className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
         <InstagramIcon className="inline-flex items-center justify-center ml-3"/>
         </a>
         <a href="https://twitter.com/uvsingh_"  className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
         <TwitterIcon  className="inline-flex items-center justify-center ml-3"/>
         </a>
         </div>
    
         {/* <a href="#_" class="px-10 py-4 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 md:w-auto">
Button Text
</a> */}
        
        
      </div>
    </header>
  );
}
