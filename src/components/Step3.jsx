import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from 'reactstrap'
import { setStep3 } from '../slices/stepSlice'

function Step3() {
  const dispatch = useDispatch()
  const { step3 } = useSelector(store => store.step)

  const handleInputChange = (key, value) => {
    dispatch(setStep3({ [key]: value }))
  }

  return (
    <div className='step-item'>
      <Input
        type='number'
        placeholder='Your age...'
        value={step3.age}
        onChange={e => handleInputChange("age", e.target.value)}
      />
      <Input
        placeholder='Your experience...'
        value={step3.experience}
        onChange={e => handleInputChange("experience", e.target.value)}
      />
    </div>
  )
}

export default Step3