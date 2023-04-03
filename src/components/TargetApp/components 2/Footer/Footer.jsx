import useStyles from './styles';
import {Typography} from "@material-ui/core";

const Footer = () => {

    const classes = useStyles();
    return(
        <Typography className={classes.footer} variant = 'subtitle2'>© 2023 Medina development. All Rights Reserved</Typography>
    )
}

export default Footer