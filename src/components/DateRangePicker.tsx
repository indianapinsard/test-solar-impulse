import React from 'react'
import { Stack } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Dayjs } from 'dayjs'

interface DateRangePickerProps {
    startDate: Dayjs | null
    endDate: Dayjs | null
    setStartDate: (startDate: Dayjs | null) => void
    setEndDate: (endDate: Dayjs | null) => void
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ startDate, endDate, setStartDate, setEndDate }) => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack direction="row" spacing={2}>
            <DatePicker format="DD/MM/YYYY" value={startDate} onChange={(value) => setStartDate(value)} label="Début" />
            <DatePicker
                format="DD/MM/YYYY"
                value={endDate}
                onChange={(value) => setEndDate(value)}
                label="Fin"
                minDate={startDate}
            />
        </Stack>
    </LocalizationProvider>
)

export default DateRangePicker
