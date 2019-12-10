import React, {useState} from 'react'
import s from "./Pagination.module.css";
import cn from "classnames";

let Pagination = ({currentPage, totalItemsCount, pageSize, onPageChanged, portionSize = 10}) => {

    let [portionNumber, setPortionNumber] = useState(1)

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return <div className={s.paginator}>
        {portionNumber > 1 &&
        <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>}
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                    return <span
                        key={p}
                        className={cn({[s.selectedPage]: currentPage === p}, s.pageNumber)}
                        onClick={() => {
                            onPageChanged(p)
                        }}>
                    {p}
            </span>
                }
            )
        }
        {portionCount > portionNumber &&
        <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>Next</button>
        }
    </div>
}

export default Pagination;
