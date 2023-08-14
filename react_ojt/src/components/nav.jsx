import React from "react";
import profile from "../images/react-logo.jpg";
import email from "../images/email.png";
import linkedin from "../images/linkedin(1).png";
import facebook from "../images/icon-facebook.svg"

export default function Nav() {
  return (
    <div className="font-Roboto flex flex-col items-center">
        <div className="max-w-md">
        <img src={profile} alt="" />
        <div className="bg-black h-fit pb-12 text-white">
            <div className="pt-5">
                <div className="text-xl">Aung Myo Myat</div>
                <div className="text-sm text-gray-400 mb-2">Frontend Developer</div>
                <span className="text-sm text-gray-400">GIC Myanmar</span>
            </div>

            {/* Button */}
            <div className="mt-6 flex justify-center">
                <div className="mr-2">
                <button className="bg-white text-black px-5 py-1 rounded-lg flex">
                    <img src={email} alt="" className="w-5 h-5 mr-2" />
                    <span>Email</span>
                </button>
                </div>
                
                <div>
                <button className="bg-blue-700 text-white px-5 py-1 rounded-lg flex">
                    <img src={linkedin} alt="" className="w-5 h-5 mr-2 bg-white" />
                    <span>LinkedIn</span>
                </button>
                </div>
            </div>

            {/* Paragraph */}
            <div className="flex flex-col text-left px-9 mt-10">
                <span className="text-2xl">About</span>
                <span className="text-gray-300">Lorem ipsum dolor sit amet cons adipisicing elit. Ducimus alias, molestias a voluptates id cum, vel dicta esse earum quia illo, cupiditate quidem </span>
            </div>

            <div className="flex flex-col text-left px-9 mt-10">
            <span className="text-2xl">Intrest</span>
                <span className="text-gray-300">Lorem ipsum dolor sit amet cons adipisicing elit. Ducimus alias, molestias a voluptates id cum, vel dicta esse earum quia illo, cupiditate quidem </span>
            </div>

            <div className="mt-8 flex justify-evenly">
                <img src={facebook} alt="" />
                <img src={facebook} alt="" />
                <img src={facebook} alt="" />
                <img src={facebook} alt="" /> 
                <img src={facebook} alt="" /> 
            </div>
        </div>
        </div>   
    </div>
  );
}
