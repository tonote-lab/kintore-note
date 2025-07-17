import React from 'react';
import { Workout } from '../types';

interface Props {
  workouts: Workout[];
}

const WorkoutList: React.FC<Props> = ({ workouts }) => {
  return (
    <div>
      <h2>Workout History</h2>
      {workouts.map((workout, index) => (
        <div key={index}>
          <h3>{workout.date.toLocaleDateString()}</h3>
          <ul>
            {workout.exercises.map((exercise, exerciseIndex) => (
              <li key={exerciseIndex}>
                <strong>{exercise.name}</strong>
                <ul>
                  {exercise.sets.map((set, setIndex) => (
                    <li key={setIndex}>
                      {set.reps} reps @ {set.weight} kg
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkoutList;
