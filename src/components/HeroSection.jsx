import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Button,
} from "@material-ui/core";
import heroBackground from "../assets/hero-background.jpg";
import EmailIcon from "@material-ui/icons/Email";


const useStyles = makeStyles({
  heroSection: {
    height: "500px",
    backgroundImage: `url(${heroBackground})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  mainHeadingDiv: {
    paddingTop: "9em",
  },
  mainHeading: {
    color: "white",
    fontWeight: 500,
  },
  subHeadingDiv: {
    paddingTop: "3em",
  },
  subHeading: {
    fontWeight: 700,
    color: "white",
  },
  learnMoreButton: {
    float: "right",
    marginTop: "1em",
  },
});


const HeroSection = () => {
    const classes = useStyles();

    return (
      <div className={classes.heroSection}>
        <Container>
          <div className={classes.mainHeadingDiv}>
            <Typography
              variant="h4"
              align="right"
              className={classes.mainHeading}
            >
              Hello!
            </Typography>
            <Typography
              variant="h4"
              align="right"
              className={classes.mainHeading}
            >
              I am Varun Shinde
            </Typography>
          </div>
          <div className={classes.subHeadingDiv}>
            <Typography
              variant="h3"
              align="right"
              className={classes.subHeading}
            >
              WEB DEVELOPER
            </Typography>
          </div>

          <a
            href="mailto:varunshinde.10601@gmail.com"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <Button
              variant="contained"
              color="primary"
              className={classes.learnMoreButton}
              startIcon={<EmailIcon />}
            >
              Contact Me
            </Button>
          </a>
        </Container>
      </div>
    );
}

export default HeroSection;