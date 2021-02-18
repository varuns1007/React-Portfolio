import {
  Container,
  Typography,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as AboutMeSvg } from "../assets/aboutMeSvg.svg";



const useStyles = makeStyles({
  aboutMeDiv: {
    marginBottom: "2em",
  },
  aboutMeSvg: {
    height: "14em",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    paddingTop: "2.2em",
  },
  aboutMePara: {
    fontWeight: 400,
    position: "relative",
    top: "29%",
    fontSize: "22px",
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

const AboutDiv = () => {
    const classes = useStyles();

    return (
      <div className={classes.aboutMeDiv} id="aboutDiv">
        <Container>
          <div>
            <Typography
              variant="h5"
              align="center"
              className={classes.divHeader}
            >
              About Me
            </Typography>
          </div>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <AboutMeSvg className={classes.aboutMeSvg} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.aboutMePara}>
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.aboutMeBody}
                >
                  Hello! I am Varun Shinde, a web-developer. Currently I am
                  studying in SIESGST College pursing a B.Tech degree.
                  Working with Technical Team SIESGST as a Junior Web Developer.
                  I love listening rock and my favourite band is Linkin
                  Park.Love cooking and obessed with David Dobrik.Would love to
                  meet him one day :).
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
}

export default AboutDiv;