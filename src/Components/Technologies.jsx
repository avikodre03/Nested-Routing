import React from 'react'
import "./Styling/style.css"
import { Link ,Outlet} from 'react-router-dom'

const Technologies = () => {
    return (
        <div className='OuterDiv'>
            <div className='BOX-Div'>
                <div className="LeftDiv">

                    <Link to="html">HTML</Link>
                    <Link to="css">CSS </Link>
                    <Link to="react">ReactJS</Link>
                    <Link to="node">NodeJS</Link>

                </div>
                <div className="RightDiv">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}

export default Technologies
