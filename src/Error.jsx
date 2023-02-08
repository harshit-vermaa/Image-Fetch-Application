import React from 'react'
import { useNavigate } from 'react-router'

const Error = () => {

    const Navigate = useNavigate();

    return (
        <>
            <h1>oops you are on wrong place😅</h1>
            <button onClick={() => { Navigate(-1) }}>Click</button>
        </>
    )
}

export default Error
