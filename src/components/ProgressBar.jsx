import { LinearProgress,Grid,Typography } from "@material-ui/core";
import { makeStyles,withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  skillsProgressBar: {
    marginTop: "0.58em",
  },
});


const ProgressBar = (props) => {
    const classes = useStyles();


    const BorderLinearProgress = withStyles((theme) => ({
      root: {
        height: 10,
        borderRadius: 5,
      },
      colorPrimary: {
        backgroundColor:
          theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
      },
      bar: {
        borderRadius: 5,
        backgroundColor: props.backgroundColor,
      },
    }))(LinearProgress);
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" align="right">
              {props.skillName}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9}>
            <BorderLinearProgress
              variant="determinate"
              value={props.value}
              className={classes.skillsProgressBar}
            />
          </Grid>
        </Grid>
      </div>
    );

}

export default ProgressBar;

