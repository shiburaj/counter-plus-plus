import React from 'react'
import { useDispatch } from 'react-redux';
import CounterChange from './CounterChange'
import CounterSelector from './CounterSelector'
import { reset } from '../features/counter/counterSlice';

export default function CounterButtonsContainer(props) {
    const dispatch = useDispatch();
    function handleReset(){
        dispatch(reset())
      }

  return (
    <div className="row mt-4">
        <div className="col-12">
        <div className="card bg-white p-5">
            <CounterSelector />
            <CounterChange />
            <button onClick={handleReset} className='btn btn-danger mt-3'>RESET</button>
        </div>
        </div>
        
    </div>
  )
}
