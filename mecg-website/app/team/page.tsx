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
      name: "Jules Hwang",
      role: "President",
      image: "/images/headshots/Board/JulesH.webp",
      linkedin: "www.linkedin.com/in/juliannehwang",
      email: "julhwang@umich.edu",
    },
    {
      name: "Kyle Cornell",
      role: "Vice President",
      image: "/images/headshots/Board/KyleC.webp",
      linkedin: "https://www.linkedin.com/in/kylecornell04",
      email: "kylcorn@umich.edu",
    },
    {
      name: "Katie Slazinski",
      role: "Director of Professional Development",
      image: "/images/headshots/Board/KatieS.webp",
      linkedin: " www.linkedin.com/in/katherine-slazinski-96b902270",
      email: "kslaz@umich.edu",
    },

    {
      name: "Maxwell Cooper",
      role: "Director of Technical Consulting",
      image: "/images/headshots/Board/MaxwellC.webp",
      linkedin: "https://www.linkedin.com/in/cooper-maxwell",
      email: "mwcooper@umich.edu",
    },

    {
      name: "Michael Young",
      role: "Director of Consulting",
      image: "/images/headshots/Board/MichaelY.webp",
      linkedin: "http://www.linkedin.com/in/youngim",
      email: "youngim@umich.edu",
    },

    {
      name: "Sydney Silva",
      role: "Director of Operations",
      image: "/images/headshots/Board/SydneyS.webp",
      linkedin: "https://www.linkedin.com/in/sydney-silva-145405246/",
      email: "sydsilva@umich.edu",
    },
    {
      name: "James Oosterhouse",
      role: "Director of Finance",
      image: "/images/headshots/Board/JamesO.webp",
      linkedin: "https://www.linkedin.com/in/james-oosterhouse ",
      email: "jamesoo@umich.edu",
    },
    {
      name: "David Ebosele",
      role: "Director of Recruitment and Membership",
      image: "/images/headshots/Board/DavidE.webp",
      linkedin: "https://www.linkedin.com/in/david-ebosele-3813aa261/",
      email: "debosele@umich.edu",
    },
    {
      name: "Annie Callam",
      role: "Marketing Chair",
      image: "/images/headshots/Board/AnnieC.webp",
      linkedin: "https://www.linkedin.com/in/annie-callam-413bb5274/",
      email: "aicallam@umich.edu",
    },
    {
      name: "Daniella Ranario",
      role: "DEI Chair",
      image: "/images/headshots/Board/DaniellaR.webp",
      linkedin: "https://www.linkedin.com/in/daniella-ranario/",
      email: "dranario@umich.edu",
    },
    {
      name: "Abigail Osterhart",
      role: "Social Chair",
      image: "/images/headshots/Board/AbigailO.webp",
      linkedin: "https://www.linkedin.com/in/abigailosterhart/",
      email: "aoste@umich.edu",
    },
    

  ],
  projectManagers: [
    {
      name: "Blake Stark",
      image: "/images/headshots/PM/BlakeS.webp",
      linkedin: "https://www.linkedin.com/in/blakeastark",
      email: "starkb@umich.edu",
    },
    {
      name: "Caden Fedderson",
      image: "/images/headshots/PM/CadenF.webp",
      linkedin: "https://www.linkedin.com/in/caden-feddersen/",
      email: "cfedd@umich.edu",
    },
    {
      name: "Ethan Showich",
      image: "/images/headshots/PM/EthanS.webp",
      linkedin: "www.linkedin.com/in/ethan-showich",
      email: "eshowich@umich.edu",
    },
    {
      name: "Eve Dragiewicz",
      image: "/images/headshots/PM/EveD.webp",
      linkedin: "www.linkedin.com/in/eve-dragiewicz-684942327",
      email: "evedrag@umich.edu",
    },
    {
      name: "Iman Ahmed",
      image: "/images/headshots/PM/ImanA.webp",
      linkedin: "https://www.linkedin.com/in/imanahmed07/",
      email: "imanahm@umich.edu",
    },
    {
      name: "Jacob Hanks",
      image: "/images/headshots/PM/JacobH.webp",
      linkedin: "www.linkedin.com/in/jacobchanks",
      email: "jclhanks@umich.edu",
    },
    {
      name: "Jude Adwarka",
      image: "/images/headshots/PM/JudeA.webp",
      linkedin: "https://www.linkedin.com/in/jude-adarkwa",
      email: "jadarkwa@umich.edu",
    }
  ],
  assistantProjectManagers: [
    {
      name: "Anna Czech",
      image: "/images/headshots/BAL/AnnaC.webp",
      linkedin: " https://www.linkedin.com/in/anna-czech-738463320/ ",
      email: "arczech@umich.edu",
    },
    {
      name: "David Jing",
      image: "/images/headshots/BAL/DavidJ.webp",
      linkedin: "https://www.linkedin.com/in/davidsjing/",
      email: "dsjing@umich.edu",
    },
    {
      name: "Emily Kim",
      image: "/images/headshots/BAL/EmilyK.webp",
      linkedin: "https://www.linkedin.com/in/emily-kim-48b050330/",
      email: "emilkim@umich.edu",
    },
    {
      name: "Elijah Frederick",
      image: "/images/headshots/BAL/ElijahF.webp",
      linkedin: "https://www.linkedin.com/in/elijah-frederick",
      email: "elijahfr@umich.edu",
    },
    {
      name: "Julius Cohen",
      image: "/images/headshots/BAL/JuliusC.webp",
      linkedin: "https://www.linkedin.com/in/julius-cohen-7320a6313/",
      email: "juliuszc@umich.edu",
    },
    {
      name: "Kyle Velasco",
      image: "/images/headshots/BAL/KyleV.webp",
      linkedin: "www.linkedin.com/in/deward-kyle-velasco",
      email: "velascok@umich.edu",
    },
    {
      name: "Lucy Mclean",
      image: "/images/headshots/BAL/LucyM.webp",
      linkedin: "www.linkedin.com/in/lucy-mclean",
      email: "lpmclean@umich.edu",
    },
    {
      name: "Miguel Palacios",
      image: "/images/headshots/BAL/MiguelP.webp",
      linkedin: "https://www.linkedin.com/in/miguel-palacios-933ba7345/",
      email: "miguelpv@umich.edu",
    },
    {
      name: "Max Winnick",
      image: "/images/headshots/BAL/MaxW.webp",
      linkedin: "https://www.linkedin.com/in/maxwinnick",
      email: "winnickm@umich.edu",
    },
    {
      name: "Nandini Tatiwala",
      image: "/images/headshots/BAL/NandiniT.webp",
      linkedin: "https://www.linkedin.com/in/nandini-tatiwala/",
      email: "tnandini@umich.edu",
    },
    {
      name: "Sumedha Katti",
      image: "/images/headshots/BAL/SumedhaK.webp",
      linkedin: "www.linkedin.com/in/sumedha-katti-874949240",
      email: "skatti@umich.edu",
    },
    

  ],
  businessAnalysts: [    
    {
    name: "Allison Lukens",
    image: "/images/headshots/BA/AllisonL.webp",
    linkedin: "https://www.linkedin.com/in/chrismunroe12/",
    email: "cmunroe@umich.edu",
    },
    {
      name: "Angela Yang",
      image: "/images/headshots/BA/AngelaY.webp",
      linkedin: "https://www.linkedin.com/in/angela-yang-a92b9b27a/",
      email: "angely@umich.edu",
    },
    {
      name: "Avery Bakes",
      image: "/images/headshots/BA/AveryB.webp",
      linkedin: "www.linkedin.com/in/avery-bakes-53994a309 ",
      email: "ajbakes@umich.edu",
    },
    {
      name: "Bhumi Kumar",
      image: "/images/headshots/BA/BhumiK.webp",
      linkedin: "https://www.linkedin.com/in/bhumikumar/",
      email: "bhumik@umich.edu",
    },
    {
      name: "Claire Wattenbach",
      image: "/images/headshots/BA/ClaireW.webp",
      linkedin: "https://www.linkedin.com/in/clairewattenbach/",
      email: "clmw@umich.edu",
    },
    {
      name: "Connor Klein",
      image: "/images/headshots/BA/ConnorK.webp",
      linkedin: "https://www.linkedin.com/in/connor-klein-727118a6/",
      email: "tcklein@umich.edu",
    },
    {
      name: "Daniel Okoye",
      image: "/images/headshots/BA/DanielO.webp",
      linkedin: "www.linkedin.com/in/daniel-okoye-7a1229319",
      email: "dokoye@umich.edu",
    },
    {
      name: "Daniel Rombaut",
      image: "/images/headshots/BA/DanielR.webp",
      linkedin: "www.linkedin.com/in/dromb",
      email: "drombaut@umich.edu",
    },
    {
      name: "Erin Beiley",
      image: "/images/headshots/BA/ErinB.webp",
      linkedin: "www.linkedin.com/in/erin-beiley-392a14258",
      email: "beiley@umich.edu",
    }, 
    {
      name: "Hannah TerHaar",
      image: "/images/headshots/BA/HannahT.webp",
      linkedin: "https://www.linkedin.com/in/hannahterhaar",
      email: "terhaarh@umich.edu",
    },   
    {
      name: "Hayley Holder",
      image: "/images/headshots/BA/HayleyH.webp",
      linkedin: "https://www.linkedin.com/in/hayley-holder/",
      email: "hholder@umich.edu",
    },
    {
      name: "Jandy Arias",
      image: "/images/headshots/BA/JandyA.webp",
      linkedin: "http://www.linkedin.com/in/jandy-arias-90bb09264",
      email: "jandyari@umich.edu",
    },
    {
      name: "Jed Roseman",
      image: "/images/headshots/BA/JedR.webp",
      linkedin: "https://www.linkedin.com/in/jedidiah-roseman/",
      email: "jedrose@umich.edu",
    },    
    {
      name: "Jihyo Yoo",
      image: "/images/headshots/BA/JihyoY.webp",
      linkedin: "www.linkedin.com/in/jihyoyoo",
      email: "jihyoyoo@umich.edu",
    },
    {
      name: "Joshua Ng",
      image: "/images/headshots/BA/JoshuaN.webp",
      linkedin: "www.linkedin.com/in/joshuang42",
      email: "joshng@umich.edu",
    },
    {
      name: "Martynas (MJ) Jurciukonis",
      image: "/images/headshots/BA/MartynasJ.webp",
      linkedin: "www.linkedin.com/in/martynas-jurciukonis ",
      email: "mjurciuk@umich.edu",
    },
    {
      name: "Mason Pratt",
      image: "/images/headshots/BA/MasonP.webp",
      linkedin: "https://www.linkedin.com/in/mason-pratt-404055284/",
      email: "maspratt@umich.edu",
    },
    {
      name: "Maxwell Franz",
      image: "/images/headshots/BA/MaxwellF.webp",
      linkedin: "http://linkedin.com/in/maxwell-franz-439188334",
      email: "maxfranz@umich.edu",
    },
    {
      name: "Maya Menon",
      image: "/images/headshots/BA/MayaM.webp",
      linkedin: "www.linkedin.com/in/mayamenon28",
      email: "mayameno@umich.edu",
    },
    {
      name: "Molly Bluestein",
      image: "/images/headshots/BA/MollyB.webp",
      linkedin: "www.linkedin.com/in/mollybluestein",
      email: "mollyblu@umich.edu",
    },
    {
      name: "Natalie Woolridge",
      image: "/images/headshots/BA/NateR.webp",
      linkedin: "https://www.linkedin.com/in/natalie-wooldridge-1380a6329/",
      email: "nwool@umich.edu",
    },
    {
      name: "Nate Reynders",
      image: "/images/headshots/BA/NateR.webp",
      linkedin: "www.linkedin.com/in/nate-reynders",
      email: "reynders@umich.edu",
    },
    {
      name: "Ryan Hoehler",
      image: "/images/headshots/BA/RyanH.webp",
      linkedin: "www.linkedin.com/in/ryan-hoehler125",
      email: "rhoehler@umich.edu",
    },
  ],
  strategicLeads: [
    {
      name: "Aaryan Singh",
      role: "Co-Founder",
      image: "/images/headshots/SA/AaryanS.webp",
      linkedin: "https://www.linkedin.com/in/aaryansingh2004/",
      email: "arysingh@umich.edu",
    },
    {
      name: "Charlie Hartman",
      image: "/images/headshots/SA/CharlieH.webp",
      linkedin: "www.linkedin.com/in/charlie-hartman-",
      email: "hartch@umich.edu",
    },
    {
      name: "Cierra Scott",
      image: "/images/headshots/SA/CierraS.webp",
      linkedin: "https://www.linkedin.com/in/cierra-scott-3ba924270/",
      email: "scierra@umich.edu",
    },
    {
      name: "Jonathan Fay",
      role: "Co-Founder",
      image: "/images/headshots/SA/JonathanF.webp",
      linkedin: "https://www.linkedin.com/in/jonathan-s-fay/",
      email: "jonfay@umich.edu",
    },
    {
      name: "Mark Mitu",
      image: "/images/headshots/SA/MarkM.webp",
      linkedin: "https://www.linkedin.com/in/markmitu/",
      email: "markmitu@umich.edu",
    },
    {
      name: "Michael Cornell",
      image: "/images/headshots/SA/MichaelC.webp",
      linkedin: "www.linkedin.com/in/michael-cornell-6737242a6",
      email: "mtcornel@umich.edu",
    },
    {
      name: "Thomas Carano",
      image: "/images/headshots/SA/ThomasC.webp",
      linkedin: "https://www.linkedin.com/in/t-carano/",
      email: "tcaranno@umich.edu",
    },
    {
      name: "Victor Iyer",
      image: "/images/headshots/SA/VictorI.webp",
      linkedin: "https://www.linkedin.com/in/victor-iyer",
      email: "viciyer@umich.edu",
    },
  ],
}

