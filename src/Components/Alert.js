import React from 'react'
export default function Alert(props) {
        


  return (
    <div className='contianer'>
     <div className={`alert alert-${props.ShowAlert.type} alert-dismissible fade show`} role="alert">
  <strong>{props.ShowAlert.type}</strong>  {props.ShowAlert.msg}
</div>
    </div>
  )
}

