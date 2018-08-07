import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../../../shared/services/http-api.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-e-time-entries',
  templateUrl: './e-time-entries.component.html',
  styleUrls: ['./e-time-entries.component.css']
})
export class ETimeEntriesComponent implements OnInit {

  selectProject: ProjectModel[] = []
  sessions: SessionModel[] = []

  startDate: any = "";
  endDate: any = "";
  activityId: string = "";


  selectedId: number = 0;
  selectedDate: any = "";
  selectedActivityId: string = "";
  startTime = {hour: 0, minute: 0};
  endTime = {hour: 0, minute: 0};

  constructor(private _httpService: HttpApiService, private modalService: NgbModal) { 
        this._httpService.masterGet("api/ETime/GetActivities").subscribe(result => {
            for (var i = 0; i < result.length; i++) {
              this.selectProject.push({
                id : result[i].Id,
                name : result[i].Name
              });
            }
            //this.SearchSession();
        }, error => {
            debugger;            
        });    
  }

  ngOnInit() {
  }
  
  deleteSession(sessionId, content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      debugger;
      this.selectedId = sessionId;
      if(result == "SaveClick")
      {
        debugger;
        
        this._httpService.masterPost("api/ETime/DeleteSessions", {
          SessionId : this.selectedId
        }).subscribe(result => {
          debugger;
          this.SearchSession();
      }, error => {
          debugger;            
      }); 
      }
    }, (reason) => {
      debugger;
      this.selectedId = 0;
    });
  }


  editSession(session, content){
    debugger;
    this.selectedId = session.sessionId;
    this.selectedDate = {
      day : session.sessionDate.getDate(),
      month : session.sessionDate.getMonth() + 1,
      year : session.sessionDate.getFullYear()
    };

    this.selectedActivityId = session.activityId;

    var sTime = session.sessionStart.split(" : ");
    var eTime = session.sessionEnd.split(" : ");

    this.startTime = {hour: parseInt(sTime[0]), minute: parseInt(sTime[1])};
    this.endTime = {hour: parseInt(eTime[0]), minute: parseInt(eTime[1])};

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      debugger;
      if(result == "SaveClick" && this.selectedDate && this.startTime && this.endTime)
      {
        this._httpService.masterPost("api/ETime/SaveSession", {
            SessionId : this.selectedId,
            UserId : localStorage.getItem('loggedInUserId'),
            ActivityId : this.selectedActivityId,
            SessionDate :  this.selectedDate.month + "/" + this.selectedDate.day + "/" + this.selectedDate.year,
            SessionStart : (this.startTime.hour * 60) + this.startTime.minute,
            SessionEnd : (this.endTime.hour * 60) + this.endTime.minute
        }).subscribe(result => {
          debugger;
          this.SearchSession();
      }, error => {
          debugger;            
      }); 
      }
    }, (reason) => {
      debugger;
      this.selectedId = 0;
      this.selectedDate = "";
      this.selectedActivityId = "";
      this.startTime = {hour: 0, minute: 0};
      this.endTime = {hour: 0, minute: 0};
    });
  }
  SearchSession() {
    debugger;
    // this.startDate = {
    //   day : 1,
    //   month : 3,
    //   year : 2018
    // };
    // this.endDate = {
    //   day : 19,
    //   month : 7,
    //   year : 2018
    // }
    // this.activityId = '125';
    if(this.startDate && this.endDate && this.activityId)
    {
    this._httpService.masterPost("api/ETime/GetSessions", 
         { 
           StartDate: this.startDate.year + "/" + this.startDate.month + "/" + this.startDate.day,
           EndDate: this.endDate.year + "/" + this.endDate.month + "/" + this.endDate.day,
           ActivityId: this.activityId,
           UserId: localStorage.getItem('loggedInUserId') }
          ).subscribe(result => {
            this.sessions = [];         
      for (var i = 0; i < result.length; i++) {
        debugger;        
        this.sessions.push({
          sessionId: result[i].SessionId,
          sessionDate : new Date(result[i].SessionDate),
          project: this.selectProject.filter(x => x.id == result[i].ActivityId)[0].name,
          activityId : result[i].ActivityId,
          sessionStart : Math.floor(parseFloat(result[i].SessionStart) / 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + " : " + (parseFloat(result[i].SessionStart) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}),
          sessionEnd : Math.floor(parseFloat(result[i].SessionEnd) / 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})  + " : " + (parseFloat(result[i].SessionEnd) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}),
          SessionDuration:  parseFloat(result[i].SessionEnd) - parseFloat(result[i].SessionStart)
        });
      }
     }, error => {
        debugger;            
     });    
  }
}

}

interface ProjectModel{
  id: number,
  name: string
}

interface SessionModel{
  sessionId : number,
  sessionDate : Date,
  project: any,
  activityId: number
  sessionStart : any,
  sessionEnd : any,
  SessionDuration : number
}
