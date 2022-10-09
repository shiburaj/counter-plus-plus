import React from 'react'
import CounterChange from './CounterChange'
import CounterSelector from './CounterSelector'

export default function CounterButtonsContainer(props) {
  return (
    <div class="row mt-4">
        <div className="col-12">
        <div className="card bg-white p-5">
            <CounterSelector counterType={props.counterType} setCounterType={props.setCounterType} />
            <CounterChange handleCounting={props.handleCounting} />
            <button onClick={props.handleReset} className='btn btn-danger mt-3'>RESET</button>
        </div>
        </div>
        
    </div>
  )
}
