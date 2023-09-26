import { Objectives } from "../enums/lose_weight";

export interface User {
    firstName: string;
    lastName: string;
    age: number;
    goal: Objectives;
    weight: number;
    height: number;
}