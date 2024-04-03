import React from 'react';

import { Card, Text, Title, ActionIcon, Grid, Stack, Badge, Center, Group, Avatar } from '@mantine/core';
import { IconDots, IconAlarm } from '@tabler/icons-react';

function TaskCard ({task, sx = {}}) {

    sx.backgroundColor = sx.backgroundColor ?? "#2C2F33"
    sx.border = sx.border ?? "none"
    sx.color = sx.color ?? "#FFFFFF"
    sx.padding = sx.padding ?? "16px"
    sx.width = sx.width ?? "348px"
    sx.height = sx.height ?? "208px"

    const wordToNumber = {
        "ZERO" : "0",
        "ONE" : "1",
        "TWO" : "2",
        "THREE" : "3",
        "FOUR" : "4",
        "FIVE" : "5",
        "SIX" : "6",
        "SEVEN" : "7",
        "EIGHT" : "8",
        "NINE" : "9",
        "TEN" : "10"
    }

    const dueDate = new Date(task.dueDate)

    function handleTag(tag){
        const tagsConversor = {
            "ANDROID" : {
                name: "ANDROID",
                color: "#E5B454"
            },
            "IOS" : {
                name: "IOS APP",
                color: "#70B252"
            },
            "NODE_JS" : {
                name: "NODE JS",
                color: "#B352AE"
            },
            "RAILS" : {
                name: "RAILS",
                color: "#528BB3"
            },
            "REACT" : {
                name: "REACT",
                color: "#3A8A5B"
            },
        }

        return (
            <Badge h={32} radius={4} c={tagsConversor[tag].color} bg={tagsConversor[tag].color.concat("1A")}>{tagsConversor[tag].name}</Badge>
        );
    }

    return (
        <>
            <Card shadow="sm" padding="xl" withBorder style={sx}>
                <Stack>
                    <Grid grow>
                        <Grid.Col span={8}>
                            <Title order={4}>{task.name}</Title>
                        </Grid.Col>
                        <Grid.Col span="auto">
                            <ActionIcon variant='transparent' color='#94979A' offset={3}> 
                                <IconDots />
                            </ActionIcon>
                        </Grid.Col>
                    </Grid>
                    <Grid grow>
                        <Grid.Col span={3}>
                            <Text size="md">{wordToNumber[task.pointEstimate]} points</Text>
                        </Grid.Col>
                        <Grid.Col span="auto">
                            <Badge bg="#94979A1A" h={32} radius={4} style={{padding: "4px 16px"}}>
                                <Center>
                                    <IconAlarm size={24}></IconAlarm>
                                    {dueDate.getDay()} {dueDate.toLocaleString('en', { month: 'long' })}, {dueDate.getFullYear()}
                                </Center>
                            </Badge>
                        </Grid.Col>
                    </Grid>
                    <Group gap={8}>
                        {task.tags.map(tag => {
                            return handleTag(tag)
                        })}
                    </Group>
                    <Avatar src={task.assignee.avatar}/>
                </Stack>
            </Card>
        </>
    )
}

export default TaskCard;