import {Button, TextField} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
const Search = ({books, onClick}) => {
  return (
    <>
      <form onSubmit={onClick} action="submit">
        <TextField
          id="outlined-search"
          label="Book Search"
          variant="outlined"
          id="searchedBook"
        />
        <Button type="submit">Search</Button>
      </form>
    </>
  );
};

export default Search;
