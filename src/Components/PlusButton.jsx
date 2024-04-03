import { ActionIcon } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import React from 'react';

function PlusButton({params}) {
    
    return (
        <>
            <ActionIcon variant='filled' color='red' aria-label='AddTask'>
                <IconPlus />
            </ActionIcon>
        </>
    );
}

export default PlusButton