import React from 'react'

function List(props) {
    return (
        <div>
            {
                props.list.map(todo, index) => (
                    <input type="checkbox" value={todo.title}/>
                )
            }
            

            
        </div>
        // <ul>
        //     {
        //         props.list.map((item) => (
        //             <li>{item.title}</li>
        //             // <li>{item.isCompleted}</li>
        //         ))
        //     }
        // </ul>
    )
}

export default List
