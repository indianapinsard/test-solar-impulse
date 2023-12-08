import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import MuiSelect from '@mui/material/Select'

interface SelectProps {
    inputLabel: string
    options: { value: string; label: string }[]
    value: string
    setValue: (value: string) => void
}

const Select: React.FC<SelectProps> = ({ inputLabel, options, value, setValue }) => (
    <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
            <InputLabel id="select-label">{inputLabel}</InputLabel>
            <MuiSelect
                labelId="select-label"
                value={value}
                label={inputLabel}
                onChange={(event) => setValue(event.target.value as string)}
            >
                {options.map(({ value, label }) => (
                    <MenuItem key={value} value={value}>
                        {label}
                    </MenuItem>
                ))}
            </MuiSelect>
        </FormControl>
    </Box>
)

export default Select
