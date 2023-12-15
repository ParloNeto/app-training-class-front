import { Component, OnInit } from '@angular/core';
import { TrainingSheet } from 'src/app/models/training_sheet';
import { TrainingSheetService } from 'src/app/services/training-sheet.service';

@Component({
  selector: 'app-central-training',
  templateUrl: './central-training.component.html',
  styleUrls: ['./central-training.component.scss']
})
export class CentralTrainingComponent implements OnInit{

  public fichaDeTreino!: TrainingSheet;

  constructor(private service: TrainingSheetService) {}
  
  ngOnInit(): void {
    this.getTrainingSheet();
  }

  getTrainingSheet() {
    this.service.getTrainingSheet().subscribe({
      next: (sheet) => { 
        this.fichaDeTreino = sheet;
        this.fichaDeTreino.trainings.map(((training, i) => {
          console.log(training.trainingOne.exercises, i);
        }))
      },
      error: (err) => { console.error(err) }
    })
  }

}
