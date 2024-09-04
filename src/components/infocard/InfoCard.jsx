import { Box, Paper, Stack, Typography, alpha } from '@mui/material'

export default function InfoCard(props) {
    const { image, count = 0, text } = props
    return (
        <Paper
            elevation={0}
            sx={(theme) => ({
                backgroundColor: theme.palette.primary[50],
                padding: 2,
                gap: 2,
                borderRadius: theme.spacing(1),
                border: 1,
                borderColor: theme.palette.primary[300]
            })}
        >
            <Stack direction="row" gap={2}>
                <Box
                    sx={(theme) => ({
                        width: '64px',
                        height: '64px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: alpha(theme.palette.common.white, 0.32),
                        borderRadius: '100%'
                    })}
                >
                    {image}
                </Box>
                <Stack>
                    <Typography
                        component="p"
                        sx={{
                            fontSize: 32,
                            fontWeight: 600,
                            lineHeight: 1.2
                        }}
                    >
                        {count}
                    </Typography>
                    <Typography
                        component="p"
                        sx={{
                            fontSize: 20,
                            fontWeight: 600,
                            color: 'grey.main',
                            lineHeight: 1.2
                        }}
                    >
                        {text}
                    </Typography>
                </Stack>
            </Stack>
        </Paper>
    )
}
