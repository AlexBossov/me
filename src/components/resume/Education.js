import React from "react";
import {motion} from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 0.5}}}
            className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
        >
            <div>
                <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px]">2020 - 2026</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
                </div>
                <div
                    className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="Masters of commerce developing"
                        subTitle="ITMO x HSO Universities (2024 - 2026)"
                        result="5.0/5"
                        des="Project management, business analytics, Java Mentoring, GO, DevOps"
                    />
                    <ResumeCard
                        title="BSc in Informational systems"
                        subTitle="ITMO University (2020 - 2024)"
                        result="4.3/5"
                        des="C/C++, algorithms and data structures, operating systems, OOP, programming technologies."
                    />
                </div>
            </div>
            <div>
                <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px]">2020 - Present</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
                </div>
                <div
                    className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="Software Engineer"
                        subTitle="Banki.ru - (2022 - Present)"
                        result="Russia"
                        des="Creation and support of 6 microservices.
                        Mentoring internships and helping new employees with onboarding"
                    />
                    <ResumeCard
                        title="Kotlin/Java developer"
                        subTitle="DorMentor - (2020 - 2022)"
                        result="Russia"
                        des="Managing the full application development process: from requirements analysis and design to testing"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Education;
