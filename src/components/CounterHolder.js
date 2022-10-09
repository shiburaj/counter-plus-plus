import React from 'react'
import { useSelector } from 'react-redux'
import CounterWidget from './CounterWidget'

export default function CounterHolder(props) {
    const counter = useSelector(state => state.counter.counter);
  return (
    <div className="row">
        <CounterWidget 
            color="bg-white" 
            title="Basic Counter" 
            
            data={counter.basic} />

        <CounterWidget 
            color="bg-info text-white" 
            title="Smart Counter" 
            
            data={counter.smart} />

        <CounterWidget 
            color="bg-success text-white" 
            title="Dangerous Counter" 
            
            data={counter.dangerous} />
        
    </div>
  )
}
