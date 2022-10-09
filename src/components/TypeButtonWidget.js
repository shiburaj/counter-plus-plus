import React from 'react'

export default function TypeButtonWidget(props) {
  return (
    <button 
            onClick={(e) => (props.setCounterType(props.btnType))}
            className={`btn btn-primary ${props.counterType===props.btnType?'active':''}`}>{props.btnType.toUpperCase()}</button>
  )
}
