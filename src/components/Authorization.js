import React, { useState } from 'react'
import {users} from '../Users'

export const Authorization = ({auth }) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [isHidden, setIsHidden] = useState(true)
    const authHandler = (event) => {

        const curUser = users.find(item => item.login === login &&
            item.password === password)

        if (curUser !== undefined) {
            auth(true)
            localStorage.setItem('AuthUser', JSON.stringify(curUser))
            setIsHidden(true)
            setLogin('')
            setPassword('')
        }
        else {
            setIsHidden(false)
            setPassword('')
        }

    }

    return (
        <div className='auth'>
            <input
                value={login}
                onChange={(event) => { setLogin(event.target.value) }}
                placeholder='Login'
            />

            <input type='password'
                placeholder='password'
                value={password}
                onChange={event => { setPassword(event.target.value) }}
            />
            <span hidden={isHidden}>Некорекные данные авторизации</span>
            <button
                onClick={authHandler}
            >
                Login
            </button>

        </div>
    )
}