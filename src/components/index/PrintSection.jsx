import ButtonMain from "../ButtonMain.jsx";

export default function PrintSection(){
    return(
        <section className="bg-blue-950">
            <div className=" flex flex-col items-center pt-10 text-white md:pt-20 pb-5 ">
                <h1 className="text-4xl md:text-5xl">SCAN AND PRINT</h1>
                <h1 className="text-5xl md:text-6xl font-bold mb-10">RIGHT NOW</h1>
                <ButtonMain class="mt-10" text={"Print"}/>
            </div>
        </section>
    )
}