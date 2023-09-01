import React from 'react'
import { useSelector } from 'react-redux'

function Success() {
  const { fullname, username } = useSelector(store => store.step.step1)
  const { email, password } = useSelector(store => store.step.step2)
  const { age, experience } = useSelector(store => store.step.step3)

  return (
    <div className='total'>
        <p>Fullname: {fullname} </p>
        <p>Username: {username} </p>
        <p>Email: {email} </p>
        <p>Password: {password} </p>
        <p>Age: {age} </p>
        <p>Experience: {experience} </p>
    </div>
  )
}

export default Success