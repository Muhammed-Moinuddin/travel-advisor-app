import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    // const classes = HeaderStyles;
    return(
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h5'>
                    Travel Advisor
                </Typography>
                <Box display="flex">
                    <Typography variant='h6'>
                        Explore New Places
                    </Typography>
                    {/* <Autocomplete> */}
                        <Box>
                            <Box>
                                <SearchIcon/>  
                            </Box>
                            <InputBase placeholder='Search.... '/>
                        </Box>
                    {/* </Autocomplete>     */}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;