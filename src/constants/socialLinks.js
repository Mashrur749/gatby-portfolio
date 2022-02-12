import React from "react"
import {
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa"

import {AiTwotoneMail} from "react-icons/ai"

const data = [
  {
    id: 1,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/Mashrur749",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/musaddiqur-rahman/",
  },
  {
    id: 3,
    icon: <AiTwotoneMail className="social-icon"></AiTwotoneMail>,
    url: "mailto:rmashrur749@gmail.com"
  }
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} target="_blank" className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
