import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, Content} from './Modal.styled'

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    componentDidMount() {
        window.addEventListener("keydown", this.handleKeydown);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeydown)
    }

    handleKeydown = (e) => {
        if (e.code === "Escape") {
            this.props.onClose();
        }
    }

    handleBackdrop = (e) => {
        if (e.target === e.currentTarget) {
            this.props.onClose();
    }
}

    render() {
        return createPortal(
            <Backdrop onClick={this.handleBackdrop}>
                <Content>
                    {this.props.children}
                </Content>
            </Backdrop>,
            modalRoot,
        );
    }
}

Modal.propTypes = {
    handleKeydown: PropTypes.func,
    handleBackdrop: PropTypes.func,
    onClose: PropTypes.func,
}

export default Modal;