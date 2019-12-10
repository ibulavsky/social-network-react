import React from 'react'
import Pagination from "../common/Pagination/Pagination"
import User from "./User"

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
    console.log(users)
    return <div>
        <Pagination currentPage={currentPage}
                    totalItemsCount={totalUsersCount}
                    pageSize={pageSize}
                    onPageChanged={onPageChanged}
                    portionSize={20}
        />
        <div>
            {users.map(u => <User
                    user={u}
                    key={u.id}
                    follow={props.follow}
                    unfollow={props.unfollow}
                    followingInProgress={props.followingInProgress}
                />
            )
            }
        </div>
    </div>
};

export default Users;
