import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'reactstrap'
import { nextStep, prevStep } from '../slices/stepSlice'
import { toast } from 'react-toastify'
import { toast_config } from '../config'
import Swal from 'sweetalert2'
import { checkIsValidEmail } from '../regex'

function StepController() {
    const dispatch = useDispatch()
    const { currentStep } = useSelector(store => store.step)
    const { firstname, lastname } = useSelector(store => store.step.step1)
    const { email, phone } = useSelector(store => store.step.step2)
    const { start_date, end_date } = useSelector(store => store.step.step3)

    const handlePrev = () => {
        if (currentStep === 1) {
            return
        }
        dispatch(prevStep())
    }

    const handleNext = () => {

        if (!firstname || !lastname) {
            toast.error("Both fields are required", toast_config)
            return
        }

        if (currentStep == 2) {
            if (!email || !phone) {
                toast.error("Both fields are required", toast_config)
                return
            }

            if (!checkIsValidEmail(email)) {
                toast.error("Valid Email is required!")
                return
            }
        }

        if (currentStep == 3) {
            if (!start_date || !end_date) {
                toast.error("Both fields are required", toast_config)
                return
            }
            if (new Date(start_date) >= new Date(end_date)) {
                toast.error("Start date can't be after end date!")
                return
            }
        }

        dispatch(nextStep())
    }

    const handleSubmit = () => {
        Swal.fire({
            title: 'Do you confirm?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm!',
            cancelButtonText: "Cancel"

        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Confirmed!',
                    '',
                    'success'
                )
            }
        })
    }

    return (
        <div className={`step-controller d-flex ${currentStep === 1 ? "justify-content-end" : "justify-content-between"}`}>

            {
                currentStep !== 1 &&
                <Button
                    onClick={handlePrev}
                    style={{
                        backgroundColor: "#FAF1E4",
                        color: "#435334",
                    }}
                >
                    Prev
                </Button>
            }
            {
                currentStep === 4 ?
                    <Button
                        onClick={handleSubmit}
                        style={{
                            backgroundColor: "#435334"
                        }}
                    >
                        Submit
                    </Button>
                    :
                    <Button
                        onClick={handleNext}
                        style={{
                            backgroundColor: "#435334"
                        }}
                    >
                        Next
                    </Button>
            }


        </div>
    )
}

export default StepController