import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from 'reactstrap'
import { setStep2 } from '../slices/stepSlice'

function Step2() {
  const dispatch = useDispatch()
  const { step2 } = useSelector(store => store.step)

  const handleInputChange = (key, value) => {
    dispatch(setStep2({ [key]: value }))
  }

  return (
    <div className='step-item '>
      <Input
        placeholder='Your email...'
        value={step2.email}
        onChange={e => handleInputChange("email", e.target.value)}
      />
      <Input
        type='password'
        placeholder='Your password...'
        value={step2.password}
        onChange={e => handleInputChange("password", e.target.value)}
      />
    </div>
  )
}

export default Step2