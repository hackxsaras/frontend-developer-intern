"use client";
import Image from 'next/image'
import styles from './page.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFaceSmile,
  faFaceSadTear,
  faFaceSmileWink,
  faFaceLaughBeam,
  faFaceAngry,
  faFan,
  faStar,
  faFaceSmileBeam,
  faFaceGrin
} from '@fortawesome/free-solid-svg-icons';


import { faApple, faEnvira } from '@fortawesome/free-brands-svg-icons';

import {
  faStar as reStar
} from '@fortawesome/free-regular-svg-icons';

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const [logo, setLogo] = useState(faFaceSmile);

  useEffect(function () {
    gsap.to("#logo", {
      scrollTrigger: {
        trigger:".second",
        onUpdate: (self) => {
          if(self.progress <= 0)
            setLogo(faFaceSmile);
          else
            setLogo(faFaceSmileWink);
        }
      }, // start the animation when ".box" enters the viewport (once)
    });
    gsap.to(".big-circle", {
      rotation:360,
      duration:2,
      ease:"out"
    });
    gsap.to(".selem", {
      rotation:180,
      duration:8,
      repeat:-1
    })
    gsap.set(".bluemove", {
      x:100,
      y:10,
      opacity:0.5,
      rotation:45
    })
    gsap.to(".bluemove", {
      x:0,
      y:0,
      opacity:1,
      rotation:0,
      scrollTrigger:{
        trigger:".second",
        scrub:0.2,
        // markers:true,
        start:"start bottom",
        end:"center center"
      }
    })
    gsap.to(".firstcard", {
      css:{
        marginLeft:-1200
      },
      scrollTrigger:{
        trigger:".second",
        scrub:0.2,
        start:"start bottom",
        end:"bottom center"
      }
    })
    gsap.set(".smiley", {
      opacity:0,
      y:100
    })
    gsap.to(".smiley", {
      opacity:1,
      y:0,
      scrollTrigger:{
        trigger:".third",
        scrub:0.2,
        // markers:true,
        start:"start bottom",
        end:"center center"
      }
    })
    gsap.set(".skymove", {
      x:100,
      y:10,
      opacity:0.5,
      rotation:45
    })
    gsap.to(".skymove", {
      x:0,
      y:0,
      opacity:1,
      rotation:0,
      scrollTrigger:{
        trigger:".fourth",
        scrub:0.2,
        // markers:true,
        start:"start bottom",
        end:"center center"
      }
    })
    
    gsap.set(".op1", {
      opacity:0
    })
    
    gsap.set(".op1", {
      opacity:1,
      scrollTrigger:{
        trigger:".fifth",
        scrub:0.2,
        // markers:true,
        start:"start bottom",
        end:"center center"
      }
    })
    
    gsap.set(".s1", {
      scale:0.5
    })
    
    gsap.set(".s1", {
      scale:1,
      scrollTrigger:{
        trigger:".fifth",
        scrub:0.2,
        // markers:true,
        start:"start bottom",
        end:"center center"
      }
    })
  }, [])
  return (
    <div className={styles.main}>
      <div className={styles.nav}>
        <div id="logo" className="w-10 h-10 text-violet-600">
          <FontAwesomeIcon icon={logo}></FontAwesomeIcon>
        </div>
      </div>
      <div className={styles.sectionContainer}>
        <div className={`${styles.container} first mt-[10vh]`}>
          <div className="overflow-hidden bg-violet-100 rounded-2xl flex flex-1 justify-center items-center p-12">
            <div className="selem absolute text-green-300 box-content -top-4 left-20 w-14 h-14 rotate-[-90deg]">
              <FontAwesomeIcon icon={faEnvira}></FontAwesomeIcon>
            </div>
            <div className="selem absolute text-green-300 box-content top-20 left-80 w-8 h-8 rotate-[15deg]">
              <FontAwesomeIcon icon={faEnvira}></FontAwesomeIcon>
            </div>
            <div className="selem absolute text-red-300 top-20 right-24 w-6 h-6 rotate-[-15deg]">
              <FontAwesomeIcon icon={faFan}></FontAwesomeIcon>
            </div>
            <div className="selem absolute text-yellow-300 left-20 bottom-24 w-6 h-6 rotate-[-15deg]">
              <FontAwesomeIcon icon={faFan}></FontAwesomeIcon>
            </div>
            <div className="selem absolute text-pink-500 bottom-20 right-28 w-10 h-10 rotate-[-15deg]">
              <FontAwesomeIcon icon={faFan}></FontAwesomeIcon>
            </div>
            <div className={styles.left}>
              <div className={styles.appName}>Ahead App</div>
              <div className={styles.heading}>Master your life by mastering emotions</div>
              <div className="flex items-center  my-12">
                <div className="bg-black px-4 py-3 text-white whitespace-nowrap rounded">Download from <FontAwesomeIcon className="inline w-6 h-6" icon={faApple}></FontAwesomeIcon></div>
                <div className='flex flex-col ml-5'>
                  <div className="flex text-yellow-300 items-center">
                    <FontAwesomeIcon className="w-6 h-6" icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className="w-6 h-6" icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className="w-6 h-6" icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className="w-6 h-6" icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className="w-6 h-6" icon={faStar}></FontAwesomeIcon>
                  </div>
                  <div className='text-sm'>100+ AppStor e reviews</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className='absolute rounded-full w-[350px] h-[350px] bg-violet-200 flex items-center justify-center'>
                <img src="/images/mobile.png" className='w-[450px] max-w-none' />
              </div>
              <div className="big-circle w-[500px] h-[500px] rounded-full border-dashed border-gray-300 border-4">
                <div className="absolute text-sky-300 border-8 box-content border-white rounded-full top-20 w-12 h-12 rotate-[-15deg]">
                  <FontAwesomeIcon icon={faFaceSadTear}></FontAwesomeIcon>
                </div>
                <div className="absolute text-pink-300 border-8 box-content border-white rounded-full bottom-20 w-14 h-14 rotate-[15deg]">
                  <FontAwesomeIcon icon={faFaceLaughBeam}></FontAwesomeIcon>
                </div>
                <div className="absolute text-red-400 border-8 box-content border-white rounded-full top-56 w-10 h-10 -right-7 rotate-[15deg]">
                  <FontAwesomeIcon icon={faFaceAngry}></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.container} second`}>
          <div className="flex justify-center p-12">
            <div className='flex-1 text-center font-semibold text-4xl mx-12'>EQ beats IQ</div>
            <div className='flex-1 mx-12'>People with high emotional intelligence live more fulfilled lives. They tend to be happier and have healthier relationships.</div>
            <div className='flex-1 mx-12'>They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.</div>
          </div>
          <div className="p-12">
            <div className='font-bold text-5xl my-12 flex items-center'>
              <div>Does this sound familiar?</div>
              <FontAwesomeIcon className="bluemove text-sky-300 w-12 h-12 ml-6 box-content border-sky-100 rotate-[-20deg] border-8 rounded-full" icon={faFaceSmileWink}></FontAwesomeIcon>
            </div>
            <div className='flex overflow-hidden align-center justify-center'>
              <div className={`${styles.card} firstcard`}>
                <div className={styles.emoji}>😋</div>
                <div className='font-bold my-2'>You argue with a colleague</div>
                <div className={styles.details}>
                  You get angry and defensive, instead of staying open and working towards common ground.
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.emoji}>😋</div>
                <div className='font-bold my-2'>You argue with a colleague</div>
                <div className={styles.details}>
                  You get angry and defensive, instead of staying open and working towards common ground.
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.emoji}>😋</div>
                <div className='font-bold my-2'>You argue with a colleague</div>
                <div className={styles.details}>
                  You get angry and defensive, instead of staying open and working towards common ground.
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.emoji}>😋</div>
                <div className='font-bold my-2'>You argue with a colleague</div>
                <div className={styles.details}>
                  You get angry and defensive, instead of staying open and working towards common ground.
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.emoji}>😋</div>
                <div className='font-bold my-2'>You argue with a colleague</div>
                <div className={styles.details}>
                  You get angry and defensive, instead of staying open and working towards common ground.
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.emoji}>😋</div>
                <div className='font-bold my-2'>You argue with a colleague</div>
                <div className={styles.details}>
                  You get angry and defensive, instead of staying open and working towards common ground.
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.emoji}>😋</div>
                <div className='font-bold my-2'>You argue with a colleague</div>
                <div className={styles.details}>
                  You get angry and defensive, instead of staying open and working towards common ground.
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.emoji}>😋</div>
                <div className='font-bold my-2'>You argue with a colleague</div>
                <div className={styles.details}>
                  You get angry and defensive, instead of staying open and working towards common ground.
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.emoji}>😋</div>
                <div className='font-bold my-2'>You argue with a colleague</div>
                <div className={styles.details}>
                  You get angry and defensive, instead of staying open and working towards common ground.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.container} third`}>

          <div className="overflow-hidden bg-pink-50 flex justify-center items-center flex-1 rounded-3xl p-16">
            <div className="selem absolute text-green-300 box-content -top-4 left-20 w-14 h-14 rotate-[-90deg]">
              <FontAwesomeIcon icon={faEnvira}></FontAwesomeIcon>
            </div>
            <div className="selem absolute text-green-300 box-content top-20 left-80 w-8 h-8 rotate-[15deg]">
              <FontAwesomeIcon icon={faEnvira}></FontAwesomeIcon>
            </div>
            <div className="selem absolute text-red-300 top-20 right-24 w-6 h-6 rotate-[-15deg]">
              <FontAwesomeIcon icon={faFan}></FontAwesomeIcon>
            </div>
            <div className="selem absolute text-yellow-300 left-20 bottom-24 w-6 h-6 rotate-[-15deg]">
              <FontAwesomeIcon icon={faFan}></FontAwesomeIcon>
            </div>
            <div className="absolute text-pink-500 bottom-20 right-28 w-10 h-10 rotate-[-15deg]">
              <FontAwesomeIcon icon={faFan}></FontAwesomeIcon>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full">Built out of Frustration</div>
              <div className="w-full text-4xl font-bold my-10">Meet the ahead app</div>
              <div className='w-48 h-48 border-8 border-gray-100 bg-white rounded-full flex items-center justify-center'>
                <FontAwesomeIcon className='smiley text-violet-300 w-24 h-24' icon={faFaceGrin} />
              </div>
            </div>
            <div className="max-w-[50%] p-12">
              A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence. <br /> <br /> Think of it as a pocket cheerleader towards a better, more fulfilling.
            </div>
          </div>
        </div>
        <div className={`${styles.container} fourth`}>

          <div className={styles.fourth}>
            <div className={styles.left}>
              <div className={styles.appName}>Wrong with self-improvemnt & how we're fixing it.</div>
              <div className="flex items-center">
                <div className={styles.heading}>Self-improvement. Ugh.</div>
                <FontAwesomeIcon className="skymove text-sky-300 w-12 h-12 ml-6 box-content border-sky-100 rotate-[-20deg] border-8 rounded-full" icon={faFaceSmileWink}></FontAwesomeIcon>
              </div>
              <div className="flex flex-1 px-36 pt-12">
                <div className={`${styles.marker} translate-x-2`}></div>
                <div className='descs flex-1'>
                  <div className='desc mb-6 flex'>
                    <div className='bg-blue-800 w-3 h-3 rounded-full box-content border-4 border-indigo-100/[.70] -translate-x-1 -translate-y-1'></div>
                    <div className='mx-12 flex-1'>
                      <div className='font-bold mb-6 text-xl'>It's not as easy as 1-2-3.</div>
                      <div>The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know(and nothing else).</div>
                    </div>
                  </div>
                  <div className='desc mb-6 flex'>
                    <div className='bg-blue-800 w-3 h-3 rounded-full'></div>
                    <div className='mx-12 flex-1'>
                      <div className='font-bold mb-6 text-xl'>It's not as easy as 1-2-3.</div>
                      <div>The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know(and nothing else).</div>
                    </div>
                  </div>
                  <div className='desc mb-6 flex'>
                    <div className='bg-blue-800 w-3 h-3 rounded-full'></div>
                    <div className='mx-12 flex-1'>
                      <div className='font-bold mb-6 text-xl'>It's not as easy as 1-2-3.</div>
                      <div>The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know(and nothing else).</div>
                    </div>
                  </div>

                  <div className='desc mb-6 flex'>
                    <div className='bg-blue-800 w-3 h-3 rounded-full'></div>
                    <div className='mx-12 flex-1'>
                      <div className='font-bold mb-6 text-xl'>It's not as easy as 1-2-3.</div>
                      <div>The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know(and nothing else).</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white to-transparent"></div>
          </div>
        </div>

        <div className={`${styles.container} fifth`}>
          <div className="h-full w-full bg-sky-100 rounded-3xl flex-col flex px-20">
            <div className='text-center mt-20'>Let your friends, family and co-workers (anonymously) rate your social skills.</div>
            <div className='text-center mt-8 text-5xl font-bold'>Ever wondered what others think of you?</div>
            <div className='border-dashed border-t-2 border-orange-400 mx-48 h-0 mt-24 flex justify-between text-white'>
              <div className='op1 bg-orange-400 w-8 h-8 rounded-full -translate-y-4 flex justify-center items-center shadow-[0_0_20px_#f50]'>1</div>
              <div className='op1 bg-orange-400 w-8 h-8 rounded-full -translate-y-4 flex justify-center items-center shadow-[0_0_20px_#f50]'>2</div>
              <div className='op1 bg-orange-400 w-8 h-8 rounded-full -translate-y-4 flex justify-center items-center shadow-[0_0_20px_#f50]'>3</div>
            </div>
            <div className='mx-12 mt-12 flex justify-between text-center text-xs'>
              <div className='flex-1 px-5'>Answer questions on social skills.</div>
              <div className='flex-1 px-5'>Let others anonymously answer the same questions about you.</div>
              <div className='flex-1 px-5'>Find out where you and others see things the same way - and where not!</div>
            </div>
            <div className='mx-40 my-12 rounded-2xl bg-white flex-1 flex items-center text-sm whitespace-nowrap'>
              <div className='border-t-2 border-gray-200 h-0 flex-1 flex mx-10 justify-between'>
                <div className='w-5 h-5 rounded-full -translate-y-3 bg-violet-600'>
                  <div className='s1 py-2 px-3 text-white bg-violet-600 absolute -top-12 rounded-lg'>You</div>
                </div>
                <div className='w-5 h-5 rounded-full -translate-y-3 bg-sky-400'>
                  <div className='s1 py-2 px-3 text-white bg-sky-400 absolute top-8 rounded-lg'>Anonymous 1</div>
                </div>
                <div className='w-5 h-5 rounded-full -translate-y-3 bg-orange-400'>
                  <div className='s1 py-2 px-3 text-white bg-orange-400 absolute -top-12 rounded-lg'>Anonymous 2</div>
                </div>
                <div className='w-5 h-5 rounded-full -translate-y-3 bg-green-400'>
                  <div className='s1 py-2 px-3 text-white bg-green-400 absolute top-8 rounded-lg'>Anonymous 3</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.container} sixth`}>
          <div className="h-full w-full rounded-3xl flex-col flex items-center px-48 text-center justify-center px-20">
            <div>We take privacy very seriously</div>
            <div className='text-3xl font-bold mt-4'>Before you get started</div>
            <div className='text-xl font-semibold mt-8'>"We won't share your answers with anyone (and won't ever tell you which friends said what about you)"</div>
            <div className='bg-black text-white py-2 px-4 rounded-3xl mt-20 text-xs'>Start a test</div>
            <div className='mt-4 text-sm'>Takes only 5 min</div>
          </div>
        </div>
        <div className={`${styles.container} seventh`}>
          <div className="h-full w-full rounded-3xl bg-violet-100 flex p-12">
            <div className='flex-[1.25] h-full pr-20 overflow-hidden'>
              <div className="text-4xl font-bold">Work with us</div>
              <div className='bg-white p-8 my-8 rounded-xl'>
                <FontAwesomeIcon className="h-8 w-8 text-violet-300" icon={faFaceSmileWink}></FontAwesomeIcon>
                <div className='text-xl font-bold my-4'>About</div>
                <div className=''>At ahead our goal is to make self improvement fun and lasting. We know there's a way how to make it work. And that's what aHead is all about!</div>
              </div>
              <div className='bg-pink-50 p-8 rounded-xl'>
                <div className='text-xl font-bold my-4'>Product</div>
                <div className=''>Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, partner, or manager - like we did...</div>
              </div>
            </div>
            <div className="flex-1 flex flex-col h-full">
              <div className="text-5xl text-right text-violet-700 font-semibold pr-12">ahead</div>
              <div className='flex-1 overflow-y-auto px-12'>

                <div className='p-8 bg-white my-8 rounded-xl'>
                  <div className='text-xl font-bold my-4'>Product</div>
                  <div className=''>Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, partner, or manager - like we did...</div>
                </div>
                <div className='p-8 bg-white my-8 rounded-xl'>
                  <div className='text-xl font-bold my-4'>Product</div>
                  <div className=''>Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, partner, or manager - like we did...</div>
                </div>
                <div className='p-8 bg-white my-8 rounded-xl'>
                  <div className='text-xl font-bold my-4'>Product</div>
                  <div className=''>Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, partner, or manager - like we did...</div>
                </div>
                <div className='p-8 bg-white my-8 rounded-xl'>
                  <div className='text-xl font-bold my-4'>Product</div>
                  <div className=''>Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, partner, or manager - like we did...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.container} eighth`}>
          <div className="h-full w-full rounded-3xl p-12 flex flex-col">
            <div className='text-4xl font-bold'>Open Vacancies</div>
            <div className='flex my-16'>
              <div className='p-8 bg-orange-50 mx-8 rounded-xl flex-1'>
                <div className='text-xl'>Senior Full-Stack Engineer</div>
                <ul className='list-disc ml-4 mt-2   leading-9 text-xs' >
                  <li>Full-time position</li>
                  <li>Berlin or remote</li>
                  <li>$65-85k, 0.5-1.50% equity share options</li>
                </ul>
              </div>
              <div className='p-8 bg-orange-50 mx-8 rounded-xl flex-1'>
                <div className='text-xl'>Senior Designer</div>
                <ul className='list-disc ml-4 mt-2 leading-9 text-xs' >
                  <li>Full-time position</li>
                  <li>Berlin or remote</li>
                  <li>$65-85k, 0.5-1.50% equity share options</li>
                </ul>
              </div>
              <div className='p-8 bg-orange-50 mx-8 rounded-xl flex-1'>
                <div className='text-xl'>Superstar Intern</div>
                <ul className='list-disc ml-4 mt-2 leading-9 text-xs' >
                  <li>Full-time position</li>
                  <li>Berlin or remote</li>
                  <li>$65-85k, 0.5-1.50% equity share options</li>
                </ul>
              </div>
            </div>
            <div className='border-t border-black-400 w-full flex flex-col flex-1 justify-between items-center'>
              <div className='icon h-12'></div>
              <div className='text-violet-700 font-semibold text-2xl'>ahead</div>
              <div className='flex'>
                <div className='mx-8 flex items-center'>
                  <div className='w-8 h-8 rounded-full bg-sky-300'></div>
                  <div>AugustraBe 26, 10117 Berlin</div>
                </div>
                <div className='mx-8 flex items-center'>
                  <div className='w-8 h-8 rounded-full bg-sky-300'></div>
                  <div>hi@ahead-app.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
