import { ActionIcon } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import React from 'react';

function PlusButton({onClick}) {
    
    return (
        <>
            <ActionIcon variant='filled' color='red' aria-label='AddTask' onClick={onClick}>
                <IconPlus />
            </ActionIcon>
        </>
    );
}

export default PlusButton