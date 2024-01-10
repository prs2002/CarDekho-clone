import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function RowRadioButtonsGroup(props) {
  const [value, setValue] = React.useState('By_Budget');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={value}
        onChange={handleChange}
        
      >
        <FormControlLabel value="By_Budget" control={<Radio style={{ color: '#FF6347' }} disableRipple />} onClick={()=>props.HandleClick("By_Budget")} label="By Budget" />
        <FormControlLabel value="By_Model" control={<Radio style={{ color: '#FF6347' }} disableRipple />} onClick={()=>props.HandleClick("By_Model")} label="By Model" />
      </RadioGroup>
    </FormControl>
  );
}