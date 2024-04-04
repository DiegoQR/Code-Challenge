import './Dashboard.css'

import React, { useEffect } from 'react';

import { useQuery, gql } from '@apollo/client'
import { LOAD_ALL_TASKS } from '../../GraphQL/Queries';
 
import Sidebar from '../../Components/Sidebar';
import MenuItem from '../../Components/MenuItem';
import PlusButton from '../../Components/PlusButton';
import TaskCard from '../../Components/TaskCard';
import TaskColumn from '../../Components/TaskColumn';

import { IconLayoutGrid, IconMenu2 } from '@tabler/icons-react';
import { Group } from '@mantine/core';


function Dashboard() {
    const {error, loading, data} = useQuery(LOAD_ALL_TASKS)

    useEffect(() => {
        console.log(data)
    }, [data]) 

    const backlogTasks = data.tasks.filter((task) => task.status === "BACKLOG")
    const cancelledTasks = data.tasks.filter((task) => task.status === "CANCELLED")
    const doneTasks = data.tasks.filter((task) => task.status === "DONE")
    const inProgressTasks = data.tasks.filter((task) => task.status === "IN_PROGRESS")
    const todoTasks = data.tasks.filter((task) => task.status === "TODO")

    return (
        <>
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
                        <PlusButton />
                    </div>
                    <div className='task-board'>
                        <Group align='flex-start' wrap='nowrap'> 
                            <TaskColumn title="Backlog" tasks={backlogTasks} />
                            <TaskColumn title="Cancelled" tasks={cancelledTasks} />
                            <TaskColumn title="Done" tasks={doneTasks} />
                            <TaskColumn title="In Progress" tasks={inProgressTasks} />
                            <TaskColumn title="Todo" tasks={todoTasks} />
                        </Group>
                    </div>
                </div>
            </div>  
        </>
    );
}

export default Dashboard