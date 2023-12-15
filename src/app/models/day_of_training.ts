import { Training } from "./training";

export interface DayOfTraining {
    trainingOne: {
        exercises: Training[],
        musclesWorked: string;
    },
    trainingTwo: {
        exercises: Training[],
        musclesWorked: string;
    },
    trainingThree: {
        exercises: Training[],
        musclesWorked: string;
    },
    trainingOptional?: {
        exercises: Training[],
        musclesWorked: string;
    }
}