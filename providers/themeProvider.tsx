"use client"

import React, { ReactNode } from 'react'
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ThemeProviderProps } from 'next-themes/dist/types.js';



const ThemeProvider = ({ children, ...props}: ThemeProviderProps) => {
  return (
    <NextThemeProvider {...props}>
      {children}
    </NextThemeProvider>
  )
}

export default ThemeProvider
