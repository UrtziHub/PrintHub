import ButtonMain from "./ButtonMain.jsx";
import PropTypes from "prop-types";

export default function CardPices({image, title,description,hastag}){
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 flex flex-col hover:[&>img]:scale-105">
            <img className="w-full cursor-pointer transition ease-in delay-400" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-base text-blue-950">{description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {hastag.map((hastag, index) => (
                    <span key={`hashtag-id-${index}`} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #{hastag}
                    </span>
                ))}
            </div>
            <div className="px-6 pt-4 pb-4 flex-grow flex justify-center items-end">
                <ButtonMain text="Download pice" />
            </div>
        </div>
    );
}
CardPices.propTypes = {
    image: PropTypes.string.isRequired, // Se espera una URL de imagen (string) y es requerida
    title: PropTypes.string.isRequired, // Se espera un título (string) y es requerido
    description: PropTypes.string.isRequired, // Se espera una descripción (string) y es requerida
    hastag: PropTypes.arrayOf(PropTypes.string).isRequired, // Se espera un array de strings (array) y es requerido
    // Puedes agregar más validaciones de acuerdo a tus necesidades
};