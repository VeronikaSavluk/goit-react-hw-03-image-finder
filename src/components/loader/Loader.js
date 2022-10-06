import { Vortex } from 'react-loader-spinner';

const Loader = () => {
    return (
        <Vortex
            visible={true}
            height="50"
            width="50"
            colors={['Dallas Cowboys Blue', 'Astros Navy', 'SteelBlue', 'CornflowerBlue', 'LightBlue', 'LightCyan']}
        />
    )
};

export default Loader;