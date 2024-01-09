import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectLabels(props) {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const [carVal, setcarVal] = React.useState("");
  const handleChange = (event) => {
    setcarVal(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 350 }}>
        <Select
          value={carVal}
          onChange={handleChange}
          displayEmpty
          defaultValue=""
          inputProps={{ "aria-label": "Without label" }}
          MenuProps={MenuProps}
        >
          <MenuItem disabled value="">
            <em>{props.label1}</em>
          </MenuItem>

          {props.car_detail.map((Item) => (
            <MenuItem
              key={Item}
              value={Item}
              onClick={() => props.HandleFilter({ Item })}
            >
              {Item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
