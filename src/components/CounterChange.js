import React from 'react'

export default function CounterChange(props) {
  return (
    <div className="btn-group mt-3">
        <button onClick={(e) => (props.handleCounting(1))} className="btn btn-secondary">+1 (ADD)</button>
        <button onClick={(e) => (props.handleCounting(-1))} className="btn btn-secondary">-1 (SUB)</button>
    </div>
  )
}
