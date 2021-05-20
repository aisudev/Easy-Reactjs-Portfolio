import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import {
    InfoContainer, InfoImg, InfoTitle, InfoContent, InfoWrap, InfoQoute, SchoolarImg, SchoolarInfo
} from './Info'
import meImg from '../../assets/me2.JPG'
import schoolImg from '../../assets/montfort.png'
import camtImg from '../../assets/camt.png'


const useStyles = makeStyles((theme) => ({
    containerImg: {
        padding: theme.spacing(5),

    },
    schoolarContainer: {
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
}))

export default function Info() {

    const classes = useStyles()

    return (
        <>
            <InfoContainer>
                <Grid
                    container
                >
                    <Grid
                        container item
                        sm={12} md={4}
                        className={classes.containerImg}
                    >
                        <InfoImg src={meImg} />
                    </Grid>
                    <Grid
                        container item
                        sm={12} md={8}
                    >
                        <Grid item xs={12} >
                            <InfoWrap>
                                <InfoTitle>I'm Ice, a Software Engineer student...</InfoTitle>
                                <InfoContent>
                                    I'm a guy who born in Chiangmai, Thailand and studying year 3 of Software engineering at CAMT, Chiangmai University.
                                    Now, I learn about Data science because I want to be AI researcher but first I should to good at manage and analysis datasets.
                                    In my freetime I love to training MMA, travel, learning code, play game, and sleep.
                                    If You want to contact me you can contact me with this email: tk.thanatorn@gmail.com or text me on social media :)
                                </InfoContent>
                            </InfoWrap>
                        </Grid>
                        <Grid item md={6} className={classes.schoolarContainer}>
                            <SchoolarImg src={schoolImg} />
                            <SchoolarInfo>
                                <h3>Montfort College</h3>
                                2013 - 2019
                            </SchoolarInfo>
                        </Grid>
                        <Grid item md={6} className={classes.schoolarContainer} >
                            <SchoolarImg src={camtImg} />
                            <SchoolarInfo>
                                <h3>College of Arts, Media and Technology, CMU</h3>
                                2019 - Present
                            </SchoolarInfo>
                        </Grid>
                    </Grid>
                    {/* <Grid
                        container item
                        xs={12}
                    >
                        
                    </Grid> */}
                </Grid>
            </InfoContainer>
        </>
    )
}