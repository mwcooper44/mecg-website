"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail } from "lucide-react"
import PageHeader from "@/components/page-header"

// Team Data
const teamMembers = {
  eboard: [
    {
      name: "Jules Hwang",
      role: "President",
      image: "/images/headshots/Board/JulesH.png",
      linkedin: "www.linkedin.com/in/juliannehwang",
      email: "julhwang@umich.edu",
    },
    {
      name: "Kyle Cornell",
      role: "Vice President",
      image: "/images/headshots/Board/KyleC.jpeg",
      linkedin: "https://www.linkedin.com/in/kylecornell04",
      email: "kylcorn@umich.edu",
    },
    {
      name: "Katie Slazinski",
      role: "Director of Professional Development",
      image: "/images/headshots/Board/KatieS.jpeg",
      linkedin: " www.linkedin.com/in/katherine-slazinski-96b902270",
      email: "kslaz@umich.edu",
    },

    {
      name: "Maxwell Cooper",
      role: "Director of Technical Consulting",
      image: "/images/headshots/Board/MaxwellC.jpg",
      linkedin: "https://www.linkedin.com/in/cooper-maxwell",
      email: "mwcooper@umich.edu",
    },

    {
      name: "Michael Young",
      role: "Director of Consulting",
      image: "/images/headshots/Board/MichaelY.jpg",
      linkedin: "http://www.linkedin.com/in/youngim",
      email: "youngim@umich.edu",
    },

    {
      name: "Sydney Silva",
      role: "Director of Operations",
      image: "/images/headshots/Board/SydneyS.avif",
      linkedin: "https://www.linkedin.com/in/sydney-silva-145405246/",
      email: "sydsilva@umich.edu",
    },
    {
      name: "James Oosterhouse",
      role: "Director of Finance",
      image: "/images/headshots/Board/JamesO.avif",
      linkedin: "https://www.linkedin.com/in/james-oosterhouse ",
      email: "jamesoo@umich.edu",
    },
    {
      name: "David Ebosele",
      role: "Director of Membership",
      image: "/images/headshots/Board/DavidE.avif",
      linkedin: "https://www.linkedin.com/in/david-ebosele-3813aa261/",
      email: "debosele@umich.edu",
    },
    {
      name: "Annie Callam",
      role: "Marketing Chair",
      image: "/images/headshots/Board/AnnieC.jpeg",
      linkedin: "https://www.linkedin.com/in/annie-callam-413bb5274/",
      email: "aicallam@umich.edu",
    },
    {
      name: "Daniella Ranario",
      role: "DEI Chair",
      image: "/images/headshots/Board/DaniellaR.png",
      linkedin: "https://www.linkedin.com/in/daniella-ranario/",
      email: "dranario@umich.edu",
    },
    {
      name: "Abigail Osterhart",
      role: "Social Chair",
      image: "/images/headshots/Board/AbigailO.jpg",
      linkedin: "https://www.linkedin.com/in/abigailosterhart/",
      email: "aoste@umich.edu",
    },
    

  ],
  projectManagers: [
    {
      name: "Blake Stark",
      role: "Project Manager",
      image: "/images/headshots/PM/BlakeS.jpg",
      linkedin: "https://www.linkedin.com/in/blakeastark",
      email: "starkb@umich.edu",
    },
    {
      name: "Caden Fedderson",
      role: "Project Manager",
      image: "/images/headshots/PM/CadenF.jpeg",
      linkedin: "https://www.linkedin.com/in/caden-feddersen/",
      email: "cfedd@umich.edu",
    },
    {
      name: "Ethan Showich",
      role: "Project Manager",
      image: "/images/headshots/PM/EthanS.jpeg",
      linkedin: "www.linkedin.com/in/ethan-showich",
      email: "eshowich@umich.edu",
    },
    {
      name: "Eve Dragiewicz",
      role: "Project Manager",
      image: "/images/headshots/PM/EveD.jpg",
      linkedin: "www.linkedin.com/in/eve-dragiewicz-684942327",
      email: "evedrag@umich.edu",
    },
    {
      name: "Iman Ahmed",
      role: "Project Manager",
      image: "/images/headshots/PM/ImanA.jpeg",
      linkedin: "https://www.linkedin.com/in/imanahmed07/",
      email: "imanahm@umich.edu",
    },
    {
      name: "Jacob Hanks",
      role: "Project Manager",
      image: "/images/headshots/PM/JacobH.png",
      linkedin: "www.linkedin.com/in/jacobchanks",
      email: "jclhanks@umich.edu",
    },
    {
      name: "Jude Adwarka",
      role: "Project Manager",
      image: "/images/headshots/PM/JudeA.JPG",
      linkedin: "https://www.linkedin.com/in/jude-adarkwa",
      email: "jadarkwa@umich.edu",
    }
  ],
  assistantProjectManagers: [
    {
      name: "Anna Czech",
      role: "Assistant Project Manager",
      image: "/images/headshots/BAL/AnnaC.jpg",
      linkedin: " https://www.linkedin.com/in/anna-czech-738463320/ ",
      email: "arczech@umich.edu",
    },
    {
      name: "David Jing",
      role: "Assistant Project Manager",
      image: "/images/headshots/BAL/DavidJ.jpeg",
      linkedin: "https://www.linkedin.com/in/davidsjing/",
      email: "dsjing@umich.edu",
    },
    {
      name: "Emily Kim",
      role: "Assistant Project Manager",
      image: "/images/headshots/BAL/EmilyK.jpeg",
      linkedin: "https://www.linkedin.com/in/emily-kim-48b050330/",
      email: "emilkim@umich.edu",
    },
    {
      name: "Elijah Frederick",
      role: "Assistant Project Manager",
      image: "/images/headshots/BAL/ElijahF.jpeg",
      linkedin: "https://www.linkedin.com/in/elijah-frederick",
      email: "elijahfr@umich.edu",
    },
    {
      name: "Julius Cohen",
      role: "Assistant Project Manager",
      image: "/images/headshots/BAL/JuliusC.png",
      linkedin: "https://www.linkedin.com/in/julius-cohen-7320a6313/",
      email: "juliuszc@umich.edu",
    },
    {
      name: "Kyle Velasco",
      role: "Assistant Project Manager",
      image: "/images/headshots/BAL/KyleV.jpeg",
      linkedin: "www.linkedin.com/in/deward-kyle-velasco",
      email: "velascok@umich.edu",
    },
    {
      name: "Lucy Mclean",
      role: "Assistant Project Manager",
      image: "/images/headshots/BAL/LucyM.jpeg",
      linkedin: "www.linkedin.com/in/lucy-mclean",
      email: "lpmclean@umich.edu",
    },
    {
      name: "Miguel Palacios",
      role: "Assistant Project Manager",
      image: "/images/headshots/BAL/MiguelP.jpeg",
      linkedin: "https://www.linkedin.com/in/miguel-palacios-933ba7345/",
      email: "miguelpv@umich.edu",
    },
    {
      name: "Max Winnick",
      role: "Assistant Project Manager",
      image: "/images/headshots/BAL/MaxW.jpeg",
      linkedin: "https://www.linkedin.com/in/maxwinnick",
      email: "winnickm@umich.edu",
    },
    {
      name: "Nandini Tatiwala",
      role: "Assistant Project Manager",
      image: "/images/headshots/BAL/NandiniT.jpg",
      linkedin: "https://www.linkedin.com/in/nandini-tatiwala/",
      email: "tnandini@umich.edu",
    },
    {
      name: "Sumedha Katti",
      role: "Assistant Project Manager",
      image: "/images/headshots/BAL/SumedhaK.jpeg",
      linkedin: "www.linkedin.com/in/sumedha-katti-874949240",
      email: "skatti@umich.edu",
    },
    

  ],
  businessAnalysts: [    
    {
    name: "Chris Munroe",
    role: "Business Analyst",
    image: "/images/headshots/BA/ChrisM.jpg",
    linkedin: "https://www.linkedin.com/in/chrismunroe12/",
    email: "cmunroe@umich.edu",
    },
    {
      name: "David Gonzalez",
      role: "Business Analyst",
      image: "/images/headshots/BA/DavidG.jpg",
      linkedin: "https://www.linkedin.com/in/davidgzzmtz/",
      email: "davidgmz@umich.edu",
    },
    {
      name: "Katelyn Knickerbocker",
      role: "Business Analyst",
      image: "/images/headshots/BA/KatelynK.jpg",
      linkedin: "https://www.linkedin.com/in/katelyn-knickerbocker-75103b332/",
      email: "kkately@umich.edu",
    },
    {
      name: "Jessica Youn",
      role: "Business Analyst",
      image: "/images/headshots/BA/JessicaY.jpg",
      linkedin: "https://www.linkedin.com/in/jessicayoun/",
      email: "jyoun@umich.edu",
    },
    {
      name: "Jiali Goodwin",
      role: "Business Analyst",
      image: "/images/headshots/BA/JialiG.jpeg",
      linkedin: "https://www.linkedin.com/in/jiali-goodwin/",
      email: "jialig@umich.edu",
    },
    {
      name: "Mark Bokas",
      role: "Business Analyst",
      image: "/images/headshots/BA/MarkB.jpg",
      linkedin: "https://www.linkedin.com/in/markbokas/",
      email: "bokas@umich.edu",
    },
    {
      name: "Nikhil Akkala",
      role: "Business Analyst",
      image: "/images/headshots/BA/NikhilA.JPG",
      linkedin: "https://www.linkedin.com/in/nikhil-akkala/",
      email: "nakkala@umich.edu",
    },
    {
      name: "Reagan Masek",
      role: "Business Analyst",
      image: "/images/headshots/BA/ReaganM.jpg",
      linkedin: "https://www.linkedin.com/in/reagan-masek/",
      email: "rmasek@umich.edu",
    },
    {
      name: "Ryan Wells",
      role: "Business Analyst",
      image: "/images/headshots/BA/RyanW.jpeg",
      linkedin: "https://www.linkedin.com/in/ryanwells10/",
      email: "rpwells@umich.edu",
    },
    {
      name: "Sam Pelter",
      role: "Business Analyst",
      image: "/images/headshots/BA/SamP.jpg",
      linkedin: "https://www.linkedin.com/in/samanthapelter/",
      email: "spelter@umich.edu",
    },
    {
      name: "Sanjay Tilak",
      role: "Business Analyst",
      image: "/images/headshots/BA/SanjayT.JPG",
      linkedin: "https://www.linkedin.com/in/sanjay-tilak/",
      email: "sanjayt@umich.edu",
    },    
    {
      name: "Vansh Baxi",
      role: "Business Analyst",
      image: "/images/headshots/BA/VanshB.JPEG",
      linkedin: "https://www.linkedin.com/in/vanshbaxi/",
      email: "vbaxi@umich.edu",
    },
    {
      name: "Zain Syed",
      role: "Business Analyst",
      image: "/images/headshots/BA/ZainS.jpg",
      linkedin: "https://www.linkedin.com/in/zainsyedd/",
      email: "zainsy@umich.edu",
    },
  ],
  strategicLeads: [
    {
      name: "Aaryan Singh",
      role: "Strategic Lead and Co Founder",
      image: "/images/headshots/SA/AaryanS.jpeg",
      linkedin: "https://www.linkedin.com/in/aaryansingh2004/",
      email: "arysingh@umich.edu",
    },
    {
      name: "Charlie Hartman",
      role: "Strategic Lead",
      image: "/images/headshots/SA/CharlieH.jpeg",
      linkedin: "www.linkedin.com/in/charlie-hartman-",
      email: "hartch@umich.edu",
    },
    {
      name: "Cierra Scott",
      role: "Strategic Lead",
      image: "/images/headshots/SA/CierraS.jpeg",
      linkedin: "https://www.linkedin.com/in/cierra-scott-3ba924270/",
      email: "scierra@umich.edu",
    },
    {
      name: "Jonathan Fay",
      role: "Strategic Lead",
      image: "/images/headshots/SA/JonathanF.jpeg",
      linkedin: "https://www.linkedin.com/in/jonathan-s-fay/",
      email: "jonfay@umich.edu",
    },
    {
      name: "Rishi Juneja",
      role: "Strategic Lead",
      image: "/images/headshots/SA/RishiJ.JPG",
      linkedin: "https://www.linkedin.com/in/rishijuneja//",
      email: "rishij@umich.edu",
    },
    {
      name: "Ronith Ganjigunta",
      role: "Strategic Lead",
      image: "/images/headshots/SA/RonithG.JPG",
      linkedin: "https://www.linkedin.com/in/ronithganjigunta/",
      email: "rronith@umich.edu",
    },
    {
      name: "Ruthie Yu",
      role: "Strategic Lead",
      image: "/images/headshots/SA/RuthieY.JPG",
      linkedin: "https://www.linkedin.com/in/ruthie-yu/",
      email: "yuruthie@umich.edu",
    },
    {
      name: "Tayla Jankowski",
      role: "Strategic Lead",
      image: "/images/headshots/SA/TaylaJ.jpeg",
      linkedin: "https://www.linkedin.com/in/tayla-jankowski/",
      email: "taylajan@umich.edu",
    },
  ],
}

