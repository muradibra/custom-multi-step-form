import moment from 'moment/moment'
import React from 'react'
import { useSelector } from 'react-redux'
import { Row } from 'reactstrap'

function Step4() {
  const { step1, step2, step3 } = useSelector(store => store.step)

  return (
    <div className='step-item'>
      <Row>
        <div className="col-md-12">
          <p>Firstname: {step1.firstname}</p>
          <p>Lastname: {step1.lastname}</p>
          <p>Email: {step2.email}</p>
          <p>Phone Number: {step2.phone}</p>
          <p>Start Date: {moment(step3.start_date).format("DD-MM-YYYY")}</p>
          <p>End Date: {moment(step3.end_date).format("DD-MM-YYYY")}</p>
        </div>
      </Row>
    </div>
  )
}

export default Step4