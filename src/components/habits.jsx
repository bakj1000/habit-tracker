import Habit from './habit';
import HabitAddForm from './habitAddForm';

import React, { memo, useCallback } from 'react';

const Habits = memo((props) => {
  const handleIncrement = useCallback((habit) => {
    props.onIncrement(habit);
  });

  const handleDecrement = useCallback((habit) => {
    props.onDecrement(habit);
  });

  const handleDelete = useCallback((habit) => {
    props.onDelete(habit);
  });

  const handleAdd = useCallback((habit) => {
    props.onAdd(habit);
  });
  return (
    <>
      <HabitAddForm onAdd={handleAdd} />
      <div className="habits">
        <ul>
          {props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              onDelete={handleDelete}
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={props.onReset}>
          Reset All
        </button>
      </div>
    </>
  );
});
export default Habits;
