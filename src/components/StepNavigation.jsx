import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavItem from './NavItem'
import { goToSelectedStep } from '../slices/stepSlice'

function StepNavigation() {
    const dispatch = useDispatch()
    const { list, currentStep } = useSelector(store => store.step)
    const { fullname, username } = useSelector(store => store.step.step1)
    const { email, password } = useSelector(store => store.step.step2)

    const handleOnClick = (selectedStep) => {
        if (!fullname || !username) {
            return
        }
        if (currentStep == 2) {
            if (fullname && username) {
                dispatch(goToSelectedStep(selectedStep))

            }
            else if (!email || !password) {
                return
            }
        }

        if(currentStep == 3) {
            if(!fullname && !username && !email && !password) {
                return            
            } else {
                dispatch(goToSelectedStep(selectedStep))
            }
        }



        dispatch(goToSelectedStep(selectedStep))
    }

    return (
        <div className='step-navigation'>
            {
                list.map(item => (
                    <NavItem
                        key={item.index}
                        text={item.text}
                        isActive={currentStep === item.index}
                        handleOnClick={() => handleOnClick(item.index)}
                    />
                ))
            }
        </div>
    )
}

export default StepNavigation