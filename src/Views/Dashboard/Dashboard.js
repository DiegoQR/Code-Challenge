import './Dashboard.css'

import React from 'react';

import Sidebar from '../../Components/Sidebar';
import MenuItem from '../../Components/MenuItem';
import PlusButton from '../../Components/PlusButton';
import TaskCard from '../../Components/TaskCard';

import { IconLayoutGrid, IconMenu2 } from '@tabler/icons-react';
import { Group } from '@mantine/core';

let inlineTask = {
    "name": "Ticket1",
    "tags": [
      "ANDROID",
      "IOS"
    ],
    "dueDate": "2024-04-06T02:44:21.586Z",
    "pointEstimate": "EIGHT",
    "assignee": {
      "avatar": "https://avatars.dicebear.com/api/initials/gs.svg"
    },
    "status": "BACKLOG"
  }

function Dashboard() {
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
                        <div className='task-column'>
                            <TaskCard task={inlineTask} />
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
}

export default Dashboard