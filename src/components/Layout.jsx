import React from 'react'
import StepNavigation from './StepNavigation'
import StepController from './StepController'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import { useSelector } from 'react-redux'

function Layout() {

    const { currentStep } = useSelector(store => store.step)

    const returnCurrentPage = () => {
        if (currentStep === 1) {
            return <Step1 />
        } else if (currentStep === 2) {
            return <Step2 />
        } else if (currentStep === 3) {
            return <Step3 />
        } else {
            return <Step4 />
        }
    }

    return (
        <div className='layout'>
            <StepNavigation />
            {returnCurrentPage()}
            <StepController />
        </div>
    )
}

export default Layout