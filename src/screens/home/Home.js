import React, { useEffect, useState } from "react";
import {
  GridListTile,
  GridList,
  GridListTileBar,
  Card,
  withStyles,
  CardContent,
  Select,
  MenuItem,
  Checkbox,
  InputLabel,
  FormControl,
  TextField,
  Button,
} from "@material-ui/core";

import "./Home.css";
import Header from "../../common/header/Header";
import FormInput from "../../common/formInput/FormInput";

export default function Home (props){

return(
<div className="container">
      <Header {...props} />

</div>
)
}

