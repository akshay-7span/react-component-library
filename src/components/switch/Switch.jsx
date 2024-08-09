import MaterialSwitch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'

import { Stack } from '@mui/material'
import * as React from 'react'
const Switch = (props) => {
    const { checked, onChange, label, ...switchprops } = props

    return (
        <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
        >
            <Typography
                component={'span'}
                alignItems={'center'}
                fontWeight={400}
                fontSize={16}
                style={{ display: 'inline' }}
            >
                {label}
            </Typography>{' '}
            <MaterialSwitch
                checked={checked}
                onChange={onChange}
                inputProps={{ 'aria-label': 'controlled' }}
                {...switchprops}
            />
        </Stack>
    )
}

export default Switch
