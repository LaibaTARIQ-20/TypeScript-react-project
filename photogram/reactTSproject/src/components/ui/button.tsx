import * as React from "react"
import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material"

export interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", ...props }, ref) => {
    // Map custom variants to MUI variants
    const muiVariant = variant === "outline" ? "outlined" : 
                       variant === "ghost" || variant === "link" ? "text" :
                       "contained"
    
    const color = variant === "destructive" ? "error" : "primary"
    
    return (
      <MuiButton
        variant={muiVariant}
        color={color}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
