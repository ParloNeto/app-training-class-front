import { Failure } from "../enums/failure";

export interface Training {
    exercise: string;
    sets: number;
    repetitions: Failure | number;
}