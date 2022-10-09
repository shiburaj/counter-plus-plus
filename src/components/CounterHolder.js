import React from 'react'
import CounterWidget from './CounterWidget'

export default function CounterHolder(props) {
  return (
    <div class="row">
        <CounterWidget 
            color="bg-white" 
            title="Basic Counter" 
            
            data={props.counter.basic} />

        <CounterWidget 
            color="bg-info text-white" 
            title="Smart Counter" 
            
            data={props.counter.smart} />

        <CounterWidget 
            color="bg-success text-white" 
            title="Dangerous Counter" 
            
            data={props.counter.dangerous} />
        
    </div>
  )
}