export default function TeamPage() {
  const [currentRole, setCurrentRole] = useState("eboard")
  const [isPageVisible, setIsPageVisible] = useState(false)

  useEffect(() => {
    setIsPageVisible(true)
  }, [])

  // Create a combined array of all members for the "View All" option
  const allMembers = [
    ...teamMembers.eboard.map(member => ({ 
      ...member, 
      image: `/images/headshots/VIEW ALL/${member.name.split(' ')[0]}${member.name.split(' ')[1][0]}.webp`
    })),
    ...teamMembers.projectManagers.map(member => ({ 
      ...member, 
      category: 'Project Manager',
      image: `/images/headshots/VIEW ALL/${member.name.split(' ')[0]}${member.name.split(' ')[1][0]}.webp`
    })),
    ...teamMembers.assistantProjectManagers.map(member => ({ 
      ...member, 
      category: 'Assistant Project Manager',
      image: `/images/headshots/VIEW ALL/${member.name.split(' ')[0]}${member.name.split(' ')[1][0]}.webp`
    })),
    ...teamMembers.businessAnalysts.map(member => ({ 
      ...member, 
      category: 'Business Analyst',
      image: `/images/headshots/VIEW ALL/${member.name.split(' ')[0]}${member.name.split(' ')[1][0]}.webp`
    })),
    ...teamMembers.strategicLeads.map(member => ({ 
      ...member, 
      category: 'Strategic Lead',
      image: `/images/headshots/VIEW ALL/${member.name.split(' ')[0]}${member.name.split(' ')[1][0]}.webp`
    }))
  ].sort((a, b) => a.name.localeCompare(b.name))

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
              <TeamMemberCard key={index} member={member} index={index} />
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
function TeamMemberCard({ member, index }: { member: any; index: number }) {
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "50px",
  })

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
          className="object-cover object-top rounded-t-md"
          priority={index < 3}
          quality={60}
          sizes="320px"
          loading={index < 3 ? "eager" : "lazy"}
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
                         {member.role && <CardDescription className="text-xs sm:text-sm md:text-base text-mecg-dark-blue" style={{ lineHeight: '1' }}>{member.role}</CardDescription>}
                 {member.category && <CardDescription className="text-xs sm:text-sm md:text-base text-mecg-dark-blue" style={{ lineHeight: '1' }}>{member.category}</CardDescription>}
      </CardHeader>
    </Card>
  )
}