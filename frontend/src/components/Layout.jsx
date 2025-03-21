import React from 'react';
import TaskIndicator from './TaskIndicator';
import CreateTask from './createTask/CreateTask';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div>
            <div className='flex flex-col md:flex-row md:justify-between'>
                <CreateTask />
                <div className='task-container w-auto mx-4 md:w-1/3 mt-2'>
                    <div className='z-0 outlet'>
                        <Outlet />
                        
                    </div>
                    <div className='z-10 p-3 indicator'>
                            <TaskIndicator />
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;