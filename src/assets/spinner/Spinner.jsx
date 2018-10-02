import React from 'react';
import Loader from 'react-loaders';
import 'Spinner.scss';

const Spinner = (props) => <Loader type="square-spin" active={props.isLoading}/>;

export default Spinner;