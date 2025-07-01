import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import styles from "./TaskForm.module.css";
import { ITask } from '../interfaces/Task';

interface Props  {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
}

const TaskForm = ({ btnText, taskList, setTaskList, task }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    }
  }, [task]);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask: ITask = { id, title, difficulty };

    if (setTaskList) {
      // Se for edição (id já existente), atualiza
      const updatedTasks = taskList.map(t => (t.id === id ? newTask : t));

      // Se for novo (id não existente), adiciona
      const isEditing = taskList.some(t => t.id === id);
      setTaskList(isEditing ? updatedTasks : [...taskList, newTask]);
    }

    // Resetar campos
    setId(0);
    setTitle("");
    setDifficulty(0);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  };

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Título da tarefa"
          onChange={handleChange}
          value={title}
        />
      </div>

      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="number"
          id="difficulty"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
          value={difficulty}
        />
      </div>

      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
