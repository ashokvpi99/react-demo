import React from 'react';
import Loader from 'react-loader-spinner'

const Spinner = (props) => props.active && <div className={'center'}><Loader type="Triangle" color="blue" height={80} width={80} /></div>;

export default Spinner;