import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Typography, makeStyles } from '@material-ui/core';
import { TimelineOppositeContent } from '@material-ui/lab';
import {
    ExpContainer, ExpHeader
} from './Exp'

const useStyles = makeStyles(theme=>({

}))

export default function Exp() {
    return (
        <ExpContainer>
            <ExpHeader>Experience</ExpHeader>
            <Timeline align="alternate">
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography>2021 - Present</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography>
                            CTO, Getto co.
                        </Typography>
                        <Typography>
                            Developer, Dev Hero
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography>Comming Soon...</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography>Present - Future</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </ExpContainer>
    )
}