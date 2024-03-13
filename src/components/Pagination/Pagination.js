import classNames from 'classnames/bind';
import styles from './Pagination.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Pagination({ totalPages, setPage }) {
    const [currentPage, setCurrentPage] = useState(1);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
        setPage(pageNumber);
    };
    return (
        <div className={cx('wrapper')}>
            {currentPage > 1 ? (
                <button
                    className={cx('btn-return', 'btn-page')}
                    onClick={() => handleClick(currentPage > 1 ? currentPage - 1 : 1)}
                >
                    &lt;
                </button>
            ) : undefined}
            {[...Array(totalPages)].map((_, index) => (
                <button
                    key={index}
                    className={cx('btn-number', 'btn-page')}
                    onClick={() => handleClick(index + 1)}
                    style={{
                        backgroundColor: currentPage === index + 1 ? 'var(--color-theme)' : 'var(--color-content-box)',
                        color: currentPage === index + 1 ? 'var(--color-content-box)' : undefined,
                    }}
                >
                    {index + 1}
                </button>
            ))}
            {currentPage < totalPages ? (
                <button
                    className={cx('btn-next', 'btn-page')}
                    onClick={() => handleClick(currentPage < totalPages ? currentPage + 1 : totalPages)}
                >
                    &gt;
                </button>
            ) : undefined}
        </div>
    );
}

export default Pagination;
