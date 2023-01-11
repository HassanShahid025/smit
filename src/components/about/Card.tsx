import { Card, CardContent, Typography } from "@mui/material"

const AboutCards = () =>{

    return(
        <div className='card-container'>
            <Card sx={{ width: 150, height:150, backgroundColor:'#28a745' }}>
                <CardContent>
                    <Typography variant="h6" color="#fff" textAlign='center' fontSize={45} fontWeight={700}>
                    14+
                    <Typography variant="h6" color="#fff" textAlign='center' fontSize={15} fontWeight={500}>
                    COURSES
                    </Typography>
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ width: 150, height:150,backgroundColor:'#2878EB' }}>
                <CardContent>
                    <Typography variant="h6" color="#fff" textAlign='center' fontSize={45} fontWeight={700}>
                    20+
                    <Typography variant="h6" color="#fff" textAlign='center' fontSize={15} fontWeight={500}>
                    SKILLED INSTRUCTORS
                    </Typography>
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ width: 150, height:150,backgroundColor:'#F14D5D' }}>
                <CardContent>
                    <Typography variant="h6" color="#fff" textAlign='center' fontSize={45} fontWeight={700}>
                    25+
                    <Typography variant="h6" color="#fff" textAlign='center' fontSize={15} fontWeight={500}>
                    ONLINE COURSES
                    </Typography>
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ width: 150, height:150,backgroundColor:'#ffc107' }}>
                <CardContent>
                    <Typography variant="h6" color="#fff" textAlign='center' fontSize={45} fontWeight={700}>
                    80+
                    <Typography variant="h6" color="#fff" textAlign='center' fontSize={15} fontWeight={500}>
                    CERTIFIED STUDENTS
                    </Typography>
                    </Typography>
                </CardContent>
            </Card>
            
            
        </div>
    )
}

export default AboutCards;