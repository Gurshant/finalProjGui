import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';




export default function Home() {

    return (
        <Box sx={{
            maxWidth: 600,
            margin: '0 auto',
            textAlign: 'center'
        }}>
            <Typography variant="h1" component="h1" sx={{
                padding: `25px`,
            }}>
                Welcome
            </Typography>
            <Typography variant="h5" component="h4" sx={{
                padding: `15px`,
            }}>
                Please choose the option below that describes you best.
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'space-around',
                    justifyContent: 'space-around',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                    height: 60,
                    borderRadius: 1,
                }}
            >
                <Button variant="contained" href="register">Attendee</Button>
                <Button variant="contained" href="login">Administrator</Button>
            </Box>
        </Box>
    );
}

