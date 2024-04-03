import React from 'react';
import { Stack, Box, Image } from '@mantine/core';

import imageLogo from '../Assets/img/ravn-logo.png';

function Sidebar({children, sx={}}) {
    sx.borderRadius = sx.borderRadius ?? '20px'
    sx.height = sx.height ?? '90vh'
    sx.width = sx.width ?? '20vw'
    sx.padding = sx.padding ?? '20px'

    return (
        <Box bg="#2C2F33" align='center' style={sx}>
            <Stack align='strech' gap='xl'>
                <Image src={imageLogo} />
                {children}
            </Stack> 
        </Box>
    );
}

export default Sidebar