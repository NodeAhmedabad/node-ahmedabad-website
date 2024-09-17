"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import React from "react"
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"

const Socials = () => {
  const socials = [
    {
      name: "WhatsApp",
      url: "https://chat.whatsapp.com/EqdK6ThyCk61QM0KarqTas",
      icon: <FaWhatsapp size={32} />,
      hoverClass: "hover:text-green-500",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/NodeAhmedabad",
      icon: <FaFacebook size={32} />,
      hoverClass: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/nodeahmedabad",
      icon: <FaInstagram size={32} />,
      hoverClass: "hover:text-pink-500",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/node-ahmedabad",
      icon: <FaLinkedin size={32} />,
      hoverClass: "hover:text-sky-500",
    },
  ]

  const animateSocials = () => {
    console.log("animate socials")
    const socialIcons = document.querySelectorAll(".social-icon")
    const tl = gsap.timeline({
      delay: 5,
    })
    for (const icon of Array.from(socialIcons)) {
      tl.to(
        icon,
        {
          y: 0,
          duration: 1.5,
          ease: "elastic.out(0.6, 0.70)",
        },
        "-=1.2"
      )
    }
  }

  useGSAP(() => {
    animateSocials()
  })

  return (
    <div className="flex gap-x-10  h-max overflow-hidden p-9">
      {socials.map((social) => (
        <a
          href={social.url}
          target="_blank"
          className={`p-3 h-min bg-[#262626] text-white flex flex-col items-center justify-center cursor-pointer translate-y-[1000px] social-icon ${social.hoverClass} hover:drop-shadow-lg`}
          style={{
            aspectRatio: "cos(30deg)",
            clipPath: "polygon(-50% 50%,50% 100%,150% 50%,50% 0)",
          }}
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}

export default Socials
