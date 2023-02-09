import React from 'react';
import {connect, useDispatch} from 'react-redux';
import {setNewQuery} from './inputSlice';
import styles from './Input.module.css';
import PropTypes from "prop-types";

function Input({query}) {
    const dispatch = useDispatch();
    const onInputChange = (e) => {
        dispatch(setNewQuery(e.target.value))
    }

    return (
        <div className={styles.container}>
            <input
                className={styles.textbox}
                aria-label="Set query"
                value={query}
                onChange={onInputChange}
            />
        </div>
    );
}

Input.propTypes = {
    query: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
    return {
        query: state.input.query
    };
}

export default connect(mapStateToProps)(Input);
