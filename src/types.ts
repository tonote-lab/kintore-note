export interface Set {
  reps: number;
  weight: number;
}

export interface Exercise {
  name: string;
  sets: Set[];
}

export interface Workout {
  date: Date;
  exercises: Exercise[];
}
