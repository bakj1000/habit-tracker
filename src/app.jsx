import './app.css';
import React, { memo, useState } from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';

const App = memo((props) => {
  const [state, setState] = useState({
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  });

  const handleIncrement = (habit) => {
    const habits = state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      } else {
        return item;
      }
    });
    setState({ habits });
  };

  const handleDecrement = (habit) => {
    const habits = state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      } else {
        return item;
      }
    });
    setState({ habits });
  };

  const handleDelete = (habit) => {
    console.log(`handleDelete ${habit.name}`);
    const habits = state.habits.filter((item) => item.id !== habit.id);
    setState({ habits });
  };

  const handleAdd = (name) => {
    const habits = [...state.habits, { id: Date.now(), name, count: 0 }];
    setState({ habits });
  };
  const handleReset = () => {
    const habits = state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    setState({ habits });
  };

  return (
    <>
      <Navbar
        totalCount={state.habits.filter((item) => item.count > 0).length}
      />
      <Habits
        habits={state.habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={handleAdd}
        onReset={handleReset}
      />
    </>
  );
});

export default App;
