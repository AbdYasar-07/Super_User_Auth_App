
import React from 'react'

function NavTabBody() {
    const value = {
        descriptionValue:
          "This is the list of groups to which a user has directly been added to.",
        buttonValue: "ADD USER TO THE GROUP",
      };
  return (
    <div className='d-flex align-items-center justify-content-around'>
       <div>
        <p>{value.descriptionValue}</p>
       </div>
       <div>
        <button type='button' class="btn btn-primary"><span className='fs-5'>+</span> {value.buttonValue}</button>
       </div>
    </div>
  )
}

export default NavTabBody