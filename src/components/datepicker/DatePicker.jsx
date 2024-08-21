import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker as MUIDatePicker } from '@mui/x-date-pickers/DatePicker'
import { Stack, styled } from '@mui/material'
import MaterialInputLabel from '@mui/material/InputLabel'
import MaterialFormHelperText from '@mui/material/FormHelperText'
import TextField from '../textfields/TextFields'

const StyledInputLabel = styled(MaterialInputLabel)(({ theme }) => [
  {
    fontWeight: 500,
    color: theme.palette.text.primary,
    lineHeight: 1.2
  }
])

const StyledHelperText = styled(MaterialFormHelperText)(() => [
  {
    margin: 0,
    fontSize: 14,
    lineHeight: 1.2
  }
])

/**
 *
 * @param {import('@mui/x-date-pickers').DatePickerProps} props
 */
function DatePicker(props) {
  const {
    label,
    onChange,
    placeholder = 'Enter Date',
    error = false,
    helperText = '',
    rootProps,
    labelProps,
    helperTextProps,
      icon,
    ...datePickerProps
  } = props

  const handleDateChange = (date) => {
    if (date && date.isValid()) {
      onChange(date.toDate())
    } else {
      onChange(null)
    }
  }

  return (
    <Stack gap={1} {...rootProps}>
      {label && <StyledInputLabel {...labelProps}>{label}</StyledInputLabel>}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MUIDatePicker
          slots={{
            openPickerIcon: icon,
            textField: TextField
          }}
          onChange={handleDateChange}
          slotProps={{
            textField: {
              placeholder: placeholder
            }
          }}
          {...datePickerProps}
        />
      </LocalizationProvider>
      {error && helperText && (
        <StyledHelperText error={error} {...helperTextProps}>
          {helperText}
        </StyledHelperText>
      )}
    </Stack>
  )
}
export default DatePicker
