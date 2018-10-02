import React from 'react';
import Loader from 'react-loader-spinner'

const Spinner = (props) => {
    const isActive  = props.active ? <div style={{marginLeft: 500}}><Loader type="ThreeDots" color="blue" height={80} width={80} /></div>: null;
    return isActive;
};

export default Spinner;