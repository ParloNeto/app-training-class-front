import { TrainingSheet } from 'src/app/models/training_sheet';

import { Component, OnInit } from '@angular/core';
import { TrainingSheetService } from 'src/app/services/training-sheet.service';
import { UserService } from 'src/app/services/user.service';
import { DayOfTraining } from 'src/app/models/day_of_training';
import { Training } from 'src/app/models/training';

@Component({
  selector: 'app-list-training',
  templateUrl: './list-training.component.html',
  styleUrls: ['./list-training.component.scss']
})
export class ListTrainingComponent implements OnInit {


  public titleArray: string[] = [];
  public treinos!: DayOfTraining[]
  public treinoUm!: Training[];
  public treinoDois!: Training[];
  public treinoTres!: Training[];
  public treinoOpcional?: Training[];
  public fichaDeTreino!: TrainingSheet
  constructor(private service: TrainingSheetService, private serviceUser: UserService) {
  // this.service.getTrainingSheet().subscribe({
  //     next: (res) => this.fichaDeTreino = res, 
  //     error: (err) => console.error(err)

  //   });
  }

  ngOnInit(): void {
    this.service.getTrainingSheet().subscribe({
      next: (res) => {
        this.fichaDeTreino = res;
        this.fichaDeTreino.typeOfTraining
        this.treinos = res.trainings;
        console.log(res.trainings);
        this.treinosEmSequencia();
        this.pegaTituloDoTreino();
        console.log(this.titleArray);
      }, 
      error: (err) => console.error(err)
    });
    
  }

  treinosEmSequencia() {
    this.treinos.map((res) => {
    console.log(res.trainingOne);
    this.treinoUm = res.trainingOne.exercises;
    this.treinoDois = res.trainingTwo.exercises;
    this.treinoTres = res.trainingThree.exercises;
    this.treinoOpcional = res.trainingOptional?.exercises;
    })
  }

  pegaTituloDoTreino() {
    this.titleArray = [];
    this.treinos.forEach((res, i) => {
      this.titleArray.push(res.trainingOne.musclesWorked)
      this.titleArray.push(res.trainingTwo.musclesWorked)
      this.titleArray.push(res.trainingThree.musclesWorked)
      this.titleArray.push(res.trainingOptional!.musclesWorked)
    })
  }

}
