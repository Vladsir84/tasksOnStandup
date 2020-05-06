import React from 'react';


function Spinner(props) {

    const { size } = props;

    const styles = {
        width: size,
        height: size,
    }


    return (
        <span className="spinner"
            style={styles}
        >
        </span>
    )
};

export default Spinner;