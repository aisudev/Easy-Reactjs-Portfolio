import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import {
    SkillContainer, SkillHeader, SkillWrap, ProgressBar, ProgressValue, SkillTitle
} from './Skill'

const useStyles = makeStyles(theme => ({
    skillContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))

const skill = [
    {
        name: 'Python',
        value: 70
    },
    {
        name: 'Machine Learning / Deep Learning',
        value: 10
    },
    {
        name: 'IoT',
        value: 0
    },
    {
        name: 'Data Science',
        value: 30
    },
    {
        name: 'ReactJS',
        value: 70
    },
    {
        name: 'ReactNative',
        value: 70
    },
    {
        name: 'Golang',
        value: 0
    },
    {
        name: 'NodeJS (Expressjs, Fastify)',
        value: 60
    },
    {
        name: 'DevOP',
        value: 50
    },
]

export default function Skill() {

    const classes = useStyles()

    return (
        <SkillContainer>
            <SkillTitle>
                "SKILL"
            </SkillTitle>
            <Grid
                container spacing={2}
            >
                {
                    skill.map(item => (
                        <Grid
                            item xs={12} sm={12} md={6} lg={4}
                            className={classes.skillContainer}
                        >
                            <SkillWrap>
                                <SkillHeader>{item.name}</SkillHeader>
                                <ProgressBar>
                                    <ProgressValue value={item.value}/>
                                </ProgressBar>
                            </SkillWrap>
                        </Grid>
                    ))
                }
            </Grid>
        </SkillContainer>
    )
}