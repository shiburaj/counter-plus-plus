import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectCounter } from '../features/counter/counterSlice';

export default function TypeButtonWidget(props) {
    const counterType = useSelector(state => state.counter.counterType);
    const dispatch = useDispatch();
    function handleClick(value) {
        dispatch(selectCounter(value))
    }
  return (
    <button 
            onClick={(e) => (handleClick(props.btnType))}
            className={`btn btn-primary ${counterType===props.btnType?'active':''}`}>{props.btnType.toUpperCase()}</button>
  )
}
