import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input, Label, Row } from 'reactstrap'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { updateStep } from '../slices/stepSlice'

function Step2() {
  const dispatch = useDispatch()
  const { email, phone } = useSelector(store => store.step.step2)

  return (
    <div className='step-item '>
      <Row>
        <div className="col-md-6 mb-3">
          <Label>Email</Label>
          <Input
            type='email'
            value={email}
            onChange={e => dispatch(updateStep({
              stateName: "step2",
              field: "email",
              value: e.target.value
            }))}
          />
        </div>
        <div className="col-md-6 mb-3">
          <Label>Phone</Label>
          <PhoneInput
            className='reactPhoneInput'
            value={phone}
            onChange={phoneNumber => dispatch(updateStep({
              stateName: "step2",
              field: "phone",
              value: phoneNumber
            }))}
            onKeyDown={(e) => {
              if (e.key === "Tab") {
                dispatch(nextStep())
              }
            }}
          />
        </div>
      </Row>


    </div>
  )
}

export default Step2