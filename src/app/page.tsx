"use client";

import Navbar from "@/components/custom/navbar";
import ArrowRightCircleFilledIcon from "@/components/svg-icons/arrow-right-circle-filled-icon";
import CalendarIcon from "@/components/svg-icons/calendar-icon";
import LocationIcon from "@/components/svg-icons/location-icon";
import XTwitterIcon from "@/components/svg-icons/x-twitter-icon";
import { Button } from "@/components/ui/button";
import { ArrowRightCircle, LocateIcon, MapPin, MapPinIcon, XIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import Logo from "../../public/images/logo.svg";
import SectionLabel from "@/components/custom/section-label";
import Link from "next/link";
import AboutImage from "../../public/images/about.png";
import FacebookIcon from "@/components/svg-icons/facebook-icon";
import InstagramIcon from "@/components/svg-icons/instagram-icon";
import TelegramIcon from "@/components/svg-icons/telegram-icon";
import YiyaoImage from "../../public/images/yiyao.svg";
import FacebookIconAlt from "@/components/svg-icons/facebook-icon-alt";
import InstagramIconAlt from "@/components/svg-icons/instagram-icon-alt";
import XTwitterIconAlt from "@/components/svg-icons/x-twitter-icon-alt";
import TelegramIconAlt from "@/components/svg-icons/telegram-icon-alt";
import { Speakers, EventScheduleList, EventDaysList, Faqs, FaqTabs, SpeakersPhotos, SponsorsLogo } from "@/lib/data";
import PinIcon from "@/components/svg-icons/pin-icon";

function IconWrapper({ children }: { children: React.ReactNode }) {
    return <div className="w-6 h-6 bg-[#361566] rounded-lg flex items-center justify-center">{children}</div>;
}

function Home() {
    const [activeFaqTab, setActiveFaqTab] = React.useState(FaqTabs[0].id);

    return (
        <main className="">
            <Navbar />

            <div className="py-28 bg-[#FFF3FD] bg-hero-stars">
                <section className="contained mt-20 lg:mt-32 flex flex-col items-center">
                    <div className="flex justify-center items-center">
                        {["explore", "network", "build"].map((value, index) => (
                            <div key={index} className="flex items-center">
                                {index > 0 && <div className="w-2.5 aspect-square rounded-full bg-[#FAD278]" />}
                                <div className="bg-[#FAD278] text-[#361566] font-bold rounded-full py-2 px-4 uppercase font-helvetica-compressed tracking-wider">{value}</div>
                            </div>
                        ))}
                    </div>

                    <h1 className="heading-1" style={{ WebkitTextStrokeWidth: 3, WebkitTextStrokeColor: "#D1A4FF" }}>
                        fusion tech fest 2024
                    </h1>

                    <p className="mt-10 lg:text-xl text-center xl:px-48 mx-auto text-[#361566] font-helvetica">
                        {
                            "Get ready to dive into the future at Fusion Tech Fest! Join us for an unforgettable experience where groundbreaking innovation, cutting-edge creativity, and dynamic collaboration converge. Immerse yourself in a world of technological marvels, connect with industry leaders, and be inspired by visionary thinkers. Don't miss this chance to be part of an event that will shape the future of technology."
                        }
                    </p>

                    <Button className="mt-7">
                        Register <ArrowRightCircleFilledIcon className="ml-2" />
                    </Button>

                    <div className="hero-card w-full lg:w-4/5 mt-36">
                        <div className="gradient-border"></div>
                        <div className="p-5 flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                                <IconWrapper>
                                    <CalendarIcon className="text-white" />
                                </IconWrapper>

                                <p className="font-helvetica-compressed tracking-wider sm:text-sm md:text-base lg:text-xl text-[#361566] leading-5">
                                    26th - 31st <br /> August, 2024
                                </p>
                            </div>

                            <div className="flex flex-col lg:flex-row space-y-1 lg:space-y-0 items-center gap-2.5">
                                <Image src="/images/genz-logo.png" width={56} height={32} alt="genz logo" />
                                <XIcon size={24} />
                                <Image src="/images/code-space-logo.png" width={154} height={21} alt="code space logo" />
                            </div>

                            <div className="flex items-center gap-2.5">
                                <IconWrapper>
                                    <LocationIcon className="text-white" />
                                </IconWrapper>

                                <p className="font-helvetica-compressed tracking-wider sm:text-sm md:text-base lg:text-xl text-[#361566] leading-5">
                                    Random Hall, <br /> Lagos, Nigeria
                                </p>
                            </div>
                        </div>
                        <div className="gradient-border"></div>
                    </div>
                </section>
            </div>

            <div className="bg-[#FFFBF2] py-12 contained">
                <SectionLabel text="SPONSORS AND PARTNERS" />
                <div className="flex flex-wrap justify-center gap-8">
                    {SponsorsLogo.map((sponsor, index) => (
                        <Image key={index} src={sponsor.logo} alt={sponsor.name} className="object-contain" />
                    ))}
                </div>
            </div>

            <div id="about" className="bg-[#FFFBF2]">
                <div className="contained pb-16">
                    <SectionLabel text="About Us" />

                    <p className="text-[#361566] text-justify font-helvetica">
                        Fusion Tech Fest is a pioneering event hosted by <span className="font-bold">GenZTechies</span> and <span className="font-bold">Code Space</span> to unite GenZ tech enthusiasts in a collaborative endeavor to push the boundaries of innovation and technology. Under the theme{" "}
                        <span className="font-bold">&quot;Collaborative Minds, Limitless Possibilities,&quot;</span> we aim to showcase the transformative power of teamwork and innovative thinking in tech. There will be a virtual hackathonfrom <span className="font-bold">August 26th</span>to <span className="font-bold">30th</span> and a one-day
                        conference on <span className="font-bold">August 31st</span> will serve as a beacon for aspiring tech pioneers and seasoned professionals alike.
                    </p>

                    <div className="flex justify-center items-center mt-10 w-full">
                        <Image className="rounded-lg w-full text-[#361566] border border-[#361566] shadow-[3px_6px_0px_0px_#361566] hover:shadow-[3px_6px_0px_0px_#421683]" src={AboutImage} alt="About" />
                    </div>
                </div>
            </div>

            <div id="schedule" className="">
                <SectionLabel text="Event Schedule" />
                <div className="contained py-12">
                    <div className="flex flex-col space-y-10 lg:flex-row lg:space-x-8 lg:space-y-0">
                        {EventDaysList.map((item, index) => (
                            <div key={index} className="border border-[#361566] bg-[#FFCF7B] rounded-lg p-4 shadow-event space-y-5 w-full md:min-w-[275px] relative">
                                <div className="flex gap-3">
                                    <div className="p-[4px] bg-[#361566] rounded-md h-fit my-auto">
                                        <CalendarIcon className="text-white text-[24px]" />
                                    </div>
                                    <div className="font-helvetica-compressed text-[#361566] text-xl">
                                        <p>{item.date}</p>
                                        <p className="-mt-2">{item.fullDate}</p>
                                    </div>
                                </div>
                                <h4 className="font-helvetica-compressed text-[#361566] text-4xl">{item.event}</h4>
                                <PinIcon className="absolute -right-6 -top-14" />
                            </div>
                        ))}
                    </div>
                    <div className="mt-20 space-y-4">
                        {EventScheduleList.map((item, index) => (
                            <div key={index} className="bg-[#FFFAF0] border p-4 border-[#361566] rounded-md grid grid-cols-2 lg:grid-cols-[auto_auto_auto_1fr] lg:gap-14 items-center">
                                <div className="flex gap-3">
                                    <div className="p-[4px] bg-[#361566] rounded-md h-fit my-auto">
                                        <CalendarIcon className="text-white text-[24px]" />
                                    </div>
                                    <div className="font-helvetica-compressed text-[#361566] text-xl">
                                        <p>{item.date}</p>
                                        <p className="-mt-2">{item.fullDate}</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 justify-self-end">
                                    <div className="p-[4px] bg-[#361566] rounded-md h-fit my-auto">
                                        <CalendarIcon className="text-white text-[24px]" />
                                    </div>
                                    <div className="font-helvetica-compressed text-[#361566] text-xl ">
                                        <p>09:00AM</p>
                                        <p className="-mt-2">09:00AM</p>
                                    </div>
                                </div>

                                <h2 className="font-helvetica-compressed text-[#361566] mt-4 md:mt-4 lg:mt-0 text-3xl col-span-2 md:col-span-1 md:max-w-[225px] md:w-[225px]">{item.event}</h2>
                                <p className="text-[#361566] text-base col-span-2 md:col-span-1 mt-0 md:mt-4 lg:mt-0">{item.details}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div id="speakers" className="py-12 pb-24">
                <SectionLabel text="Keynote Speakers" />
                <div className="contained mx-auto">
                    <div className="grid grid-cols-4 gap-y-8 gap-x-6 place-items-center">
                        {Speakers.map((speaker, index) => (
                            <div
                                style={{
                                    backgroundImage: `url(${speaker.photo.src})`,
                                    paddingTop: '100%', // This makes the height equal to the width
                                    position: 'relative',
                                }}
                                key={index}
                                className="w-full rounded-md flex bg-cover bg-center col-span-4 md:col-span-2 lg:col-span-1 border border-[#361566] shadow-[3px_6px_0px_0px_#361566] hover:shadow-[3px_6px_0px_0px_#421683]"
                            >
                                <div>
                                    <h1>{speaker.name}</h1>
                                    <h1>{speaker.title}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div id="judges" className="bg-[#F2FAFF] py-12 contained">
                <SectionLabel text="Judges" />
                <div className="flex flex-wrap gap-5">
                    {SpeakersPhotos.map((sponsor, i) => (
                        <Image key={i} src={sponsor.photo} alt="sponsors" height={350} width={314} className="aspect-[0.89] max-w-fit mx-auto" />
                    ))}
                </div>
            </div>

            <div id="faqs" className="bg-[#F2FAFF] px-6 md:px-14 lg:px-32 pb-16">
                <SectionLabel text="faqs" />

                <div className="flex items-center justify-center">
                    <div className="flex space-x-2 border-2 rounded-3xl border-[#361566] w-fit px-1 py-1">
                        {FaqTabs.map((tab, index) => (
                            <button key={index} onClick={() => setActiveFaqTab(tab.id)} className={`text-center uppercase font-helvetica-compressed text-lg sm:text-xl md:text-2xl text-[#361566] px-3 md:px-5 py-0.5 ${activeFaqTab === tab.id && "bg-[#F4B0E9] rounded-3xl border-2 border-[#361566]"}`}>
                                {tab.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-10 max-w-[1064px] mx-auto">
                    {Faqs.map((faq, index) => {
                        if (faq.tab !== activeFaqTab) return null;

                        return (
                            <div key={index} className="mt-4 bg-[#F4B0E9] border-2 rounded-md border-[#361566] px-10 py-6">
                                <div className="flex flex-col lg:flex-row lg:space-x-4 lg:justify-center lg:items-center">
                                    <h1 className="lg:w-1/3 uppercase font-helvetica-compressed text-2xl text-[#361566]">{faq.title}</h1>
                                    <p className="lg:w-2/3 mt-2 text-[#361566] font-helvetica">{faq.content}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div id="gallery" className="my-10">
                <SectionLabel text="Gallery" />
            </div>

            <footer className="bg-[#FFF3FD] px-4 md:px-20 h-full py-10">
                <div className="bg-footer-backdrop bg-cover w-full rounded-xl py-12 lg:py-24 px-4 md:px-8 lg:px-10 mt-16">
                    <div className="flex flex-col lg:flex-row justify-between items-center">
                        <div className="lg:w-1/2">
                            <h1 className="text-center lg:text-left text-white text-6xl lg:text-7xl uppercase font-helvetica-compressed">
                                Join the <span className="text-[#F4B0E9]">community</span> and <span className="text-[#F4B0E9]">Network</span> with like minds
                            </h1>
                            <div className="flex items-center justify-center lg:items-start lg:justify-start">
                                <div className="bg-white/30 px-4 py-2.5 w-fit rounded-3xl mt-4 lg:mt-8">
                                    <div className="flex items-center justify-center space-x-3">
                                        <h1 className="text-[#F4B0E9] text-xl lg:text-2xl font-helvetica-compressed tracking-wider">Join Communtity</h1>
                                        <div className="flex space-x-3">
                                            <Link href="/">
                                                <InstagramIconAlt />
                                            </Link>
                                            <Link href="/">
                                                <XTwitterIconAlt />
                                            </Link>
                                            <Link href="/">
                                                <FacebookIconAlt />
                                            </Link>
                                            <Link href="/">
                                                <TelegramIconAlt />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center lg:w-1/2 mt-6 lg:mt-0">
                            <Image src={YiyaoImage} alt="Image" />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center mt-20 w-full">
                    <Image src={Logo} alt="Logo" width={872} />
                </div>

                <div className="flex flex-col lg:flex-row lg:justify-between items-center mt-14">
                    <h1 className="font-helvetica text-[#361566] text-sm text-center mt-4 lg:text-left lg:mt-0">&copy; 2024 GenZtechies X Codespace | All rights reserved.</h1>
                    <div className="flex flex-col items-center lg:items-end order-first lg:order-last">
                        <ul className="flex text-[#361566] font-helvetica-compressed text-lg tracking-wide justify-center lg:justify-start space-x-4 uppercase">
                            <Link href="/">
                                <li>initiatives</li>
                            </Link>
                            <Link href="/">
                                <li>Donate</li>
                            </Link>
                            <Link href="/">
                                <li>Gallery</li>
                            </Link>
                            <Link href="/">
                                <li>press</li>
                            </Link>
                        </ul>
                        <div className="flex space-x-3 mt-2">
                            <Link href="/">
                                <InstagramIcon />
                            </Link>
                            <Link href="/">
                                <XTwitterIcon />
                            </Link>
                            <Link href="/">
                                <FacebookIcon />
                            </Link>
                            <Link href="/">
                                <TelegramIcon />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}

export default Home;
