import { Component } from '@angular/core';
import { Topics } from '../model/Topics';
import { TopicsService } from '../Service/topics.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../Service/user.service';
import { SnackbarService } from '../snackbar.service';
import { UserOperationsComponent } from '../user-operations/user-operations.component';
import { TopicOperationsComponent } from '../topic-operations/topic-operations.component';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.scss'
})
export class TopicsComponent {


  displayedColumns: string[] = ['topicId', 'topicName', 'action'];
  dataSource!: MatTableDataSource<any>


  constructor(private topic: TopicsService, private _dialog: MatDialog, private _snackbar: SnackbarService) { }


  ngOnInit(): void {
    this.getTopic(); 
  }


  addTopic() {
    const dialogRef = this._dialog.open(TopicOperationsComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getTopic();
        }
      },
      error: console.log
    });
  }


  getTopic() {
    this.topic.getAllTopics().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
      }
    });
  }


  deleteTopic(id: number) {
    this.topic.deleteTopic(id).subscribe({
      next: (res) => {
        this._snackbar.openSnackBar("Record Deleted", "Done"); //Delete Vehicle
        this.getTopic();
      }
    });
  }


  updateTopic(data: any) {
    const dialogRef = this._dialog.open(TopicOperationsComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getTopic();
        }
      },
      error: console.log
    });
  }



}
