// import useStyles from './styles';
import {Typography} from "@mui/material";

const Footer = () => {

    const classes = useStyles();
    return(
        <Typography className="footer" variant = 'subtitle2'>© 2023 Medina development. All Rights Reserved</Typography>
    )
}

export default Footer