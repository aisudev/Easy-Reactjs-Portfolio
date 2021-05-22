import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {ExpContainer} from './Exp'
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme=>({
    date:{
        color: '#fff'
    }
}))

export default function Exp() {

    const classes = useStyles()

    return (
        <ExpContainer>
            <VerticalTimeline>
                <VerticalTimelineElement
                    iconStyle={{ background: '#49AD47', color: '#fff' }}
                    dateClassName={classes.date}
                    date='Present'
                />
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ 
                        background: '#fff', 
                        color: '#010101', 
                        textAlign:'center',
                        boxShadow:'5px 5px #A0FEAC',
                    }}
                    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                    iconStyle={{ background: '#fff', color: '#49AD47' }}

                >
                    <h3 className="vertical-timeline-element-title">Getto co.</h3>
                    <h4 className="vertical-timeline-element-subtitle">Cheif of Technology</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ 
                        background: '#fff', 
                        color: '#010101', 
                        textAlign:'center',
                        boxShadow:'5px 5px #A0FEAC'
                    }}
                    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                    iconStyle={{ background: '#fff', color: '#49AD47' }}

                >
                    <h3 className="vertical-timeline-element-title">DevHero Software House</h3>
                    <h4 className="vertical-timeline-element-subtitle">Developer</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: '#49AD47', color: '#fff' }}
                    dateClassName={classes.date}
                    date='Present'
                />
            </VerticalTimeline>
        </ExpContainer>
    )
}