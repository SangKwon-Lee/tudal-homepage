import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

interface IOptionProps {
  handleInputCharge: (e: any) => void;
  inputCharge: {
    check: boolean;
    money: number;
    method: string;
  };
}
export default function BasicSelect(props: IOptionProps) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          inputProps={{ "aria-label": "Without label" }}
          displayEmpty
          name="method"
          value={props.inputCharge.method}
          onChange={props.handleInputCharge}
          sx={{
            backgroundColor: "white",
            outline: "none",
            fontSize: "15px",
            paddingLeft: "8px",
          }}
        >
          <MenuItem
            sx={{
              fontSize: "15px",
              fontFamily: "Noto Sans Kr",
            }}
            value="CARD"
          >
            신용카드
          </MenuItem>
          {/* <MenuItem value="BANK">계좌이체</MenuItem> */}
          {/* <MenuItem value={"VBANK"}>무통장입금(가상계좌)</MenuItem>
          <MenuItem value={"CARS"}>ARSPAY Web LINK</MenuItem>
          <MenuItem value={"CSMS"}>SMS카드결제 Web LINK(인증)</MenuItem>
          <MenuItem value={"DSMS"}>SMS카드결제 Web LINK(수기)</MenuItem>
          <MenuItem value={"CKEYIN"}>수기결제 WebLink</MenuItem>
          <MenuItem value={"EPAY"}>간편결제</MenuItem>
          <MenuItem value={"EBANK"}>계좌간편결제</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  );
}
