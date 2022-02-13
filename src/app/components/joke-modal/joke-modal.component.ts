import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Joke } from 'src/app/models/joke.model';

@Component({
  selector: 'app-joke-modal',
  templateUrl: './joke-modal.component.html',
  styleUrls: ['./joke-modal.component.scss']
})
export class JokeModalComponent implements OnInit {
  str: string | undefined;
  constructor(public dialogRef: MatDialogRef<JokeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Joke) { }

  ngOnInit(): void {
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
