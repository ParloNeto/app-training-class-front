import { TypesOfTraining } from '../enums/types_of_training';
import { DayOfTraining } from './day_of_training';
import { User } from './user';

export interface TrainingSheet {
  id: number;
  user: User;
  restTime: number;
  typeOfTraining: TypesOfTraining;
  trainings: DayOfTraining[];
  // fazer tipo boolean e tipo array nos treinos opcionais.
  startDate: Date;
  finalDate: Date;
  observation?: string;
}
