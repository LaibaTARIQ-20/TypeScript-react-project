import * as React from "react"
import { FormLabel, FormLabelProps } from "@mui/material"

const Label = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  (props, ref) => (
    <FormLabel
      ref={ref}
      sx={{ mb: 1, display: 'block', fontWeight: 500 }}
      {...props}
    />
  )
)
Label.displayName = "Label"

export { Label }
