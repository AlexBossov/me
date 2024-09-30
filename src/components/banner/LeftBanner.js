import React from "react";
import {Cursor, useTypewriter} from "react-simple-typewriter";
import {FaDatabase, FaDiscord, FaGithub, FaGlassCheers, FaJava,} from "react-icons/fa";
import {AiFillInstagram, AiOutlineWhatsApp} from "react-icons/ai";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Backend Developer.", "Mentor."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Alex Bosov</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a Middle Java Developer with extensive experience in building and maintaining large-scale systems.
          Currently pursuing a Master's degree,
          I am focused on advancing my skills in Java and exploring Go as a potential new path for career growth.
          My long-term goal is to become a Senior Developer and eventually a Team Lead,
          with a strong emphasis on leadership and mentoring.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/AlexBossov" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://discord.com/users/alexbossov" target="blank">
              <span className="bannerIcon">
                <FaDiscord  />
              </span>
            </a>
            <a href="https://t.me/alex_bosov" target="blank">
              <span className="bannerIcon">
                <AiOutlineWhatsApp />
              </span>
            </a>
            <a href="https://www.instagram.com/alexbossov/" target="blank">
              <span className="bannerIcon">
                <AiFillInstagram />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaJava  />
            </span>
            <span className="bannerIcon">
              <FaDatabase  />
            </span>
            <span className="bannerIcon">
              <FaGlassCheers />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