export default function TeamPage() {
  const [currentRole, setCurrentRole] = useState("eboard")

  return (
    <div>
      <div className="bg-mecg-blue-light">
        <h1 className="text-5xl md:text-6xl font-bold text-center text-mecg-orange py-16 md:py-20 drop-shadow-lg" style={{ textShadow: '2px 4px 8px rgba(0,0,0,0.15)' }}>Meet the Team</h1>
      </div>
      
      <div className="py-10 md:py-16 bg-mecg-blue-extr">
        <div className="container px-4 md:px-6">
          <div className="flex justify-center mb-8 overflow-x-auto">
            <div className="inline-flex items-center rounded-md border border-input bg-mecg-blue-extraLight p-1 text-muted-foreground">
              <button
                onClick={() => setCurrentRole("eboard")}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
                  currentRole === "eboard" ? "bg-mecg-dark-blue text-white shadow-sm" : ""
                }`}
              >
                Executive Board
              </button>
              <button
                onClick={() => setCurrentRole("projectManagers")}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
                  currentRole === "projectManagers" ? "bg-mecg-dark-blue text-white shadow-sm" : ""
                }`}
              >
                Project Managers
              </button>
              <button
                onClick={() => setCurrentRole("assistantProjectManagers")}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
                  currentRole === "assistantProjectManagers" ? "bg-mecg-dark-blue text-white shadow-sm" : ""
                }`}
              >
                Assistant Project Managers
              </button>
              <button
                onClick={() => setCurrentRole("businessAnalysts")}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
                  currentRole === "businessAnalysts" ? "bg-mecg-dark-blue text-white shadow-sm" : ""
                }`}
              >
                Analysts
              </button>
              <button
                onClick={() => setCurrentRole("strategicLeads")}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
                  currentRole === "strategicLeads" ? "bg-mecg-dark-blue text-white shadow-sm" : ""
                }`}
              >
                Strategic Leads
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {teamMembers[currentRole as keyof typeof teamMembers].map((member, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all w-80 bg-mecg-blue-extraLight">
                <div className="relative w-full h-[400px]">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover object-top rounded-t-md"
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-4">
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="bg-blue-500 text-white hover:bg-blue-600 hover:animate-shake transition-all duration-300 rounded-full" asChild>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" className="bg-white text-black hover:bg-gray-100 transition-colors rounded-full" asChild>
                        <a href={`mailto:${member.email}`}>
                          <Mail className="h-4 w-4" />
                          <span className="sr-only">Email</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}