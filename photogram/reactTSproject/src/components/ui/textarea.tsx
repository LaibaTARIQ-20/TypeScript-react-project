import * as React from "react"
import { TextField, TextFieldProps } from "@mui/material"

export interface TextareaProps extends Omit<TextFieldProps, 'variant' | 'multiline'> {
  variant?: "outlined" | "filled" | "standard"
}

const Textarea = React.forwardRef<HTMLDivElement, TextareaProps>(
  ({ variant = "outlined", rows = 4, ...props }, ref) => {
    return (
      <TextField
        multiline
        rows={rows}
        variant={variant}
        fullWidth
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
