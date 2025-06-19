import React from 'react'
import { NavLink } from 'react-router-dom'
import Counter from "../components/counter"
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion';
import { useRef } from 'react';


import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import animation from '../assets/loading.lottie'
import address from '../assets/address.lottie'
import customer from '../assets/customer.lottie'
import  employee from '../assets/employee.lottie'
import award from '../assets/award.lottie'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

function about() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <>
            <div ref={ref} className="text-white py-10  md:py-20 lg:mt-40">
                <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col md:flex-row  items-start md:items-center justify-between">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1 }}
                    >
                        {/* Left Section */}
                        <div className="w-full md:w-3/4 space-y-5 ">
                            <h1 className="text-gray-800 text-3xl md:text-4xl font-bold">
                                A movement of Go Green Pakistan!
                            </h1>
                            <p className="text-gray-600 text-base md:text-lg max-w-md">
                                As we all know by Green movement are all about being concerned about the environment and we created several steps to help the environment..
                            </p>
                            <p className="text-gray-600 text-base md:text-lg max-w-md">
                                1- Whenever a person downloads our app “GO DEKHO PAKISTAN” we plant a tree on your name. 2- We started recycling the plastic and making the most from it. And there are many more ways where we are trying to look after Environment by the help of GO DEKHO PAKISTAN Application.
                            </p>
                            {/* rest of your content */}
                        </div>
                    </motion.div>
                    {/* Right Section - Cards */}
                    <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Card>
                            <CardHeader className="bg-white p-4">

                                <div className='flex gap-4 items-center'>



                                    <div>

                                        <DotLottieReact
                                            src={customer}
                                            // loop
                                            autoplay
                                            style={{ width: 80, height: 80 }}
                                        />
                                    </div>

                                    <div>
                                        <CardTitle>
                                            <h2 className="text-gray-800 text-3xl font-bold"><Counter target={7518} /></h2>
                                        </CardTitle>
                                        <CardDescription>
                                            <p className="text-gray-600">Projects Done</p>
                                        </CardDescription>
                                    </div>

                                </div>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader className="bg-white p-4">

                                <div className='flex gap-4 items-center'>



                                    <div>

                                        <DotLottieReact
                                            src={address}
                                            // loop
                                            autoplay
                                            style={{ width: 80, height: 80 }}
                                        />
                                    </div>

                                    <div>
                                        <CardTitle>
                                            <h2 className="text-gray-800 text-3xl font-bold"><Counter target={3472} /></h2>
                                        </CardTitle>
                                        <CardDescription>
                                            <p className="text-gray-600">Happy Customer</p>
                                        </CardDescription>
                                    </div>

                                </div>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader className="bg-white">

                                <div className='flex gap-4 items-center'>



                                    <div>

                                        <DotLottieReact
                                            src={employee}
                                            // loop
                                            autoplay
                                            style={{ width: 80, height: 80 }}
                                        />
                                    </div>

                                    <div>
                                        <CardTitle>
                                            <h2 className="text-gray-800 text-3xl font-bold"><Counter target={4537} /></h2>
                                        </CardTitle>
                                        <CardDescription>
                                            <p className="text-gray-600">Expert Employees</p>
                                        </CardDescription>
                                    </div>

                                </div>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader className="bg-white">

                                <div className='flex gap-4 items-center'>



                                    <div>

                                        <DotLottieReact
                                            src={award}
                                            // loop
                                            autoplay
                                            style={{ width: 80, height: 80 }}
                                        />
                                    </div>

                                    <div>
                                        <CardTitle>
                                            <h2 className="text-gray-800 text-3xl font-bold"><Counter target={2184} /></h2>
                                        </CardTitle>
                                        <CardDescription>
                                            <p className="text-gray-600">Awards Won</p>
                                        </CardDescription>
                                    </div>

                                </div>
                            </CardHeader>
                        </Card>


                    </div>
                </div>
            </div>

        </>
    )
}

export default about