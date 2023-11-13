
import pice from '../../assets/piezas.jpg';
import CardPices from "../CardPices.jsx";
export default function PartsSection(){
    const cardPices = [
        {
            image: pice,
            title: "Reviving Retro PCs",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, voluptates?",
            hastag: ['image','love'],
        },
        {
            image: pice,
            title: "Another Title",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, voluptates?",
            hastag: ['image','love','The best','image','love','The best'],
        },
        {
            image: pice,
            title: "One More Title",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, voluptates?",
            hastag: ['image','love'],
        },
    ];
    return(
        <section className="text-blue-950">
            <div className="mx-2 flex flex-col items-center pt-20">
                <h1 className="text-3xl">GET THE HIGHEST QUALITY FOR YOUR 3D PARTS</h1>
                <h1 className="text-4xl font-bold">WITH THE BEST SERVICE</h1>
            </div>
            <div className="mt-10 pb-10 grid justify-items-center md:grid-cols-3 grid-cols-1 gap-4 md:mx-20 mx-3">
                {cardPices.map((item, index) => (
                    <CardPices
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        hastag={item.hastag}
                    />
                ))}
            </div>
        </section>
    )
}