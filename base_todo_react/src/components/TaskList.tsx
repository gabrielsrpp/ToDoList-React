import React from 'react'


// interfaces
import { ITask } from '../interfaces/Task'
// CSS
import styles from '../TaskList.module.css'


interface Props  {
  taskList: ITask [];
}

interface Props {
  taskList: ITask[];
}

const TaskList = (props: Props) => {
  return (
    <>
      {props.taskList.length > 0 ? (
        props.taskList.map((task) => (
          <div key={task.id}>
            <p>{task.title}</p>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas</p>
      )}
    </>
  );
};


export default TaskList