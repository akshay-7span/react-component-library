import IconButton from '@mui/material/IconButton'
import MaterialDialog from '@mui/material/Dialog'
import { alpha, styled } from '@mui/material'

const StyledDialog = styled(MaterialDialog)(({ theme }) => [
    {
        '& .MuiDialog-paper': {
            width: 433,
            padding: 24,
            boxShadow: 'none',
            borderRadius: theme.spacing(1.5)
        },
        '& .MuiDialogTitle-root': {
            padding: 0,
            paddingBottom: 16
        },
        '& .MuiDialogContent-root': {
            padding: 0,
            paddingTop: '24px !important',
            borderTop: `1px solid ${theme.palette.grey[200]}`
        },
        '& .MuiDialogActions-root': {
            padding: 0,
            paddingTop: 32,
            gap: 8
        }
    }
])

/**
 *
 * @param {import('@mui/material').DialogProps} props
 * @returns
 */
const Dialog = (props) => {
    const { onClose,icon, ...dialogProps } = props

    return (
        <StyledDialog
            slotProps={{
                backdrop: {
                    sx: (theme) => ({
                        backgroundColor: alpha(theme.palette.grey[900], 0.5)
                    })
                }
            }}
            {...dialogProps}
        >
            <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                    position: 'absolute',
                    height: 24,
                    width: 24,
                    right: 10,
                    top: 10,
                    padding: 0,
                    color: 'text.primary'
                }}
            >
                {icon}
            </IconButton>
            {props.children}
        </StyledDialog>
    )
}

export default Dialog
