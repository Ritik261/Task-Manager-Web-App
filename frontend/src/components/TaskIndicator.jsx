import React from 'react';
import { NavLink } from 'react-router-dom';

function TaskIndicator() {
    return (
        <div className='flex-grow'>
            <nav className='bg-gray-200 rounded-lg shadow-lg'>
                <ul className='flex gap-4 justify-center p-4'>
                    <li className='text-gray-700 hover:text-blue-500 transition duration-300'>
                        <NavLink exact to="/" activeClassName='text-blue-500 font-bold'>All Tasks</NavLink>
                    </li>
                    <li className='text-gray-700 hover:text-blue-500 transition duration-300'>
                        <NavLink to="/active" activeClassName='text-blue-500 font-bold'>Active</NavLink>
                    </li>
                    <li className='text-gray-700 hover:text-blue-500 transition duration-300'>
                        <NavLink to="/completed" activeClassName='text-blue-500 font-bold'>Completed</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
     );
}

export default TaskIndicator;