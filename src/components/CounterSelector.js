import React from 'react'
import TypeButtonWidget from './TypeButtonWidget'

export default function CounterSelector(props) {
  return (
    <div className="btn-group">
        <TypeButtonWidget btnType="basic" counterType={props.counterType} setCounterType={props.setCounterType} />
        <TypeButtonWidget btnType="smart" counterType={props.counterType} setCounterType={props.setCounterType} />
        <TypeButtonWidget btnType="dangerous" counterType={props.counterType} setCounterType={props.setCounterType} />
        
    </div>
  )
}
