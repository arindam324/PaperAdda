'use client'

import {ArrowLeft, ArrowRight} from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

const CourseSection = () => {
    return (
        <section className={"px-20 py-10"}>
            <div className={"flex items-center justify-between"}>
                <h2 className={"text-3xl font-semibold "}>Course Section</h2>

                <div className={"flex items-center space-x-4"}>
                    <ArrowLeft/>
                    <ArrowRight/>
                </div>
            </div>

            <div className={"grid grid-cols-5 gap-5 mt-5"}>
                {new Array(5).fill(0).map((_, index) => (
                    <Card  key={index}>
                        <CardContent className={"p-0 rounded-xl"}>
                            <img alt={"w-[150px] h-[200px] rounded-xl"}
                                 src={"https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&w=800"}/>

                            <div className={"px-4 py-2"}>
                            <h3 className={"text-xs font-medium mt-2 text-gray-500"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, atque.
                            </h3>

                            <Button  className={"mt-2 text-xs  w-full "}>
                                View Course
                            </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}


            </div>

        </section>
    )
}


export default CourseSection