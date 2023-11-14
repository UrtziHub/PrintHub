import PropTypes from "prop-types";

export default function ButtonMain({text}){
    return(
        <button className="bg-blue-950 px-8 py-2 text-white rounded-lg">{text}</button>
    )
}
ButtonMain.propTypes = {
    text: PropTypes.string.isRequired, // Valida que 'text' sea una cadena (string) y es requerida
};