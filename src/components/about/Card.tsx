import { Card, CardContent, Typography } from "@mui/material"

const AboutCards = () =>{

    return(
        <div className='card-container'>
            <Card sx={{ maxWidth: 250,backgroundColor:'red' }}>
                <CardContent>
                    <Typography variant="h4" color="white" textAlign='center'>
                    10+
                    </Typography>
                    <Typography variant="h4" color="white">
                    Courses
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 150,backgroundColor:'green' }}>
                <CardContent>
                    <Typography variant="h4" color="white" textAlign='center'>
                    10+
                    </Typography>
                    <Typography variant="h4" color="white">
                    Courses
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 150,backgroundColor:'blue' }}>
                <CardContent>
                    <Typography variant="h4" color="white" textAlign='center'>
                    10+
                    </Typography>
                    <Typography variant="h4" color="white">
                    Courses
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 250,backgroundColor:'yellow' }}>
                <CardContent>
                    <Typography variant="h4" color="white" textAlign='center'>
                    10+
                    </Typography>
                    <Typography variant="h4" color="white">
                    Courses
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default AboutCards;