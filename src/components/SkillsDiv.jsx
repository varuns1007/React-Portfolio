import {
  Container,
  Typography,
} from "@material-ui/core";
import ProgressBar from "./ProgressBar";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  skillsDiv: {
    paddingBottom: "2em",
  },
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

const SkillsDiv = () => {
    const classes = useStyles();

    return (
      <div className={classes.skillsDiv} id="skillsDiv">
        <Container>
          <div className={classes.skillsHeader}>
            <Typography
              variant="h5"
              align="center"
              className={classes.divHeader}
            >
              Skills
            </Typography>
          </div>

          <div className={classes.skillsProgress}>
            <ProgressBar
              skillName="ReactJS"
              value={40}
              backgroundColor="#61DBFB"
            />
            <ProgressBar
              skillName="NodeJS"
              value={60}
              backgroundColor="#41B883"
            />
            <ProgressBar
              skillName="Javascript"
              value={70}
              backgroundColor="#F0DB4F"
            />
            <ProgressBar
              skillName="HTML/CSS"
              value={90}
              backgroundColor="#E44D26"
            />
          </div>
        </Container>
      </div>
    );
};

export default SkillsDiv;