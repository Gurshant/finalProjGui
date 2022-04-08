import React, { useState } from 'react';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Session } from '../requests';

export default function Login() {
    const [error, setError] = useState<string | undefined>(undefined);

    const createSession = (event: React.ChangeEvent<HTMLFormElement | undefined>) => {
        // debugger
        event.preventDefault();
        const fd = new FormData(event.currentTarget);
        Session.create({
            email: fd.get('email'),
            password: fd.get('password')
        }).then(data => {
            if (data.status === 404) {
                setError("Wrong email or password")
            } else {
                setError(undefined)
            }
        })
    }
    return (
        <Container maxWidth="sm">
            <Box sx={{ bgcolor: "background" }} component="form" onSubmit={createSession} >

                <Typography variant="h3" component="h1" sx={{
                    padding: `25px`,
                    textAlign: 'center'
                }}>
                    Sign In
                </Typography>

                <TextField
                    error={error !== undefined}
                    helperText={error}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    error={error !== undefined}
                    helperText={error}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: '1rem' }}
                >Sign In</Button>

            </Box>
        </Container >
    );
}

