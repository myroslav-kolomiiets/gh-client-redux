import React, {useState, useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {setNewQuery} from './inputSlice';
import useDebounce from './useDebounce';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

function Input() {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('react');
    const debouncedSearchQuery = useDebounce(searchQuery, 500)

    useEffect(
        () => {
            if (debouncedSearchQuery) {
                dispatch(setNewQuery(debouncedSearchQuery))
            }
        },
        [debouncedSearchQuery, dispatch]
    );

    return (
        <div className={styles.container}>
            <input
                className={styles.textbox}
                aria-label="Set query"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
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
