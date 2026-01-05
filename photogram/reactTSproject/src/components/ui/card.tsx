import * as React from "react"
import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  Typography,
  CardActions,
} from "@mui/material"
import type { CardProps as MuiCardProps, CardContentProps as MuiCardContentProps, CardActionsProps } from "@mui/material"

const Card = React.forwardRef<HTMLDivElement, MuiCardProps>(
  (props, ref) => <MuiCard ref={ref} {...props} />
)
Card.displayName = "Card"

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, ...props }, ref) => (
    <div ref={ref} {...props}>
      {children}
    </div>
  )
)
CardHeader.displayName = "CardHeader"

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode
}

const CardTitle = React.forwardRef<HTMLParagraphElement, CardTitleProps>(
  ({ children, ...props }, ref) => (
    <Typography variant="h5" component="h3" ref={ref} {...props}>
      {children}
    </Typography>
  )
)
CardTitle.displayName = "CardTitle"

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode
}

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ children, ...props }, ref) => (
    <Typography variant="body2" color="text.secondary" ref={ref} {...props}>
      {children}
    </Typography>
  )
)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, MuiCardContentProps>(
  (props, ref) => <MuiCardContent ref={ref} {...props} />
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, CardActionsProps>(
  (props, ref) => <CardActions ref={ref} {...props} />
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
