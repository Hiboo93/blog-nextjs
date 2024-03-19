"use client"

import { Moon, Sun } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

const ToggleTheme = () => {
  const toggleTheme = () => {
    
  }
  

  return (
    <Button className='flex justify-center' variant="ghost" size="icon" onClick={toggleTheme}>
      <Moon className='h-6 w-6 scale-100 dark:scale-0'/>
      <Sun className='h-6 w-6 scale-0 dark:scale-100'/>
    </Button>
  )
}

export default ToggleTheme