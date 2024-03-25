'use client'
import { Avatar, Container, Menu, MenuItem, Stack } from '@mui/material';
import Chip from '@mui/material/Chip';
import * as React from 'react';

const Header: React.FC = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                    onClick={handleClick}
                    avatar={<Avatar alt="Ted Smith" src="/static/images/avatar/1.jpg" />}
                    label="Ted Smith"
                    variant="outlined"
                />

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>

            </Stack>


        </Container>

    )
};

export default Header;