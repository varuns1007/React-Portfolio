import {
  Container,
  Typography,
  Grid,
} from "@material-ui/core";
import ContactCard from "./ContactCard";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  skillsHeader: {
    marginBottom: "1em",
  },
  divHeader: {
    fontWeight: 600,
    paddingTop: "0.5em",
    "&:before": {
      content: '""',
      position: "absolute",
      width: "3em",
      height: "3px",
      marginTop: "1.3em",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "#3f51b5",
    },
  },
});

const ContactDiv = () => {
    const classes = useStyles();

    return (
        <div id="contactDiv">
            <Container>
                <div className={classes.skillsHeader}>
                    <Typography variant="h5" align="center" className={classes.divHeader}>
                        Contact
            </Typography>
                </div>
                <Grid container spacing={4}>
                    <ContactCard
                        iconName="LinkedIn"
                        backgroundColor="#2867b2"
                        link="https://www.linkedin.com/in/varun-shinde-781215192/"
                    />
                    <ContactCard
                        iconName="Instagram"
                        backgroundColor="#E1306C"
                        link="https://www.instagram.com/_varun_shinde/"
                    />
                    <ContactCard
                        iconName="Github"
                        backgroundColor="#333333"
                        link="https://github.com/varuns1007"
                    />
                </Grid>
            </Container>
        </div>
    );
}

export default ContactDiv;