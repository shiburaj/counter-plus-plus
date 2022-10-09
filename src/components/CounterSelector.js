import React from 'react'
import TypeButtonWidget from './TypeButtonWidget'

export default function CounterSelector() {
    
  return (
    <div className="btn-group">
        <TypeButtonWidget btnType="basic" />
        <TypeButtonWidget btnType="smart" />
        <TypeButtonWidget btnType="dangerous" />
        
    </div>
  )
}
