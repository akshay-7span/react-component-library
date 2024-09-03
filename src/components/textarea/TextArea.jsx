import { Typography } from '@mui/material'

const TextArea = (props) => {
    const {
        id = 'custom-input',
        label,
        placeholder,
        size = 'large',
        minWidth = '100%',
        border,
        borderRadius,
        color,
        padding,
        rows = 6,
        onChange = (val) => {},
        value
    } = props

    const textareaStyle = {
        minWidth: minWidth,
        borderColor: border,
        color: color,
        borderRadius: borderRadius,
        padding: padding
    }

    return (
        <>
            <Typography component="div" className="flex flex-col">
                {label && <Typography component="label">{label}</Typography>}
                <textarea
                    id={id}
                    size={size}
                    placeholder={placeholder}
                    rows={rows}
                    onChange={(e) => onChange(e.target.value)}
                    defaultValue={value}
                    className="border rounded p-4"
                    style={textareaStyle}
                />
            </Typography>
        </>
    )
}

export default TextArea
