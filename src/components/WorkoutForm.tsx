import React, { useState } from 'react';
import { Workout, Exercise, Set } from '../types';

interface Props {
  onAddWorkout: (workout: Workout) => void;
}

const WorkoutForm: React.FC<Props> = ({ onAddWorkout }) => {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  const handleAddExercise = () => {
    setExercises([...exercises, { name: '', sets: [] }]);
  };

  const handleAddSet = (exerciseIndex: number) => {
    const newExercises = [...exercises];
    newExercises[exerciseIndex].sets.push({ reps: 0, weight: 0 });
    setExercises(newExercises);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddWorkout({ date: new Date(), exercises });
    setExercises([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="button" onClick={handleAddExercise}>
        Add Exercise
      </button>
      {exercises.map((exercise, exerciseIndex) => (
        <div key={exerciseIndex}>
          <input
            type="text"
            placeholder="Exercise Name"
            value={exercise.name}
            onChange={(e) => {
              const newExercises = [...exercises];
              newExercises[exerciseIndex].name = e.target.value;
              setExercises(newExercises);
            }}
          />
          <button type="button" onClick={() => handleAddSet(exerciseIndex)}>
            Add Set
          </button>
          {exercise.sets.map((set, setIndex) => (
            <div key={setIndex}>
              <input
                type="number"
                placeholder="Reps"
                value={set.reps}
                onChange={(e) => {
                  const newExercises = [...exercises];
                  newExercises[exerciseIndex].sets[setIndex].reps = parseInt(e.target.value, 10);
                  setExercises(newExercises);
                }}
              />
              <input
                type="number"
                placeholder="Weight"
                value={set.weight}
                onChange={(e) => {
                  const newExercises = [...exercises];
                  newExercises[exerciseIndex].sets[setIndex].weight = parseInt(e.target.value, 10);
                  setExercises(newExercises);
                }}
              />
            </div>
          ))}
        </div>
      ))}
      <button type="submit">Save Workout</button>
    </form>
  );
};

export default WorkoutForm;
