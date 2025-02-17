import React, { useEffect } from 'react';
import githubimage from './imageused/githubimgae.png'
import linkedimage from './imageused/Linkedin.png';
import shape from './imageused/Lshape.png';
import barimage from './imageused/barimage.png';
import { motion } from 'framer-motion';

function Home() {
    useEffect(() => {
        const link = document.createElement('link');
        link.href = "https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Pre:wght@400..700&family=Merienda:wght@300..900&family=Poiret+One&family=Quicksand:wght@300..700&display=swap";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    }, []);

    return (
        <>

            <div
                className='bg-[#1D1D20] min-h-screen absolute overflow-hidden top-0 p-4 md:p-6'>
                {/* Decorative shapes */}

                <motion.div
                    className='absolute scale-120 top-5 left-8 md:left-5 w-24 md:w-32'
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}>
                    <img
                        src={shape} alt=""
                        className='w-full h-auto' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className='absolute scale-120 bottom-5 right-8 md:right-10 w-24 md:w-32 transform rotate-180'>
                    <img
                        src={shape} alt=""
                        className='w-full h-auto' />
                </motion.div>

                {/* Credit text */}
                <div
                    style={{ fontFamily: 'Merienda' }}
                    className='absolute p-1 rounded :right-10 bottom-6 lg:right-14 md:right-14 text-white text-sm md:text-base hover:bg-gray-700'>
                    its.ujjwalgoel@gmail.com
                </div>

                {/* Social links */}
                <div
                    className='absolute top-6 right-4 md:right-20 flex gap-2 z-10'>
                    <a
                        href="https://github.com/ItsUjjwalGoel"
                        target='blank'
                        className='p-2 rounded-full hover:bg-gray-400 transition-colors'>
                        <img
                            src={githubimage}
                            alt="GitHub"
                            className='w-6 md:w-8 h-6 md:h-8 rounded-2xl' />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/its-ujjwal/"
                        target='blank'
                        className='p-2 rounded-full hover:bg-gray-400 transition-colors'>
                        <img src={linkedimage}
                            alt="LinkedIn"
                            className='w-6 md:w-8 h-6 md:h-8 rounded-2xl' />
                    </a>
                </div>

                {/* Main content */}
                <div
                    className='flex flex-col lg:flex-row pt-20 md:pt-32 gap-8 md:gap-12'>
                    {/* Left section */}
                    <div
                        className='w-full lg:w-3/5 space-y-6 px-5 md:px-8 lg:px-29'>
                        <motion.div initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 1 }}
                            transition={{ duration: 0.8 }}>
                            <h1
                                style={{ fontFamily: 'Poiret One' }}
                                className='text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl'
                            >
                                Welcome.
                            </h1></motion.div>

                        <div
                            className='relative'>
                            <div
                                className='absolute top-0 -left-10 scale-y-80 scale-x-35 z-2 '>
                                <img
                                    src={barimage} />
                            </div>

                            <motion.div
                                style={{ fontFamily: 'Quicksand' }}
                                className='text-white text-sm sm:text-base lg:text-lg lg:pl-12 md:pl-6 leading-relaxed'
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}>
                                Hi, I'm Ujjwal, a B.Tech 2nd year student and passionate frontend developer.
                                I love creating engaging digital experiences through projects like my currency
                                converter and other innovative web applications. When I'm not coding, you'll likely
                                find me playing the piano—a hobby that fuels my creativity and discipline.
                                <br /><br />
                                I'm proud to have earned a TCS CodeVita rank under 900 and to have performed well
                                in the ATL Marathon, milestones that reflect my determination and problem-solving skills. I
                                thrive on challenges and am always eager to learn and grow, both in my academic journey and
                                in the world of technology.
                            </motion.div>
                        </div>
                    </div>

                    {/* Right section */}
                    <div
                        className='w-full lg:w-2/5 px-4 md:px-8 lg:px-12'>
                        <motion.div initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}>
                            <h2
                                style={{ fontFamily: 'Quicksand' }}
                                className='text-white text-3xl sm:text-4xl mb-8 '>
                                Projects
                            </h2>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}>
                            <div
                                className=''>
                                <img
                                    src={shape} alt=""
                                    className='w-10 h-10' />
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}>
                            <div
                                className=' pl-4 lg:pl-10 relative'>

                                <div className="mb-4 w-auto relative">
                                    <a
                                        style={{
                                            textDecoration: 'none',
                                            color: "whitesmoke",
                                            fontFamily: 'Poiret One',
                                            position: 'relative',
                                        }}
                                        className="p-1 rounded font-bold hover:bg-gray-700"
                                        href="https://itsujjwalgoel.github.io/Netflix-UI-clone/"
                                        target="blank"
                                    >
                                        Netflix UI Clone
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: '-6px',
                                                left: 0,
                                                width: '100%',
                                                height: '2px',
                                                backgroundColor: '#e0b800',
                                            }}
                                        />
                                    </a>
                                </div>

                                <div
                                    className='mb-4'>
                                    <a
                                        style={{
                                            textDecoration: 'none',
                                            color: "whitesmoke",
                                            fontFamily: 'Poiret One',
                                            position: 'relative',
                                        }}
                                        className='p-1 rounded font-bold hover:bg-gray-700'
                                        target='blank'
                                        href="https://itsujjwalgoel.github.io/Guess-the-Number/">
                                        Guess The Number
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: '-6px',
                                                left: 0,
                                                width: '100%',
                                                height: '2px',
                                                backgroundColor: '#e0b800',
                                            }} />
                                    </a>
                                </div>
                                <div>
                                    <a
                                        style={{
                                            textDecoration: 'none',
                                            color: "whitesmoke",
                                            fontFamily: 'Poiret One',
                                            position: 'relative',

                                        }}
                                        className='p-1 rounded font-bold hover:bg-gray-700'
                                        target='blank'
                                        href="https://itsujjwalgoel.github.io/Currency_convertor/">
                                        Currency Convertor
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: '-6px',
                                                left: 0,
                                                width: '100%',
                                                height: '2px',
                                                backgroundColor: '#e0b800',
                                            }} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>

            </div >
        </>
    );
}

export default Home;
