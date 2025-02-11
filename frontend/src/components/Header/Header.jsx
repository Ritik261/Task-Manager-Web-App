import React, { useContext } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import TokenContext from '../../context/TokenContext.js';

function Header() {
    const token = localStorage.getItem("authToken");
    const { user } = useContext(TokenContext);

    const logout = () => {
        localStorage.removeItem("authToken");
        window.location.href = "/login";
    }

    return (
        <div>
            <nav className="bg-indigo-600 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <NavLink to="/" className="text-white font-bold text-xl">Task Manager</NavLink>
                            </div>
                        </div>
                        <div className="flex items-center">
                            {token ? (
                                <div className="flex items-center">
                                    <p className="text-white mr-4">Welcome, <span className="font-semibold capitalize">{user.name}</span></p>
                                    <button 
                                        onClick={logout} 
                                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <div className="flex items-center space-x-4">
                                    <NavLink 
                                        to="/login" 
                                        className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
                                    >
                                        Login
                                    </NavLink>
                                    <NavLink 
                                        to="/register" 
                                        className="bg-white text-indigo-600 hover:bg-indigo-100 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
                                    >
                                        Register
                                    </NavLink>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
}

export default Header;