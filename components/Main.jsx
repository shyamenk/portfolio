import Link from 'next/link'
import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {GrTwitter} from 'react-icons/gr'

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center overflow-y-auto">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-[#00A78E]"> Shyam</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href="" target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub
                  onMouseOver={({target}) => (target.style.color = '#00A78E')}
                  onMouseOut={({target}) => (target.style.color = 'black')}
                />
              </div>
            </a>

            <a href="" target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn
                  onMouseOver={({target}) => (target.style.color = '#00A78E')}
                  onMouseOut={({target}) => (target.style.color = 'black')}
                />
              </div>
            </a>
            <Link href="/#twitter">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <GrTwitter
                  onMouseOver={({target}) => (target.style.color = '#00A78E')}
                  onMouseOut={({target}) => (target.style.color = 'black')}
                />
              </div>
            </Link>
            <Link href="/#resume">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail
                  onMouseOver={({target}) => (target.style.color = '#00A78E')}
                  onMouseOut={({target}) => (target.style.color = 'black')}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
