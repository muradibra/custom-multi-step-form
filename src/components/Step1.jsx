import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from 'reactstrap'
import { setStep1 } from '../slices/stepSlice'

function Step1() {
  const dispatch = useDispatch()
  const { step1 } = useSelector(store => store.step)

  const handleInputChange = (key, value) => {
    dispatch(setStep1({ [key]: value }))
  }

  return (
    <div className='step-item'>
      <Input
        placeholder='Your fullname...'
        value={step1.fullname}
        onChange={(e) => handleInputChange("fullname", e.target.value)}
      />
      <Input
        placeholder='Your username...'
        value={step1.username}
        onChange={(e) => handleInputChange("username", e.target.value)}
      />
    </div>
  )
}

export default Step1