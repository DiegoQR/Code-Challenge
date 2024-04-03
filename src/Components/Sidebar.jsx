import React from 'react';
import { Stack, Box, Image, Center } from '@mantine/core';

import imageLogo from '../Assets/img/ravn-logo.png';

function Sidebar({children, sx={}}) {
    sx.borderRadius = sx.borderRadius ?? "24px"

    return (
        <Box bg="#2C2F33" align='center' gap="xs" p={20} w="20vw" h="95vh" style={sx}>
            <Stack align='strech'>
                <Center>
                    <Image src={imageLogo} w={40}/>
                </Center>
                {children}
            </Stack> 
        </Box>
    );
}

export default Sidebar