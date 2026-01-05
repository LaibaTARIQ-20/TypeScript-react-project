import * as React from "react"
import { TextField, TextFieldProps } from "@mui/material"

export interface InputProps extends Omit<TextFieldProps, 'variant'> {
  variant?: "outlined" | "filled" | "standard"
}

const Input = React.forwardRef<HTMLDivElement, InputProps>(
  ({ variant = "outlined", ...props }, ref) => {
    return (
      <TextField
        variant={variant}
        fullWidth
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
