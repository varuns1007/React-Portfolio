import { Grid, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { LinkedIn, GitHub, Instagram } from "@material-ui/icons";


const useStyles = makeStyles({
  contactCard: {
    height: "150px",
    fontSize: "3em",
    paddingTop: "1em",
    textAlign: "center",
    verticalAlign: "middle",
    "&:hover": {
      boxShadow: "0 10px 16px 0 rgba(0,0,0,0.7),0 6px 20px 0 rgba(0,0,0,0.19)",
      cursor: "pointer",
    },
  },
});

const ContactCard = (props) => {
    const classes = useStyles();
    const icon = props.iconName;
    const Icon =
      icon === "LinkedIn"
        ? LinkedIn
        : icon === "Instagram"
        ? Instagram
        : GitHub;  
    
    return (
      <Grid item xs={12} sm={4}>
        <Card
          style={{ backgroundColor: props.backgroundColor }}
          className={classes.contactCard}
          onClick={() =>
            (window.location = props.link)
          }
        >
          <CardContent>
            <Icon style={{ color: "#E9EBEE", fontSize: "1em" }} />
          </CardContent>
        </Card>
      </Grid>
    );
}

export default ContactCard;