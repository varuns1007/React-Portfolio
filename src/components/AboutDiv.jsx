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
    top: "26%",
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Scelerisque varius integer eget malesuada aliquam egestas.
                  Gravida amet morbi turpis adipiscing ullamcorper. Metus
                  lobortis ut enim facilisis mauris, massa facilisis.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
}

export default AboutDiv;