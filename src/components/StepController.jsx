import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'reactstrap'
import { nextStep, prevStep } from '../slices/stepSlice'
import { toast } from 'react-toastify'
import { toast_config } from '../config'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function StepController() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { currentStep } = useSelector(store => store.step)
    const { fullname, username } = useSelector(store => store.step.step1)
    const { email, password } = useSelector(store => store.step.step2)
    const { age, experience } = useSelector(store => store.step.step3)

    const handlePrev = () => {
        if (currentStep === 1) {
            return
        }
        dispatch(prevStep())
    }

    const handleNext = () => {

        if (!fullname || !username) {
            toast.error("Both fields are required", toast_config)
            return
        }

        if (currentStep == 2) {
            if (!email || !password) {
                toast.error("Both fields are required", toast_config)
                return
            }
        }

        if (currentStep == 3) {
            if (!age || !experience) {
                toast.error("Both fields are required", toast_config)
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
                navigate('/total')
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
                        <Link>
                            Submit
                        </Link>
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