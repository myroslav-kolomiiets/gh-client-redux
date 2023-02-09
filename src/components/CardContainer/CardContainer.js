import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {fetchDataAsync} from '../Input/inputSlice';
import {Card} from '../Card/Card';
import {Info} from '../Info/Info';
import styles from './CardContainer.module.css';
import PropTypes from "prop-types";

function Cards({repos}) {
    return repos.map((repo) => {
        return <Card key={repo.id} data={repo}/>;
    });
}

function CardContainer({repos, totalCount, query, page}) {
    const dispatch = useDispatch();

    const isReposExist = repos.length > 0;

    useEffect(() => {
        dispatch(fetchDataAsync({query, page}));
    }, [query, page, dispatch]);

    return (
        <div className={styles.CardContainer}>
            {
                isReposExist
                    ? <Cards repos={repos}/>
                    : <Info/>}
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
