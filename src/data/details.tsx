import { Icons } from "@/components/icons";
import { Contact, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "mello",
  url: "https://mellohq.in",
  location: "Eranakulam, Kerala",
  locationLink: "",
  description:
    "shipping cool products.",
  summary:
    "We're Bunch of people from kerala, building products that just make sense. No complexity, no confusion -- just technology that works like you think.",
  avatarUrl: "/mello.jpeg",
  
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  


  
  projects: [
    {
      title: "sapient",
      href: "https://sapient.mellohq.in",
      dates: "October 2024 - Present",
      active: true,
      description:
        "Sapient is a productivity tool that helps to manage your tasks, notes, with help of interactive ai based os feature",
      technologies: [
        "productivity",
        "llm",
        "os",
      ],
      links: [
        {
          type: "Website",
          href: "https://sapient.mellohq.in",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
    {
      title: "storyboard",
      href: "",
      dates: "October 2024 - Present",
      active: true,
      description:
        "AI based video editor to create motion graphic videos in fly",
      technologies: [
        "video editor",
        "web"
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  
} as const;
