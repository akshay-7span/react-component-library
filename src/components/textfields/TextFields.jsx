import MaterialTextField from '@mui/material/TextField'
import MaterialInputLabel from '@mui/material/InputLabel'
import MaterialFormHelperText from '@mui/material/FormHelperText'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

const StyledTextField = styled(MaterialTextField)(
    ({ variant = 'outlined', size = 'medium', theme }) => [
        {
            '.MuiInputBase-root': {
                borderRadius: theme.spacing(0.5)
            },
            '.MuiInputBase-input': {
                height: 24,
                paddingTop: 12,
                paddingBottom: 12
            },
            '.MuiInputBase-input::placeholder': {
                color: theme.palette.grey[300],
                opacity: 1
            }
        },
        variant === 'filled' && {
            '.MuiInputBase-input::placeholder': {
                color: theme.palette.grey.main,
                opacity: 1
            }
        },
        size === 'small' && {
            '.MuiInputBase-input': {
                paddingTop: 8,
                paddingBottom: 8
            }
        }
    ]
)

const StyledInputLabel = styled(MaterialInputLabel)(({ theme }) => [
    {
        fontWeight: 500,
        color: theme.palette.text.primary,
        lineHeight: 1.2
    }
])

const StyledHelperText = styled(MaterialFormHelperText)(({ theme }) => [
    {
        margin: 0,
        fontSize: 14,
        lineHeight: 1.2
    }
])

/**
 * @param {import('@mui/material').Text & {label: string}} props - TextField Props.
 */
/**
 * @param {import('@mui/material').TextFieldProps & {
 *   rootProps?: import('@mui/material').StackProps,
 *   labelProps?: import('@mui/material').InputLabelProps,
 *   helperTextProps?: import('@mui/material').FormHelperTextProps
 * }} props
 */
const TextField = (props) => {
    const {
        label,
        error = false,
        onChange = () => {},
        helperText = '',
        rootProps,
        labelProps,
        helperTextProps,
        ...textfieldProps
    } = props

    const handleChange = (e) => {
        onChange(e.target.value)
    }

    return (
        <Stack gap={1} {...rootProps}>
            {label && <StyledInputLabel {...labelProps}>{label}</StyledInputLabel>}
            <StyledTextField
                error={error}
                fullWidth
                onChange={handleChange}
                {...textfieldProps}
            />
            {error && helperText && (
                <StyledHelperText error={error} {...helperTextProps}>
                    {helperText}
                </StyledHelperText>
            )}
        </Stack>
    )
}

export default TextField
