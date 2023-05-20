import React, { useState } from "react";
import {
  Box,
  Grid,
  FilledInput,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  body: {
    backgroundColor: " #f9efff",
  },
  wrapper: {
    border: "2px solid #c0bcbc", //#e8e8e8
    cursor: "pointer",
    marginTop: "20px",
    margin: "0 auto",
    trasition: ".3s",
    borderRadius: "10px",
    backgroundColor: "white",
    paddingBottom: "3px",
    "&:hover": {
      boxShadow: "0px 8px 25px rgba(0,0,0,0.1)",
      borderLeft: "6px solid #9a74b3",
    },
  },
  position: {
    fontSize: "13.5px",
    backgroundColor: "#561081",
    borderRadius: "8px",
    display: "inline-block",
    fontWeight: 600,
    padding: 5,
    color: "white",
  },
  skillchip: {
    margin: 4,
    padding: 5,
    fontSize: "14.5px",
    borderRadius: "6px",
    trasition: ".3s",
    cursor: "pointer",
    fontWeight: 600,
    backgroundColor: "#0B0B15",
    color: "#fff",
    height: "30px",
  },
  button: {
    borderRadius: "20px",
    backgroundColor: " #266cde",
    color: "white",
    textAlign: "center",
    "&:hover": {
      backgroundColor: "#1c1f70",
    },
  },
  max: {
    margin: 4,
    padding: 5,
    fontSize: "14.5px",
    trasition: ".3s",
    cursor: "pointer",
    fontWeight: 600,
    color: "red",
    height: "30px",
  },
  offer: {
    margin: 4,
    padding: 5,
    fontSize: "14.5px",
    trasition: ".3s",
    cursor: "pointer",
    fontWeight: 600,
    color: "green",
    height: "30px",
  },
  description: {
    fontSize: "20px",
    fontWeight: 600,
    color: "black",
  },
  apply: {
    backgroundColor: "#561081",
    color: "white",
    borderRadius: "10px",
    margin: "0 auto",
    "&:hover": {
      backgroundColor: "#1c1f70",
    },
  },
  salary: {
    height: "35px",
    marginTop: "23px",
  },
  cv: {
    height: "35px",
    marginLeft: "20px",
    backgroundColor: "#13ab94",
    color: "white",
    marginTop: "23px",
  },
  close: {
    color: "red",
    height: "20px",
    "&:hover": {
      backgroundColor: "#cf1212",
      color: "white",
    },
  },
  main: {
    height: "100%",
    width: "100%",
    borderRadius: "10px",
  },
  popup: {
    height: "235px",
    width: "108%",
    backgroundColor: "white",
    position: "sticky",
    top: "25%",
    right: "25%",
    borderRadius: "10px",
    textAlign: "center",
    border: "2px solid #e8e8e8",
    marginRight: "-129px",
    marginTop:"20px",
  },
  popupHeader: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 30px 0 15px",
    borderBottom: "2px solid black",
    textAlign: "center",
    marginTop: "10px",
    position: "sticky",
  },
}));

const Card = (props) => {
  const [popup, setPop] = useState(false);
  const handleClickOpen = () => {
    setPop(!popup);
  };
  const closePopup = () => {
    setPop(false);
  };
  const classes = useStyles();
  return (
    <Box p={4} className={classes.wrapper}>
      <Grid container>
        <Grid item xs>
          <Typography variant="subtitle1" className={classes.description}>
            {props.description}
          </Typography>
          <Typography variant="subtitle2" className={classes.position}>
            {props.position}
          </Typography>
          <Typography variant="subtitle3" className={classes.offer}>
            offer {props.offer}
          </Typography>
          <Typography variant="subtitle4" className={classes.max}>
            Max {props.maxCandidateNumber} Applicants
          </Typography>
        </Grid>

        <Grid item container xs>
          {props.qualifications.map((skill) => (
            <Grid key={skill} className={classes.skillchip} item>
              {skill}
            </Grid>
          ))}
        </Grid>
        <Grid item container direction="column" alignItems="flex-end" xs>
          <Typography>
            {props.type} | {props.location}
          </Typography>
          <Grid>
            <Box mt={2}>
              {!popup && (
                <Button
                  variant="contained"
                  disableElevation
                  className={classes.button}
                  onClick={handleClickOpen}
                >
                  Apply
                </Button>
              )}
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems={"center"}
              >
                {popup ? (
                  <Grid className={classes.main}>
                    <div className={classes.popup}>
                      <div className={classes.popupHeader}>
                        <h2>Applying Job</h2>
                        <Button
                          className={classes.close}
                          onClick={closePopup}
                        >
                          <h4>X</h4>
                        </Button>
                      </div>

                      <Grid container>
                        <Grid item xs={6}>
                          <FilledInput
                            className={classes.salary}
                            type="number"
                            placeholder="Salary *"
                            disableUnderline
                          />
                        </Grid>
                        {/* salary */}

                        <Grid item xs={6}>
                          <Box>
                            <Button
                              className={classes.cv}
                              variant="contained"
                              component="label"
                            >
                              Upload Your Cv
                              <input type="file" hidden />
                            </Button>
                          </Box>
                        </Grid>
                        {/* CV upload button*/}

                        <Box
                          width="100%"
                          display="flex"
                          justifyContent="space-between"
                          mt={4}
                        >
                          <Grid item container direction="column" alignItems="flex-end" xs>
                            <Button
                              /*variant="outlined"*/
                              disapleElevation
                              className={classes.apply}
                            >
                              Apply
                            </Button>
                          </Grid>
                        </Box>
                        {/* Apply button */}
                      </Grid>
                    </div>
                  </Grid>
                ) : (
                  ""
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Card;