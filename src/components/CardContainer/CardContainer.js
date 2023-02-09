import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {fetchDataAsync} from '../Input/inputSlice';
import {Card} from '../Card/Card';
import styles from './CardContainer.module.css';
import PropTypes from "prop-types";

function CardContainer({repos, totalCount, query, page}) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDataAsync({query, page}));
    }, [query, page, dispatch]);

    return (
        <div className={styles.CardContainer}>
            {
                repos.length > 0
                    ? repos.map((repo) => <Card key={repo.id} data={repo}/>)
                    : <div className={styles.error}>{'По Вашому запиту не знайдено жодного репозиторія'}</div>}
        </div>
    );
}

CardContainer.propTypes = {
    repos: PropTypes.array.isRequired,
    totalCount: PropTypes.number.isRequired,
    query: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
    return {
        repos: state.input.repos,
        totalCount: state.input.totalCount,
        query: state.input.query,
        page: state.input.page,
    };
}

export default connect(mapStateToProps)(CardContainer);
