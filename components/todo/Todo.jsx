import { Button, CloseButton, ListGroup, Form } from 'react-bootstrap';
import { useState } from 'react';
import styles from './Todo.module.scss';

const Todo = ({ id, value, list, setList, toasts }) => {
  const [done, setDone] = useState(false);

  const handleClick = () => {
    setDone(!done);
  }

  const handleEdit = (event) => {
    event.stopPropagation();

    const newValue = prompt('Введите новое название заметки') || value;
    const newList = list
      .map(el => {
        if (el.id === id) {
          return { ...el, value: newValue };
        }
        return el;
      });
    localStorage.setItem('todosList', JSON.stringify(newList));
    setList(newList);
    toasts.edit();
  }

  const handleDelete = (event) => {
    event.stopPropagation();
    const newList = list
      .filter(el => el.id !== id);
    localStorage.setItem('todosList', JSON.stringify(newList));
    setList(newList);
    toasts.delete();
  }

  return (
    <>
      <ListGroup.Item
          as="li"
          className={styles.todoItem}
          onClick={handleClick}
      >
        <Form><Form.Check type="checkbox" className={styles.header} label={value}></Form.Check></Form>
        <div className={styles.buttons}>
            <Button onClick={handleEdit}>Редактировать</Button>
            <CloseButton onClick={handleDelete}/>
        </div>
      </ListGroup.Item>
    </>
  )
};

export default Todo;
