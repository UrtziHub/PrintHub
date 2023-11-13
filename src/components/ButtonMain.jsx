import PropTypes from "prop-types";

export default function ButtonMain({text}){
    return(
        <button className="text-white bg-[#2745ad] py-3 px-10 rounded-lg">{text}</button>
    )
}
ButtonMain.propTypes = {
    text: PropTypes.string.isRequired, // Valida que 'text' sea una cadena (string) y es requerida
};