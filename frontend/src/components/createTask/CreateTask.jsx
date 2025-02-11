import React, { useState, useContext } from 'react';
import TaskContext from '../../context/TaskContext';
import TokenContext from '../../context/TokenContext';
import axios from "../../Axios/axios.js";

function CreateTask() {
    const { dispatch } = useContext(TaskContext);
    const { userToken } = useContext(TokenContext);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const handleAdd = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await axios.post("/task/addTask", { title, description }, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            });
            dispatch({
                type: "ADD_TASK",
                title,
                description
            });
            setTitle("");
            setDescription("");
            setMessage({ type: 'success', text: 'Task added successfully!' });
        } catch (error) {
            console.error(error);
            setMessage({ type: 'error', text: 'Failed to add task. Please try again.' });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="max-w-md mx-auto mt-3 p-8 mb-10 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Create New Task</h2>
            <form onSubmit={handleAdd}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter task title"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                    <textarea
                        rows={4}
                        name="description"
                        id="description"
                        value={description}
                        required
                        onChange={(e) => setDescription(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter task description"
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Adding...' : 'Add Task'}
                    </button>
                </div>
            </form>
            {message && (
                <div className={`mt-4 p-3 rounded ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {message.text}
                </div>
            )}
        </div>
    );
}

export default CreateTask;