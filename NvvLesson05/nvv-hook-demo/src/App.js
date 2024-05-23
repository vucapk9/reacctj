import React from 'react'
import NvvUseState from './components/NvvUseState'
import NvvUseEffect from './components/NvvUseEffect'
import NvvUseContext from './components/NvvUseContext'
import './App.css'
export default function App() {
  return(
    <div className='contrainer border mt-3'>
        <h1 className='text-center'>Nguyễn Văn Vũ - Hook</h1>
        <hr/>
        <NvvUseState/>
        <hr/>
        <NvvUseEffect/>
        <ht/>
        <NvvUseContext/>
    </div>
  )
}