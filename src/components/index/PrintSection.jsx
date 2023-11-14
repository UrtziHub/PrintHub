import ButtonMain from "../ButtonMain.jsx";
import bgImage from '../../assets/Equipos-de-impresión-3D.jpg';

export default function PrintSection() {
    const sectionStyle = {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover', // You can adjust this based on your needs
    };

    return (
        <section style={sectionStyle} className="h-[500px]">
            <div className={`flex flex-col items-center pt-10 text-white md:pt-20 pb-5`}>
                <h1 className="text-4xl md:text-5xl">SCAN AND PRINT</h1>
                <h1 className="text-5xl md:text-6xl font-bold mb-10">RIGHT NOW</h1>
                <ButtonMain className="mt-10" text={"Print"} />
            </div>
        </section>
    );
}