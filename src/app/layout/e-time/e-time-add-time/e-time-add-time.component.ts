import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../../../shared/services/http-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-e-time-add-time',
  templateUrl: './e-time-add-time.component.html',
  styleUrls: ['./e-time-add-time.component.css']
})
export class ETimeAddTimeComponent implements OnInit {

  constructor(private _httpService: HttpApiService, private router: Router) {
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
  selectProject: ProjectModel[] = []
  activityId: string = "";
  startDate: any = {
    day : new Date().getDate(),
    month : new Date().getMonth() + 1,
    year : new Date().getFullYear()
  };
  endDate: any = {
    day : new Date().getDate(),
    month : new Date().getMonth() + 1,
    year : new Date().getFullYear()
  };


  datesArray: DateArrayModel [] = [];
  

  ngOnInit() {
  }  

  DeleteDateRow(index){
    debugger;
    this.datesArray.splice(index, 1);
  }

  generateDates(){
    debugger;
    this.datesArray = [];
    let sDate = new Date(this.startDate.year, this.startDate.month - 1, this.startDate.day);
    let eDate = new Date(this.endDate.year, this.endDate.month - 1, this.endDate.day);

    for(let i = sDate; i <= eDate; i.setDate(i.getDate() + 1))
    {
      console.log(i);
      var dayName = i.toString().split(' ')[0];
      if(dayName != "Sat" && dayName != "Sun")
      {
        this.datesArray.push({
          date: {
            day : i.getDate(),
            month : i.getMonth() + 1,
            year : i.getFullYear()
          },
          startTime: {hour: 9, minute: 0},
          endTime: {hour: 18, minute: 0},
          activityId: this.activityId,
          userId : localStorage.getItem('loggedInUserId')
        });
      }      
    }     
    
  }

  saveSessions(){
    var model = [];
    for(var item of this.datesArray)
    {
      if(item.date){
        model.push({
          UserId : localStorage.getItem('loggedInUserId'),
          ActivityId : item.activityId,
          SessionDate :  item.date.month + "/" + item.date.day + "/" + item.date.year,
          SessionStart : (item.startTime.hour * 60) + item.startTime.minute,
          SessionEnd : (item.endTime.hour * 60) + item.endTime.minute
        });
      }      
    }
    if(model.length > 0)
    {
      this._httpService.masterPost("api/ETime/AddSessions", model).subscribe(result => {
        debugger;    
        this.router.navigate(['/e-time/time']);
      }, error => {
          debugger;            
        }); 
      }
    }
  }


interface DateArrayModel{
  date: any;
  startTime: any;
  endTime: any,
  activityId: any,
  userId: any
}

interface ProjectModel{
  id: number,
  name: string
}