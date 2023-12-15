import { Objectives } from "../enums/objectives";

export interface User {
    firstName: string;
    lastName: string;
    age: number;
    goal: Objectives;
    weight: number;
    height: number;
}