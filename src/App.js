import React from 'react'
import Tabs from './questions/Tabs';


const tabs = [
  {
    title: 'Tab 1',
    content: <p>Content for tab 1.</p>,
  },
  {
    title: 'Tab 2',
    content: <p>Content for tab 2.</p>,
  },
  {
    title: 'Tab 3',
    content: <p>Content for tab 3.</p>,
  },
];

export default function App() {
  return (
    <Tabs tabs={tabs}/>    
  )
}
