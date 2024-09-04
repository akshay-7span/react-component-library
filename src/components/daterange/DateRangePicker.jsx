import { useState } from 'react'
import { Popover } from '@mui/material'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import TextField from "../textfields/TextFields"
import { useTheme } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'

const DateRangePicker = (props) => {
    const { onChange, ranges,icon, ...daterangeprops } = props
    const [anchorEl, setAnchorEl] = useState(null)

    const open = Boolean(anchorEl)
    const theme = useTheme()
    const handleClose = () => {
        setAnchorEl(null)
    }

    const formatDate = (date) => {
        return date
            ? `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
            : ''
    }

    const handleDateChange = (item) => {
        onChange([item.selection])
    }

    const displayedFormatDate = () => {
        const { startDate, endDate } = ranges[0]
        if (!startDate && !endDate) return ''
        if (!startDate) return formatDate(endDate)
        if (!endDate) return formatDate(startDate)
        return `${formatDate(startDate)} - ${formatDate(endDate)}`
    }
    return (
        <>
            <TextField
                label={'Date'}
                onClick={(event) => {
                    setAnchorEl(event.currentTarget)
                }}
                value={displayedFormatDate()}
                readOnly
                placeholder="Select Date"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton>
                                {icon}
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
            >
                <DateRange
                    editableDateInputs={true}
                    onChange={handleDateChange}
                    ranges={[
                        {
                            startDate: ranges[0].startDate || new Date(),
                            endDate: ranges[0].endDate || new Date(),
                            key: 'selection'
                        }
                    ]}
                    rangeColors={[theme.palette.primary.main]}
                    {...daterangeprops}
                />
            </Popover>
        </>
    )
}

export default DateRangePicker
