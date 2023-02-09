import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect, useDispatch} from 'react-redux';
import {setCurrentPage} from '../Input/inputSlice';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.css';

function Pagination({totalCount}) {
    const dispatch = useDispatch();
    const [postsPerPage] = useState(20);

    const paginate = ({selected}) => {
        dispatch(setCurrentPage(selected + 1));
    };

    return (
        <div className={styles.paginationWrapper}>
            <ReactPaginate
                onPageChange={paginate}
                pageCount={Math.ceil(totalCount / postsPerPage)}
                previousLabel={'Previous'}
                nextLabel={'Next'}
                containerClassName={'Pagination_paginationWrapper__casLf'}
                pageLinkClassName={'Pagination_button__CJVj1'}
                previousLinkClassName={'Pagination_button__CJVj1'}
                nextLinkClassName={'Pagination_button__CJVj1'}
                activeLinkClassName={'active'}
                activeClassName={'Pagination_activePage__AAm2h'}
            />
        </div>
    );
}

Pagination.propTypes = {
    totalCount: PropTypes.number.isRequired,
    query: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
    return {
        totalCount: state.input.totalCount,
        query: state.input.query,
        page: state.input.page,
    };
}

export default connect(mapStateToProps)(Pagination);
