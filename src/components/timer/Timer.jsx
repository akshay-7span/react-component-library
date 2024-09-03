import { Button } from '@mui/material'
import { useEffect, useState } from 'react'

let newIntervalId = null
function Timer(props) {
    const { duration, setExamTimeLeft } = props
    const [elapsedTime, setElapsedTime] = useState((duration ?? 0) * 60)
    const [intervalId, setIntervalId] = useState(null)

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600)
        const minutes = Math.floor((seconds % 3600) / 60)
        const remainingSeconds = seconds % 60

        const formattedHours = hours.toString().padStart(2, '0')
        const formattedMinutes = minutes.toString().padStart(2, '0')
        const formattedSeconds = remainingSeconds.toString().padStart(2, '0')

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
    }

    useEffect(() => {
        if (newIntervalId) clearInterval(newIntervalId)
        newIntervalId = setInterval(() => {
            setElapsedTime((prevElapsedTime) => prevElapsedTime - 1)
        }, 1000)
        setIntervalId(newIntervalId)
    }, [])

    useEffect(() => {
        setExamTimeLeft(elapsedTime)
        if (elapsedTime <= 0) clearInterval(intervalId)
    }, [elapsedTime])

    return (
        <div className="shadow-none pointer-events-none">
            <Button
                className="bg-transparent text-black w-[119px] text-[14px] py-[13px] px-4 !shadow-none leading-none "
                component="p"
            >
                {formatTime(elapsedTime)}
            </Button>
        </div>
    )
}

export default Timer
