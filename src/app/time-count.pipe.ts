import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any): any {
    let today:Date = new Date(); //get current date and time
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var dateDifference =Math.abs(value-todayWithNoTime )// returns value in milliseconds
    const secondsInADay= 86400; //60 seconds*60 minutes in an hour *24 hours

    var dateDifferenceSeconds=dateDifference*0.001; //converts to seconds

    var lastPosted = dateDifferenceSeconds/secondsInADay;

    if (lastPosted >= 1){
        return lastPosted + "day(s) ago";
    }else{
        return "today";
    }
  }
}
