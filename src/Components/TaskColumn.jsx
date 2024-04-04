import React from 'react';

import TaskCard from './TaskCard';

import { Stack, Text } from '@mantine/core';

function TaskColumn({title, tasks}) {

    return (
        <>
            <Stack gap="lg" justify="flex-start" w={348}>
                <Text size="lg" weight={700}>{title} ({tasks.length})</Text>
                    {tasks.map(( task ) => {
                        return <TaskCard task={task} />
                    })}
            </Stack>
        </>
    )
}

export default TaskColumn;