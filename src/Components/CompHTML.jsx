import React from 'react'
import './Styling/Comp.css'

const CompHTML = () => {
  return (
    <div className='outerDiv'>
      <div className='topDiv'>
        <h1 style={{color:"blue"}}>HTML Language</h1>
      </div>
      <div className='LowerDiv'>
      <div className='ImageDiv'>
        <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" alt="" width="100%"
            height="100%"/>
      </div>
      <div className='DetailDiv'>
        <dl>
          <dt><b>Language :</b></dt>
          <dd style={{paddingLeft:"30px"}}>HTML</dd>
          <dt style={{marginTop:"10px"}}><b> Description : </b></dt>
          <dd style={{paddingLeft:"30px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis exercitationem ipsa sequi dicta eius corrupti suscipit deleniti dolorem tempora non, alias illo nostrum in sed, neque eaque nisi saepe, rerum fuga impedit voluptatum libero esse harum. Officia minima, repellendus sed fugit sint corporis rem laborum voluptate provident amet ad laudantium!</dd>
        </dl>
      </div>
      </div>
    </div>
  )
}

export default CompHTML