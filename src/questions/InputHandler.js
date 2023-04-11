import React, { useState } from 'react'

export default function InputHandler() {
    const [answer, setAnswer] = useState('')
    const [error, setError] = useState(null)
    const [status, setStatus] = useState('typing')

    if(status == 'success'){
        return ( <h1>Well done !!</h1> )
    }

    async function handleSubmit(e){
        e.preventDefault();
        setStatus('submitting')
        try{
            await handleResult(answer)
            setStatus('success')
        }
        catch(err) {
            setError(err)
            setStatus('typing')
        }

    }

    function handleChange(e){
        setAnswer(e.target.value)
    }

    return (
        <>
            <label htmlFor="name">Name</label>
            <input type="text" disabled={status =='submitting'} value={answer} onChange={handleChange}/>
            <button onClick={handleSubmit} disabled={answer.length == 0 || status == 'submitting'} >Submit</button>
            {error !== null && <p>{error.message}</p> }
        </>
    )
}

function handleResult(answer){
    return new Promise((resolve, reject)=>{
        setInterval(()=>{
            let shouldError = answer.toLowerCase() !== 'ankit'
            if(shouldError){
                reject(new Error("You are not authorised person"))
            } else{
                resolve()
            }
        }, 1500)
    })
}