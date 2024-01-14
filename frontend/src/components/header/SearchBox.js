import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Avatar, Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/search/${keyword.trim()}`);
      setKeyword('');
    } else {
      navigate('/');
    }
  };

  return (
    <form onSubmit={submitHandler} style={{ display: 'flex', alignItems: 'center' }}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={[]}
        sx={{ width: 400 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Cars or Brands eg. Swift, or Maruti"
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword}
          />
        )}
      />
      <Button type="submit">
      <Avatar sx={{ bgcolor: grey[900], height: 56 }} variant="square">
        <SearchIcon />
      </Avatar>
      </Button>
    </form>
  );
};

export default SearchBox;
