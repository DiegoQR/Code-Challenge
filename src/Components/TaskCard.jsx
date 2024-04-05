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
        "FOUR" : "4"
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

    function handleDueDate(date) {
        const todayDate = new Date()
        const differenceInMilliseconds =  date.getTime() - todayDate.getTime()
        const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24))
        let colorToDisplay = "#94979A"
        let color = "#FFFFFF" 
        let dateToDisplay = `${date.getDay()} ${date.toLocaleString('en', { month: 'long' })}, ${date.getFullYear()}`

        if(differenceInDays > 0 && differenceInDays <= 2) {
            colorToDisplay = "#E5B454"
            color = colorToDisplay
        } else if (differenceInDays === 0) {
            dateToDisplay = "TODAY"
        } else if (differenceInDays === -1) {
            dateToDisplay = "YESTERDAY"
            colorToDisplay = "#DA584B"
            color = colorToDisplay
        } else if(differenceInDays < -1) {
            colorToDisplay = "#DA584B"
            color = colorToDisplay
        }
        
        return (
            <Badge bg={colorToDisplay.concat("1A")} h={32} radius={4} style={{padding: "4px 16px"}} c={color}>
                <Center>
                    <IconAlarm size={24} ></IconAlarm>
                    <Text weight={700}>{dateToDisplay}</Text>
                </Center>
            </Badge>
        )
        
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
                            {handleDueDate(dueDate)}
                        </Grid.Col>
                    </Grid>
                    <Group gap={8}>
                        {task.tags.map(tag => {
                            return handleTag(tag)
                        })}
                    </Group>
                    <Avatar src={task.assignee.avatar} size={32}/>
                </Stack>
            </Card>
        </>
    )
}

export default TaskCard;