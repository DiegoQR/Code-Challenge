import './Dashboard.css'

import React, { useEffect } from 'react';

import { useQuery } from '@apollo/client'
import { LOAD_ALL_TASKS } from '../../GraphQL/Queries';
 
import Sidebar from '../../Components/Sidebar';
import MenuItem from '../../Components/MenuItem';
import PlusButton from '../../Components/PlusButton';
import TaskColumn from '../../Components/TaskColumn';
import CreateTaskModal from '../../Components/CreateTaskModal';

import { IconLayoutGrid, IconMenu2 } from '@tabler/icons-react';
import { Center, Group, Modal, Text } from '@mantine/core';
import { Loader } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';


function Dashboard() {
    const {error, loading, data} = useQuery(LOAD_ALL_TASKS)

    const [opened, {open, close}] = useDisclosure(false)

    useEffect(() => {
        console.log(data)
    }, [data]) 

    return (
        <>
            <CreateTaskModal opened={opened} onClose={close} />
            <div className='dashboard-page'>
                <div className='slidebar'>
                    <Sidebar>
                        <MenuItem label="DASHBOARD" icon={<IconLayoutGrid size={14} />} active={true}/>
                        <MenuItem label="MY TASK" icon={<IconMenu2 size={14} />}/>
                    </Sidebar>
                </div>
                <div className='dashboard'>
                    <div className='search-bar'>

                    </div>
                    <div className='buttons'>
                        <PlusButton onClick={open}/>
                    </div>
                    <div className='task-board'>
                        {error ? 
                        <Center>
                            <Text c="red"> ERROR!</Text>
                        </Center>:
                        (loading ? 
                        <Center>
                            <Loader color="red" />
                        </Center> :
                        <Group align='flex-start' wrap='nowrap'> 
                            <TaskColumn title="Backlog" tasks={data.tasks.filter((task) => task.status === "BACKLOG")} />
                            <TaskColumn title="Cancelled" tasks={data.tasks.filter((task) => task.status === "CANCELLED")} />
                            <TaskColumn title="Done" tasks={data.tasks.filter((task) => task.status === "DONE")} />
                            <TaskColumn title="In Progress" tasks={data.tasks.filter((task) => task.status === "IN_PROGRESS")} />
                            <TaskColumn title="Todo" tasks={data.tasks.filter((task) => task.status === "TODO")} />
                        </Group>
                        ) 
                        }
                    </div>
                </div>
            </div>  
        </>
    );
}

export default Dashboard