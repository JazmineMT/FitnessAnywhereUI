import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useState, useEffect} from 'react'
import {connect} from  'react-redux'
import {getClass, saveClass} from '../actions/index'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import orange from '../pics/orange.jpg'
import { red } from '@material-ui/core/colors';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));


const Classes = props => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

 


    const save = (id) => {
        // props.saveClass()
        props.saveClass(props.user.userId, id)

    }
    
        


    useEffect( () => {
        props.getClass()
    },[])


      
    
    

    return(
        <div>
           { props.allClasses.map( res => {
               return (
                <Card className={classes.root}>
                    <CardHeader
                            avatar={
                                <Avatar aria-label="avatar" className={classes.avatar}>
                                  FA
                                </Avatar>
                              }
                              action={
                                <IconButton aria-label="settings">
                                  <MoreVertIcon />
                                </IconButton>
                              }
                              title={res.name}
                              subheader={res.classDate}
                    />
                    <CardMedia
                        className={classes.media}
                        image = {orange}
                        title = 'Main image'
                    />
                    <CardContent>
                        <Typography>
                              {res.description}
                        </Typography>
                        <Typography>
                              {res.duration}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                <Button onClick={e => {
                    e.preventDefault()
                    save(res.id)
                }}> Save to Profile</Button>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Class Details:</Typography>
          <Typography paragraph>
            Instructor  : {res.Instructor}
          </Typography>
          Cost : {res.cost}
          <Typography paragraph>
            Current Registered: {res.currentRegistered}
     
          </Typography>
            Max Class Size: {res.maxClassSize}
          <Typography paragraph>
            Class Intensity Level: {res.level_name}
      
          </Typography>
            Location: {res.location}
          <Typography>
              Duration: {res.duration}
        
          </Typography>
        </CardContent>
      </Collapse>
                
                </Card>
               )
           })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        allUsers: state.allUsers,
        allClasses: state.allClasses,
        classSearch: state.classSearch,
        body: state.body,
        user: state.user

    }
}

export default connect(mapStateToProps, {getClass, saveClass})(Classes);


