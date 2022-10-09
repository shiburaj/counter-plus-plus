import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function TypeButtonWidget(props) {
    const counterType = useSelector(state => state.counterType);
    const dispatch = useDispatch();
    function handleClick(value) {
        dispatch({
            type: 'selectCounter',
            payload: {
                value
            }
        })
    }
  return (
    <button 
            onClick={(e) => (handleClick(props.btnType))}
            className={`btn btn-primary ${counterType===props.btnType?'active':''}`}>{props.btnType.toUpperCase()}</button>
  )
}
