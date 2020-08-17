import React from 'react'

export const Message = ({ message, user }) => {
    return (
        <li className={message.sender}>
            <span>{user.name.concat(' ', user.secname)}</span>
            <p>{message.text}</p>
        </li>
    )
}