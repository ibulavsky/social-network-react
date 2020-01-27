import React from 'react'
import Pagination from "../common/Pagination/Pagination"
import User from "./User"
import s from "./Users.module.css"

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
    return <div className={s.usersContainer}>
        <Pagination currentPage={currentPage}
                    totalItemsCount={totalUsersCount}
                    pageSize={pageSize}
                    onPageChanged={onPageChanged}
                    portionSize={20}
        />
        <div className={s.users}>
            {users.map(u => <User
                    user={u}
                    key={u.id}
                    follow={props.follow}
                    unfollow={props.unfollow}
                    followingInProgress={props.followingInProgress}
                    startDialog={props.startDialog}
                />
            )
            }
        </div>
    </div>
};

export default Users;
