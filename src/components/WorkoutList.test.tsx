import { render, screen } from '@testing-library/react';
import WorkoutList from './WorkoutList';
import { Workout } from '../types';

describe('WorkoutList', () => {
  it('renders a list of workouts', () => {
    const workouts: Workout[] = [
      {
        date: new Date(),
        exercises: [
          {
            name: 'Bench Press',
            sets: [{ reps: 10, weight: 100 }],
          },
        ],
      },
    ];

    render(<WorkoutList workouts={workouts} />);

    expect(screen.getByText('Bench Press')).toBeInTheDocument();
    expect(screen.getByText('10 reps @ 100 kg')).toBeInTheDocument();
  });
});
