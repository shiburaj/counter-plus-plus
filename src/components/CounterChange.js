import React from 'react'
import { useDispatch } from 'react-redux';

export default function CounterChange(props) {
    const dispatch = useDispatch();
    function handleCounting(amount){
        dispatch({
          type: 'counting',
          payload: {
            amount
          }
        })
      }
  return (
    <div className="btn-group mt-3">
        <button onClick={(e) => (handleCounting(1))} className="btn btn-secondary">+1 (ADD)</button>
        <button onClick={(e) => (handleCounting(-1))} className="btn btn-secondary">-1 (SUB)</button>
    </div>
  )
}
