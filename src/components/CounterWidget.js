import React from 'react'

export default function CounterWidget(props) {
  return (
    <div className="col-4">
        <div className={`card ${props.color}`}>
            <h1 className='display-1'>{props.data}</h1>
            <p>{props.title}</p>
        </div>
    </div>
  )
}
