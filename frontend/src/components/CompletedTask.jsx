import React from 'react';
import moment from "moment";

function CompletedTask({ task }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 mb-4 border-l-4 border-green-500 transition duration-300 ease-in-out hover:shadow-lg">
            <div className="flex items-start">
                
                <div className="ml-3 w-full">
                    <h4 className="text-lg font-semibold text-gray-800 capitalize mb-1">{task.title}</h4>
                    <p className="text-gray-600 mb-2">{task.description}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                        <span className="italic">
                            {task?.createdAt ? (
                                `Completed ${moment(task.createdAt).fromNow()}`
                            ) : (
                                'Completed just now'
                            )}
                        </span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            Completed
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompletedTask;