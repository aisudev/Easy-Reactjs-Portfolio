import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import { Typography, makeStyles, Paper } from '@material-ui/core';
import { TimelineOppositeContent } from '@material-ui/lab';
import {
    ExpContainer, ExpHeader
} from './Exp'

const useStyles = makeStyles(theme => ({
    time: {
        width: 'max-content',
        backgroundColor: '#fff',
        color: '#053000',
        margin: '7px 0',
        padding: '10px 20px',
        boxShadow: '5px 5px #A0FEAC',
    },
    connector: {
        width: 2,
        height: 100,
        color: '#fff',
        backgroundColor: '#fff'
    },
    timeline: {

    },
    card: {
        margin: '0 2em',
    }
}))

export default function Exp() {

    const classes = useStyles()

    return (
        <ExpContainer>
            <ExpHeader>Experience</ExpHeader>
            <Timeline align="alternate">
                <TimelineItem className={classes.timeline} >
                    <TimelineOppositeContent></TimelineOppositeContent>
                    <TimelineSeparator>
                        <Typography className={classes.time}>
                            2021
                        </Typography>
                        <TimelineConnector className={classes.connector} />
                    </TimelineSeparator>
                    <TimelineContent></TimelineContent>
                </TimelineItem>
                <TimelineItem className={classes.timeline} >
                    <TimelineOppositeContent>
                        <Typography className={classes.card}>
                            <Typography>Developer at DevHero</Typography>
                            <Typography>
                                Software House.
                            </Typography>
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <Typography className={classes.time}>
                            Present
                        </Typography>
                        <TimelineConnector className={classes.connector} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography className={classes.card}>
                            <Typography>CTO at Getto co.</Typography>
                            <Typography>
                                Tech Startup company.
                            </Typography>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem className={classes.timeline} >
                    <TimelineOppositeContent></TimelineOppositeContent>
                    <TimelineSeparator>
                        <Typography className={classes.time}>
                            comming soon
                        </Typography>
                    </TimelineSeparator>
                    <TimelineContent></TimelineContent>
                </TimelineItem>
            </Timeline>
        </ExpContainer>
    )
}