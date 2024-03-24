
import { Avatar, Container, Stack } from '@mui/material';
import Chip from '@mui/material/Chip';
import * as React from 'react';

const Header: React.FC = () => {
    return (
        <Container style={{
            position: 'fixed',
            top: '0px',
            left: '0px',
            display: 'flex',
            flexDirection: 'row-reverse',
            zIndex: 100
        }}>

            <Stack direction="row" style={{
                alignItems: "center",
                backgroundColor: '#fff',
                borderRadius: '15px',
                margin: '10px',
                padding: '3px'
            }}>

                <Chip
                    avatar={<Avatar alt="Ted Smith" src="/static/images/avatar/1.jpg" />}
                    label="Ted Smith"
                    variant="outlined"
                />
            </Stack>


        </Container>

    )
};

export default Header;