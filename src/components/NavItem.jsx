import React from 'react'
import { Button } from 'reactstrap'

function NavItem({ text, isActive, handleOnClick }) {

    return (
        <div className={`nav-item ${isActive ? "active" : ""}`}>
            <Button
                onClick={handleOnClick}
            >
                {text}
            </Button>

        </div>
    )
}

export default NavItem