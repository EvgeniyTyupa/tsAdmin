import React from 'react'
import { cx } from '../../../../../../Utils/classnames'
import classes from './FormError.module.css'

interface FormErrorProps {
    message?: string
    className?: string
}

const FormError = ({ message, className }: FormErrorProps) => {
    return(
        <span className={cx(classes.main, className)}>{message}</span>
    )
}

export default FormError