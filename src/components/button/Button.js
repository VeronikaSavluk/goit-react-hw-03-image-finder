import { Btn } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({onClick}) => {
    return (
        <Btn type="button" onClick={() => {onClick()}}>Load more</Btn>
    )
}

Btn.propTypes = {
onClick: PropTypes.func,
}

export default Button;