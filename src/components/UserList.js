import React from 'react'

export const UserList = ({ users }) => {
    return (
        <div className='users-list'>
            {users.map(item => {
                return (
                    <div key={item.id} className='user'>
                        <img src={item.avatar} alt='avatar'/>
                        <p>{item.name.concat(' ', item.secname)}</p>
                    </div>
                )
            })
            }
        </div>
    )
}