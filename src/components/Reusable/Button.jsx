import { useState } from "react";
import PropTypes from 'prop-types';


const Button = ({text, variant, disabled}) => {
   const [state] = useState({
       'outline':'border-2 text-purple-500 border-purple-500 hover:bg-purple-500 hover:text-slate-100',
       'default': 'bg-purple-500 hover:bg-purple-700',
       'text-only': 'text-purple-500 hover:text-purple-700',
       'disabled': 'bg-purple-300 text-purple-700'
   })

    return ( <button disabled={disabled} className={`${state[variant]} text-2xl py-2 px-4 text-slate-100 rounded-lg hover:transition duration-300 ease-in-out`}>
        {text}
    </button> );
}

Button.defaultProps = {
    disabled: false,
    variant: 'default',
    text: 'text'
}

Button.propTypes = {
    disabled: PropTypes.bool,
    variant: PropTypes.string,
    texr: PropTypes.string.isRequired
}

export default Button;