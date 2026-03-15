"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import PageHeader from "@/components/page-header"

// Team Data
const teamMembers = {
  eboard: [
    {
      name: "Annie Callam",
      role: "President",
      image: "/images/headshots/Board/AnnieC.webp",
      linkedin: "https://www.linkedin.com/in/ana-callam-413bb5274/",
      email: "aicallam@umich.edu",
    },
    {
      name: "Nandini Tatiwala",
      role: "VP External",
      image: "/images/headshots/Board/NandiniT.webp",
      linkedin: "https://www.linkedin.com/in/nandini-tatiwala/",
      email: "tnandini@umich.edu",
    },
    {
      name: "Abby Osterhart",
      role: "VP Internal",
      image: "/images/headshots/Board/AbbyO.webp",
      linkedin: "https://www.linkedin.com/in/abigailosterhart/",
      email: "aoste@umich.edu",
    },
    {
      name: "Jandy Arias",
      role: "VP Recruitment",
      image: "/images/headshots/Board/JandyA.webp",
      linkedin: "https://www.linkedin.com/in/jandy-arias/",
      email: "jandyari@umich.edu",
    },
    {
      name: "Blake Stark",
      role: "VP Consulting",
      image: "/images/headshots/Board/BlakeS.webp",
      linkedin: "https://www.linkedin.com/in/blakeastark",
      email: "starkb@umich.edu",
    },
    {
      name: "Sumedha Katti",
      role: "VP Consulting",
      image: "/images/headshots/Board/SumedhaK.webp",
      linkedin: "https://www.linkedin.com/in/sumedha-katti/",
      email: "skatti@umich.edu",
    },
    {
      name: "Maya Menon",
      role: "VP Education",
      image: "/images/headshots/Board/MayaM.webp",
      linkedin: "https://www.linkedin.com/in/mayamenon28",
      email: "mayameno@umich.edu",
      // Move visible window lower on the image so her face appears higher (crop more from the top)
      imagePosition: "center 70%",
    },
    {
      name: "Luciano del Carpio",
      role: "VP Education",
      image: "/images/headshots/Board/LucianoD.webp",
      linkedin: "https://www.linkedin.com/in/luciano-del-carpio/",
      email: "ldelcarp@umich.edu",
    },
    {
      name: "Selena Cooper",
      role: "VP Finance",
      image: "/images/headshots/Board/SelenaC.webp",
      linkedin: "https://www.linkedin.com/in/selena-cooper/",
      email: "selenaco@umich.edu",
    },
    {
      name: "Angela Yang",
      role: "VP Marketing",
      image: "/images/headshots/Board/AngelaY.webp",
      linkedin: "https://www.linkedin.com/in/anngelayang/",
      email: "angely@umich.edu",
    },
  ],
  projectManagers: [
    {
      name: "Daniel Okoye",
      image: "/images/headshots/PM/DanielO.webp",
      linkedin: "https://www.linkedin.com/in/daniel-okoye-7a1229319",
      email: "dokoye@umich.edu",
    },
    {
      name: "Evie Price",
      image: "/images/headshots/PM/EvieP.webp",
      linkedin: "https://www.linkedin.com/in/evieprice/",
      email: "enprice@umich.edu",
    },
    {
      name: "Jandy Arias",
      image: "/images/headshots/PM/JandyA.webp",
      linkedin: "https://www.linkedin.com/in/jandy-arias/",
      email: "jandyari@umich.edu",
    },
    {
      name: "Katie Slazinski",
      image: "/images/headshots/PM/KatieS.webp",
      linkedin: "https://www.linkedin.com/in/katherine-slazinski/",
      email: "kslaz@umich.edu",
    },
    {
      name: "Molly Bluestein",
      image: "/images/headshots/PM/MollyB.webp",
      linkedin: "https://www.linkedin.com/in/mollybluestein",
      email: "mollyblu@umich.edu",
    },
    {
      name: "Sophie Cartwright",
      image: "/images/headshots/PM/SophieC.webp",
      linkedin: "https://www.linkedin.com/in/-sophiecartwright/",
      email: "cartso@umich.edu",
    },
  ],
  assistantProjectManagers: [
    {
      name: "Aditya Muli",
      image: "/images/headshots/APM/AdityaM.webp",
      linkedin: "https://www.linkedin.com/in/aditya-muli-3b911a2b9/",
      email: "amuli@umich.edu",
    },
    {
      name: "Akhi Kanmanthreddy",
      image: "/images/headshots/APM/AkhiK.webp",
      linkedin: "https://www.linkedin.com/in/akhikanman/",
      email: "kanmanth@umich.edu",
    },
    {
      name: "Asha Joliet",
      image: "/images/headshots/APM/AshaJ.webp",
      linkedin: "https://www.linkedin.com/in/ashajoliet/",
      email: "ajoliet@umich.edu",
    },
    {
      name: "Avery Bakes",
      image: "/images/headshots/APM/AveryB.webp",
      linkedin: "https://www.linkedin.com/in/avery-bakes-53994a309 ",
      email: "ajbakes@umich.edu",
    },
    {
      name: "Ayaan Vaswani",
      image: "/images/headshots/APM/AyaanV.webp",
      linkedin: "https://www.linkedin.com/in/ayaanvaswani/",
      email: "ayaanv@umich.edu",
    },
    {
      name: "Jihyo Yoo",
      image: "/images/headshots/APM/JihyoY.webp",
      linkedin: "https://www.linkedin.com/in/jihyoyoo",
      email: "jihyoyoo@umich.edu",
    },
    {
      name: "Luciano del Carpio",
      image: "/images/headshots/APM/LucianoD.webp",
      linkedin: "https://www.linkedin.com/in/luciano-del-carpio/",
      email: "ldelcarp@umich.edu",
    },
    {
      name: "Natalie Woolridge",
      image: "/images/headshots/APM/NatalieW.webp",
      linkedin: "https://www.linkedin.com/in/natalie-wooldridge-1380a6329/",
      email: "nwool@umich.edu",
    },
    {
      name: "Pranjal Mhetre",
      image: "/images/headshots/APM/PranjalM.webp",
      linkedin: "https://www.linkedin.com/in/pranjalmhetre/",
      email: "pranjalm@umich.edu",
    },
    {
      name: "Selena Cooper",
      image: "/images/headshots/APM/SelenaC.webp",
      linkedin: "https://www.linkedin.com/in/selena-cooper/",
      email: "selenaco@umich.edu",
    },
    {
      name: "Thomas Schehl",
      image: "/images/headshots/APM/ThomasS.webp",
      linkedin: "https://www.linkedin.com/in/thomas-p-schehl/",
      email: "tschehl@umich.edu",
    },
  ],
  businessAnalysts: [
    {
      name: "Aaryan Singh",
      image: "/images/headshots/Analyst/AaryanS.webp",
      linkedin: "https://www.linkedin.com/in/aaryansingh2004/",
      email: "arysingh@umich.edu",
    },
    {
      name: "Abby Cho",
      image: "/images/headshots/Analyst/AbbyC.webp",
      linkedin: "https://www.linkedin.com/in/abigail-cho-/",
      email: "eulacho@umich.edu",
    },
    {
      name: "Adam Benjamin",
      image: "/images/headshots/Analyst/AdamB.webp",
      linkedin: "https://www.linkedin.com/in/adam-d-benjamin/",
      email: "abenji@umich.edu",
    },
    {
      name: "Allison Lukens",
      image: "/images/headshots/Analyst/AllisonL.webp",
      linkedin: "https://www.linkedin.com/in/-allison-lukens/",
      email: "alukens@umich.edu",
    },
    {
      name: "Anna Czech",
      image: "/images/headshots/Analyst/AnnaC.webp",
      linkedin: "https://www.linkedin.com/in/anna-czech-738463320/",
      email: "arczech@umich.edu",
    },
    {
      name: "Bhumi Kumar",
      image: "/images/headshots/Analyst/BhumiK.webp",
      linkedin: "https://www.linkedin.com/in/bhumikumar/",
      email: "bhumik@umich.edu",
    },
    {
      name: "Caden Feddersen",
      image: "/images/headshots/Analyst/CadenF.webp",
      linkedin: "https://www.linkedin.com/in/caden-feddersen/",
      email: "cfedd@umich.edu",
    },
    {
      name: "Charlie Hartman",
      image: "/images/headshots/Analyst/CharlieH.webp",
      linkedin: "https://www.linkedin.com/in/charlie-hartman-/",
      email: "hartch@umich.edu",
    },
    {
      name: "Connor Klein",
      image: "/images/headshots/Analyst/ConnorK.webp",
      linkedin: "https://www.linkedin.com/in/tconnorklein/",
      email: "tcklein@umich.edu",
    },
    {
      name: "Daniella Ranario",
      image: "/images/headshots/Analyst/DaniellaR.webp",
      linkedin: "https://www.linkedin.com/in/daniella-ranario/",
      email: "dranario@umich.edu",
    },
    {
      name: "Daniel Rombaut",
      image: "/images/headshots/Analyst/DanielR.webp",
      linkedin: "https://www.linkedin.com/in/dromb/",
      email: "drombaut@umich.edu",
    },
    {
      name: "David Ebosele",
      image: "/images/headshots/Analyst/DavidE.webp",
      linkedin: "https://www.linkedin.com/in/david-ebosele-3813aa261/",
      email: "debosele@umich.edu",
    },
    {
      name: "Diego Leon",
      image: "/images/headshots/Analyst/DiegoL.webp",
      linkedin: "https://www.linkedin.com/in/diegoleon-umich/",
      email: "dleonag@umich.edu",
    },
    {
      name: "Elijah Frederick",
      image: "/images/headshots/Analyst/ElijahF.webp",
      linkedin: "https://www.linkedin.com/in/elijah-frederick/",
      email: "elijahfr@umich.edu",
    },
    {
      name: "Emily Kim",
      image: "/images/headshots/Analyst/EmilyK.webp",
      linkedin: "https://www.linkedin.com/in/emily-kim-48b050330/",
      email: "emilkim@umich.edu",
    },
    {
      name: "Erin Beiley",
      image: "/images/headshots/Analyst/ErinB.webp",
      linkedin: "https://www.linkedin.com/in/erin-beiley/",
      email: "beiley@umich.edu",
    },
    {
      name: "Ethan Showich",
      image: "/images/headshots/Analyst/EthanS.webp",
      linkedin: "https://www.linkedin.com/in/ethan-showich/",
      email: "eshowich@umich.edu",
    },
    {
      name: "Eve Dragiewicz",
      image: "/images/headshots/Analyst/EveD.webp",
      linkedin: "https://www.linkedin.com/in/eve-dragiewicz/",
      email: "evedrag@umich.edu",
    },
    {
      name: "Giada Garzelloni",
      image: "/images/headshots/Analyst/GiadaG.webp",
      linkedin: "https://www.linkedin.com/in/giada-garzelloni/",
      email: "garzello@umich.edu",
    },
    {
      name: "Hannah TerHaar",
      image: "/images/headshots/Analyst/HannahT.webp",
      linkedin: "https://www.linkedin.com/in/hannahterhaar/",
      email: "terhaarh@umich.edu",
    },
    {
      name: "Iman Ahmed",
      image: "/images/headshots/Analyst/ImanA.webp",
      linkedin: "https://www.linkedin.com/in/imanahmed07/",
      email: "imanahm@umich.edu",
    },
    {
      name: "Isabella Haindl",
      image: "/images/headshots/Analyst/IsabellaH.webp",
      linkedin: "https://www.linkedin.com/in/isabella-haindl/",
      email: "ihaindl@umich.edu",
    },
    {
      name: "Jacob Hanks",
      image: "/images/headshots/Analyst/JacobH.webp",
      linkedin: "https://www.linkedin.com/in/jacobchanks/",
      email: "jclhanks@umich.edu",
    },
    {
      name: "James Oosterhouse",
      image: "/images/headshots/Analyst/JamesO.webp",
      linkedin: "https://www.linkedin.com/in/james-oosterhouse/",
      email: "jamesoo@umich.edu",
    },
    {
      name: "Jonathan Fay",
      image: "/images/headshots/Analyst/JonathanF.webp",
      linkedin: "https://www.linkedin.com/in/jonathan-s-fay/",
      email: "jonfay@umich.edu",
    },
    {
      name: "Joshua Ng",
      image: "/images/headshots/Analyst/JoshuaN.webp",
      linkedin: "https://www.linkedin.com/in/joshua-y-ng/",
      email: "joshng@umich.edu",
    },
    {
      name: "Jude Adarkwa",
      image: "/images/headshots/Analyst/JudeA.webp",
      linkedin: "https://www.linkedin.com/in/jude-adarkwa/",
      email: "jadarkwa@umich.edu",
    },
    {
      name: "Julius Cohen",
      image: "/images/headshots/Analyst/JuliusC.webp",
      linkedin: "https://www.linkedin.com/in/julius-cohen-7320a6313/",
      email: "juliuszc@umich.edu",
    },
    {
      name: "Kyle Cornell",
      image: "/images/headshots/Analyst/KyleC.webp",
      linkedin: "https://www.linkedin.com/in/kylecornell04/",
      email: "kylcorn@umich.edu",
    },
    {
      name: "Kyle Velasco",
      image: "/images/headshots/Analyst/KyleV.webp",
      linkedin: "https://www.linkedin.com/in/deward-kyle-velasco/",
      email: "velascok@umich.edu",
    },
    {
      name: "Lucy McLean",
      image: "/images/headshots/Analyst/LucyM.webp",
      linkedin: "https://www.linkedin.com/in/lucy-mclean/",
      email: "lpmclean@umich.edu",
    },
    {
      name: "Luisa Bruno Ferré",
      image: "/images/headshots/Analyst/LuisaB.webp",
      linkedin: "https://www.linkedin.com/in/luisabrunoferre/",
      email: "luisabf@umich.edu",
    },
    {
      name: "Mark M.",
      image: "/images/headshots/Analyst/MarkM.webp",
      linkedin: "",
      email: "",
    },
    {
      name: "Martynas Jurciukonis",
      image: "/images/headshots/Analyst/MartynasJ.webp",
      linkedin: "https://www.linkedin.com/in/martynas-jurciukonis/",
      email: "mjurciuk@umich.edu",
    },
    {
      name: "Mason Pratt",
      image: "/images/headshots/Analyst/MasonP.webp",
      linkedin: "https://www.linkedin.com/in/mason-pratt-404055284/",
      email: "maspratt@umich.edu",
    },
    {
      name: "Maxwell Cooper",
      image: "/images/headshots/Analyst/MaxwellC.webp",
      linkedin: "https://www.linkedin.com/in/cooper-maxwell/",
      email: "mwcooper@umich.edu",
    },
    {
      name: "Maxwell Franz",
      image: "/images/headshots/Analyst/MaxwellF.webp",
      linkedin: "https://www.linkedin.com/in/maxwellfranz/",
      email: "maxfranz@umich.edu",
    },
    {
      name: "Michael Cornell",
      image: "/images/headshots/Analyst/MichaelC.webp",
      linkedin: "https://www.linkedin.com/in/michaeltcornell/",
      email: "mtcornel@umich.edu",
    },
    {
      name: "Michael Young",
      image: "/images/headshots/Analyst/MichaelY.webp",
      linkedin: "https://www.linkedin.com/in/youngim/",
      email: "youngim@umich.edu",
    },
    {
      name: "Miguel Palacios",
      image: "/images/headshots/Analyst/MiguelP.webp",
      linkedin: "https://www.linkedin.com/in/miguel-palacios-933ba7345/",
      email: "miguelpv@umich.edu",
    },
    {
      name: "Nate Reynders",
      image: "/images/headshots/Analyst/NateR.webp",
      linkedin: "https://www.linkedin.com/in/nate-reynders/",
      email: "reynders@umich.edu",
    },
    {
      name: "Nitya Balasubramanian",
      image: "/images/headshots/Analyst/NityaB.webp",
      linkedin: "https://www.linkedin.com/in/nityabalasub/",
      email: "nbalasub@umich.edu",
    },
    {
      name: "Ryan Hoehler",
      image: "/images/headshots/Analyst/RyanH.webp",
      linkedin: "https://www.linkedin.com/in/ryan-hoehler125/",
      email: "rhoehler@umich.edu",
    },
    {
      name: "Sydney Silva",
      image: "/images/headshots/Analyst/SydneyS.webp",
      linkedin: "https://www.linkedin.com/in/sydney-e-silva/",
      email: "sydsilva@umich.edu",
    },
    {
      name: "Thomas Carano",
      image: "/images/headshots/Analyst/ThomasC.webp",
      linkedin: "https://www.linkedin.com/in/t-carano/",
      email: "tcaranno@umich.edu",
    },
    {
      name: "Victor Iyer",
      image: "/images/headshots/Analyst/VictorI.webp",
      linkedin: "https://www.linkedin.com/in/victor-iyer/",
      email: "viciyer@umich.edu",
    },
  ],
  strategicLeads: [
    {
      name: "Hayley Holder",
      image: "/images/headshots/SL/HayleyH.webp",
      linkedin: "https://www.linkedin.com/in/hayley-holder/",
      email: "hholder@umich.edu",
    },
    {
      name: "Jed Roseman",
      image: "/images/headshots/SL/JedidiahR.webp",
      linkedin: "https://www.linkedin.com/in/jedidiah-roseman/",
      email: "jedrose@umich.edu",
    },
    {
      name: "Jules Hwang",
      image: "/images/headshots/SL/JulesH.webp",
      linkedin: "https://www.linkedin.com/in/jules-hwang/",
      email: "julhwang@umich.edu",
    },
    {
      name: "Max Winnick",
      image: "/images/headshots/SL/MaxW.webp",
      linkedin: "https://www.linkedin.com/in/maxwinnick",
      email: "winnickm@umich.edu",
    },
    {
      name: "Nandini Tatiwala",
      image: "/images/headshots/SL/NandiniT.webp",
      linkedin: "https://www.linkedin.com/in/nandini-tatiwala/",
      email: "tnandini@umich.edu",
    },
  ],
  // Optional: regular members with no dedicated section (used only in View All)
  // Fill this array with members who live in /images/headshots/Members.
  members: [
    // Example:
    // {
    //   name: "First Last",
    //   image: "/images/headshots/Members/FirstL.webp",
    //   linkedin: "",
    //   email: "",
    // },
  ],
}

