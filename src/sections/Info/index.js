import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import {
    InfoContainer, ImgProfile,
    InfoWrap, InfoContent, InfoHeader,
    EducationImg, EducationContainer,
    EducationLevel, EducationPlace, EducationWrap, EducationYear, EducationContent
} from './Info'
import meImg from '../../assets/me2.JPG'
import schoolImg from '../../assets/montfort.png'
import camtImg from '../../assets/camt.png'


const useStyles = makeStyles((theme) => ({

}))

export default function Info() {

    const classes = useStyles()

    return (
        <>
            <InfoContainer>
                <Grid
                    container spacing={0}
                >
                    <Grid
                        container item
                        md={12} lg={4}
                    >
                        <ImgProfile src={meImg} />
                    </Grid>
                    <Grid
                        container item
                        md={12} lg={8}
                    >
                        <Grid
                            item xs={12}
                        >
                            <InfoWrap>
                                <InfoHeader>
                                    I'm Ice, a Software Engineer student...
                                </InfoHeader>
                                <InfoContent>
                                    I'm a guy who born in Chiangmai, Thailand and studying year 3 of Software engineering at CAMT, Chiangmai University. Now, I learn about MachineLearning scientist because I want to be AI researcher but first I should to good at manage and analysis datasets. In my freetime I love to training MMA, travel, learning code, play game, and sleep. If You want to contact me you can contact me with this email: tk.thanatorn@gmail.com or text me on social media:)
                                </InfoContent>
                            </InfoWrap>
                        </Grid>
                        <Grid
                            item xs={12}
                        >
                            <EducationContainer>
                                <EducationWrap>
                                    <EducationImg src={schoolImg} />
                                    <EducationContent>
                                        <EducationPlace>Montfort College</EducationPlace>
                                        <EducationLevel>Secondary</EducationLevel>
                                        <EducationYear>2013 - 2019</EducationYear>
                                    </EducationContent>
                                </EducationWrap>
                                <EducationWrap>
                                    <EducationImg src={camtImg} />
                                    <EducationContent>
                                        <EducationPlace>College of Art Media and Technology, CMU</EducationPlace>
                                        <EducationLevel>Bachelor of Software Engineer</EducationLevel>
                                        <EducationYear>2019 - Present</EducationYear>
                                    </EducationContent>
                                </EducationWrap>
                            </EducationContainer>
                        </Grid>
                    </Grid>
                </Grid>
            </InfoContainer>
        </>
    )
}

// I'm Ice, a Software Engineer student...
// I'm a guy who born in Chiangmai, Thailand and studying year 3 of Software engineering at CAMT, Chiangmai University. Now, I learn about Data science because I want to be AI researcher but first I should to good at manage and analysis datasets. In my freetime I love to training MMA, travel, learning code, play game, and sleep. If You want to contact me you can contact me with this email: tk.thanatorn@gmail.com or text me on social media:)