import React, { useState } from 'react'
import classes from './ColorPicker.module.css'
import { SketchPicker, ColorResult } from 'react-color'

interface ColorPickerProps {
    color: string
    colorPicker?: boolean
    onChange?: (color: string) => void
}

const ColorPicker = ({ color = "#000000", colorPicker = false, onChange }: ColorPickerProps) => {
    const [isDisplayColorPicker, setIsDisplayColorPicker] = useState(false)

    const handleColorPicker = () => {
        setIsDisplayColorPicker(!isDisplayColorPicker)
    }

    const onChangeColor = (color: ColorResult) => {
        if(colorPicker && onChange){
            onChange(color.hex)
        }
    }

    return(
        <div className={classes.main}>
            <div className={classes.swatch} onClick={handleColorPicker}>
                <div className={classes.color} style={{ backgroundColor: color}}></div>
            </div>
            {(colorPicker && isDisplayColorPicker) && 
                <div className={classes.popover}>
                    <div className={classes.cover} onClick={handleColorPicker}/>
                    <SketchPicker color={color} onChange={(color) => onChangeColor(color)}/>
                </div>
            }
        </div>
    )
}

export default ColorPicker