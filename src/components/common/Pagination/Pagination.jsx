import React from 'react'
import s from "./Pagination.module.css";

let Pagination = ({currentPage, totalUsersCount, pageSize, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return <>
        {pages.map(p => {
            const onPageClick = () => {
                onPageChanged(p)
            }
            return <span className={currentPage === p && s.selectedPage}
                         onClick={onPageClick}>
                    {p}
            </span>
        }
        )
        }
    </>
}

export default Pagination;