export default function TeamPage() {
  const [currentRole, setCurrentRole] = useState("eboard")
  const [isPageVisible, setIsPageVisible] = useState(false)

  useEffect(() => {
    setIsPageVisible(true)
  }, [])

  // Preload executive board images for faster loading
  useEffect(() => {
    teamMembers.eboard.forEach((member) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = member.image
      document.head.appendChild(link)
    })
  }, [])

  // Create a combined array of all members for the "View All" option
  // Deduplicate by name, keeping VP roles when there are duplicates
  const allMembersMap = new Map()
  
  // First add eboard members (these have VP roles and take priority)
  teamMembers.eboard.forEach(member => {
    allMembersMap.set(member.name, member)
  })
  
  // Then add other members, skipping if already exists (to preserve VP role)
  teamMembers.projectManagers.forEach(member => {
    if (!allMembersMap.has(member.name)) {
      allMembersMap.set(member.name, {
        ...member,
        category: 'Project Manager',
      })
    }
  })
  
  teamMembers.assistantProjectManagers.forEach(member => {
    if (!allMembersMap.has(member.name)) {
      allMembersMap.set(member.name, {
        ...member,
        category: 'Assistant Project Manager',
      })
    }
  })
  
  teamMembers.businessAnalysts.forEach(member => {
    if (!allMembersMap.has(member.name)) {
      allMembersMap.set(member.name, {
        ...member,
        category: 'Analyst',
      })
    }
  })
  
  teamMembers.strategicLeads.forEach(member => {
    if (!allMembersMap.has(member.name)) {
      allMembersMap.set(member.name, {
        ...member,
        category: 'Strategic Lead',
      })
    }
  })
  
  // Add regular members (no dedicated section) to View All if present
  if ((teamMembers as any).members) {
    (teamMembers as any).members.forEach((member: any) => {
      if (!allMembersMap.has(member.name)) {
        allMembersMap.set(member.name, {
          ...member,
          category: member.category || 'Member',
        })
      }
    })
  }
  
  // Add Co-Founders to View All section (without Strategic Lead category)
  if (!allMembersMap.has("Aaryan Singh")) {
    allMembersMap.set("Aaryan Singh", {
      name: "Aaryan Singh",
      role: "Co-Founder",
      image: "/images/headshots/Members/AaryanS.webp",
      linkedin: "https://www.linkedin.com/in/aaryansingh2004/",
      email: "arysingh@umich.edu",
    })
  }
  if (!allMembersMap.has("Jonathan Fay")) {
    allMembersMap.set("Jonathan Fay", {
      name: "Jonathan Fay",
      role: "Co-Founder",
      image: "/images/headshots/Members/JonathanF.webp",
      linkedin: "https://www.linkedin.com/in/jonathan-s-fay/",
      email: "jonfay@umich.edu",
    })
  }
  
  // Exclude specific members from View All section
  const excludedNames = ["Cierra Scott", "Claire Wattenbach", "David Jing"]
  const allMembers = Array.from(allMembersMap.values())
    .filter(member => !excludedNames.includes(member.name))
    .sort((a, b) => a.name.localeCompare(b.name))

  const getCurrentMembers = () => {
    if (currentRole === "all") {
      return allMembers
    }
    return teamMembers[currentRole as keyof typeof teamMembers]
  }

  return (
    <div className={`min-h-screen bg-mecg-blue-light transition-opacity duration-700 ease-out ${
      isPageVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="bg-mecg-blue-light">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-mecg-orange py-16 md:py-16">Meet the Team</h2>
        <div className="w-40 h-1 bg-mecg-orange mx-auto -mt-8"></div>
      </div>
      
      <div className="py-10 md:py-16 bg-mecg-blue-light">
        <div className="container px-4 md:px-6">
          <div className="flex justify-center mb-8 overflow-x-auto">
            <div className="inline-flex items-center rounded-md border border-input bg-background p-1 text-muted-foreground">
              <button
                onClick={() => setCurrentRole("eboard")}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-4 py-2 text-base font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
                  currentRole === "eboard" ? "bg-mecg-dark-blue text-white shadow-sm font-bold" : ""
                }`}
              >
                Executive Board
              </button>
              <button
                onClick={() => setCurrentRole("projectManagers")}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-4 py-2 text-base font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
                  currentRole === "projectManagers" ? "bg-mecg-dark-blue text-white shadow-sm font-bold" : ""
                }`}
              >
                Project Managers
              </button>
              <button
                onClick={() => setCurrentRole("assistantProjectManagers")}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-4 py-2 text-base font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
                  currentRole === "assistantProjectManagers" ? "bg-mecg-dark-blue text-white shadow-sm font-bold" : ""
                }`}
              >
                Assistant Project Managers
              </button>
              <button
                onClick={() => setCurrentRole("businessAnalysts")}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-4 py-2 text-base font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
                  currentRole === "businessAnalysts" ? "bg-mecg-dark-blue text-white shadow-sm font-bold" : ""
                }`}
              >
                Analysts
              </button>
              <button
                onClick={() => setCurrentRole("strategicLeads")}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-4 py-2 text-base font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
                  currentRole === "strategicLeads" ? "bg-mecg-dark-blue text-white shadow-sm font-bold" : ""
                }`}
              >
                Strategic Leads
              </button>
              <button
                onClick={() => setCurrentRole("all")}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-4 py-2 text-base font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
                  currentRole === "all" ? "bg-mecg-dark-blue text-white shadow-sm font-bold" : ""
                }`}
              >
                View All
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-6 justify-items-center">
            {getCurrentMembers().map((member, index) => (
              <TeamMemberCard 
                key={index} 
                member={member} 
                index={index} 
                isEboard={currentRole === "eboard"}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Light blue divider section */}
      <div className="py-16 md:py-20 bg-mecg-blue-light"></div>
      
      {/* Light blue border at the bottom of the page */}
      <div className="h-1 bg-mecg-blue-light"></div>
    </div>
  )
}

// Separate component for team member card to handle hooks properly
function TeamMemberCard({ member, index, isEboard }: { member: any; index: number; isEboard?: boolean }) {
  const [hasBeenInView, setHasBeenInView] = useState(false)
  const [cardRef, cardInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: "50px",
  })

  // Track if image has been loaded once
  useEffect(() => {
    if (cardInView && !hasBeenInView) {
      setHasBeenInView(true)
    }
  }, [cardInView, hasBeenInView])

  // Prioritize all eboard images when viewing eboard section, otherwise prioritize first 3
  // Once an image has been in view, always load it eagerly to prevent reloading
  const shouldPriority = isEboard ? true : index < 3 || hasBeenInView

  return (
    <Card 
      ref={cardRef}
      className={cn(
        "overflow-hidden group hover:shadow-lg transition-all w-80 bg-mecg-blue-extraLight transform",
        cardInView 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-10"
      )}
      style={{
        transitionDuration: "400ms",
        transitionProperty: "opacity, transform"
      }}
    >
      <div className="relative w-full h-[400px]">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          className="object-cover rounded-t-md"
          style={{ objectPosition: (member as any).imagePosition || "center top" }}
          priority={shouldPriority}
          quality={isEboard ? 75 : 60}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          loading={shouldPriority ? "eager" : "lazy"}
          fetchPriority={shouldPriority ? "high" : "auto"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-4">
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="bg-blue-500 text-white hover:bg-blue-600 hover:animate-shake transition-all duration-300 rounded-full" asChild>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" className="bg-white text-mecg-dark-blue hover:bg-gray-100 transition-colors rounded-full" asChild>
              <a href={`mailto:${member.email}`}>
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
      <CardHeader className="p-3">
        <CardTitle className="text-lg text-mecg-dark-blue">{member.name}</CardTitle>
        {member.role && (
          <CardDescription
            className="text-xs sm:text-sm md:text-base text-mecg-dark-blue"
            style={{ lineHeight: "1" }}
          >
            {member.role}
          </CardDescription>
        )}
        {member.category && (
          <CardDescription
            className="text-xs sm:text-sm md:text-base text-mecg-dark-blue"
            style={{ lineHeight: "1" }}
          >
            {member.category}
          </CardDescription>
        )}
      </CardHeader>
    </Card>
  )
}