import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input, Label, Row } from 'reactstrap'
import { nextStep, updateStep } from '../slices/stepSlice'

function Step1() {
  const dispatch = useDispatch()
  const { firstname, lastname } = useSelector(store => store.step.step1)

  return (
    <div className='step-item'>
      <Row>
        <div className="col-md-6 mb-3">
          <Label>Name</Label>
          <Input
            value={firstname}
            onChange={(e) => dispatch(updateStep({
              stateName: "step1",
              field: "firstname",
              value: e.target.value
            }))}
          />
        </div>
        <div className="col-md-6 mb-3">
          <Label>Surname</Label>
          <Input
            value={lastname}
            onChange={(e) => dispatch(updateStep({
              stateName: "step1",
              field: "lastname",
              value: e.target.value
            }))}
            onKeyDown={(e) => {
              if(e.key === "Tab") {
                dispatch(nextStep())
              }
            }}
          />
        </div>
      </Row>

    </div>
  )
}

export default Step1