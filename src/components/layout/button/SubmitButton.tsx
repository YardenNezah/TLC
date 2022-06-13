import React from 'react'
import './Button.scss';

const SubmitButton: React.FC<{onClick:any, value:string}> = (props) => {
  return (
    <button className='submit-btn' type='submit' onClick={props.onClick} value={props.value}>{props.value}</button>
  )
}

export default SubmitButton