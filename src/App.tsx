import { useState } from 'react';
import WorkoutForm from './components/WorkoutForm';
import WorkoutList from './components/WorkoutList';
import { Workout } from './types';
import './App.css';

function App() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  const handleAddWorkout = (workout: Workout) => {
    setWorkouts([...workouts, workout]);
  };

  return (
    <div className="App">
      <h1>Kintore Note</h1>
      <WorkoutForm onAddWorkout={handleAddWorkout} />
      <WorkoutList workouts={workouts} />
    </div>
  );
}

export default App;