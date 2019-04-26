import React, { Component } from 'react';
import List from './List'

// const ListItem = (list) => {
//     // Correct! There is no need to specify the key here:
//     return (
//         <ul>
//             {
//                 list.map((item) => (
//                     <li>{item.title}</li>
//                 ))
//             }
//         </ul>
//     )
// }

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    id: 1,
                    title: 'Task1',
                    isCompleted: true
                },
                {
                    id: 2,
                    title: 'Task2',
                    isCompleted: true
                },
                {
                    id: 3,
                    title: 'Task3',
                    isCompleted: false
                },
                {
                    id: 4,
                    title: 'Task4',
                    isCompleted: false
                },
                {
                    id: 5,
                    title: 'Task5',
                    isCompleted: false
                }
            ],
            showCompleted: false,
        }
    }

    onToggleListItem = () => {
        // statement
    }

    onToggleCompletedList = () => {
        // statement
        this.setState
    }

    onCreateNewItem = () => {
        // statement 
    }

    onEditTask = () => {
        // statement
    }

    onDelete = () => {
        // statement
    }

    render() {
        return (
            <div className="container">
                <div>
                    <h1>Todo Lists</h1>
                    <button className="btn btn-primary">Add Task</button>
                </div>
                <List list={this.state.list} />
                {/* <div>
                    {ListItem(this.state.list)}
                </div> */}

            </div>
        )
    }
}


export default TodoForm