import './Dashboard.css'

import React from 'react';

import Sidebar from '../../Components/Sidebar';
import MenuItem from '../../Components/MenuItem';

import { IconLayoutGrid, IconMenu2 } from '@tabler/icons-react';
import PlusButton from '../../Components/PlusButton';
import { Group } from '@mantine/core';

function Dashboard() {
    return (
        <>
            <div className='dashboard-page'>
                <div className='slidebar'>
                    <Sidebar>
                        <p></p>
                        <MenuItem label="DASHBOARD" icon={<IconLayoutGrid size={14} />} active={true}/>
                        <p></p>
                        <MenuItem label="MY TASK" icon={<IconMenu2 size={14} />}/>
                    </Sidebar>
                </div>
                <div className='dashboard'>
                    <PlusButton />
                </div>
            </div>  
        </>
    );
}

export default Dashboard