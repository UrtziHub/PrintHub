import video2 from "../../assets/video.mp4"
export default function NewsSection(){
    return(
        <section className="mt-5 md:mx-32 xl:mx-72 text-blue-950 flex flex-col">
            <div className="flex items-center">
                <h1 className="text-5xl font-bold flex-1">Our community news</h1>
                <a className="text-lg text-end border-b border-black" href="#">See more news -) </a>
            </div>
            <div className="flex xl:flex-row flex-col gap-2 m-2 items-center">
                <video src={video2} autoPlay={true} muted={true} loop={true} className="m-10 flex-1 shadow hover:blur-[2px] hover:grayscale rounded w-full h-full transition ease-in-out "></video>
                <div className="flex-1 m-4">
                    <div className="flex xl:flex-row flex-col gap-2 items-start border-b border-gray-500">
                     <button>
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="h-6 w-6 self-center"><path d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z" stroke="currentColor" ></path><path d="M8.75 15.25V9.75" stroke="currentColor" ></path><path d="M15.25 15.25V9.75" stroke="currentColor" ></path><path d="M12 15.25V12.75" stroke="currentColor" ></path></svg>
                     </button>
                     <div className="flex flex-col gap-4 hover:text-black">
                         <h1 className="font-bold text-xl lg:text-[26px] richtext">Oversee yourt operations</h1>
                         <p className="lg:mb-11 text-base md:text-lg richtext">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad! Lorem ipsum dolor sit.</p>
                     </div>
                    </div>
                    <div className="flex xl:flex-row flex-col gap-2 items-start border-b border-gray-500 mt-4">
                        <button>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="h-6 w-6 self-center"><path d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z" stroke="currentColor" ></path><path d="M8.75 15.25V9.75" stroke="currentColor" ></path><path d="M15.25 15.25V9.75" stroke="currentColor" ></path><path d="M12 15.25V12.75" stroke="currentColor" ></path></svg>
                        </button>
                        <div className="flex flex-col gap-4 hover:text-black">
                            <h1 className="md:mb-5 lg:mb-7 font-bold text-xl lg:text-[26px] richtext">Oversee yourt operations</h1>
                            <p className="lg:mb-11 text-base md:text-lg richtext">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad! Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                    <div className="flex xl:flex-row flex-col gap-2 items-start border-b border-gray-500 mt-4">
                        <button>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="h-6 w-6 self-center"><path d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z" stroke="currentColor" ></path><path d="M8.75 15.25V9.75" stroke="currentColor" ></path><path d="M15.25 15.25V9.75" stroke="currentColor" ></path><path d="M12 15.25V12.75" stroke="currentColor" ></path></svg>
                        </button>
                        <div className="flex flex-col gap-4 hover:text-black">
                            <h1 className="md:mb-5 lg:mb-7 font-bold text-xl lg:text-[26px] richtext">Oversee yourt operations</h1>
                            <p className="lg:mb-11 text-base md:text-lg richtext">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad! Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}