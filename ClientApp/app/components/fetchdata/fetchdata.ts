import { HttpClient } from 'aurelia-fetch-client';
import { inject } from 'aurelia-framework';

@inject(HttpClient)
export class Fetchdata {
    public meetings: Meeting[];

    constructor(http: HttpClient) {
        http.fetch('api/MeetingData/Meetings')
            .then(result => result.json() as Promise<Meeting[]>)
            .then(data => {
                this.meetings = data;
            });
    }

    get currentMeetingProgress(): number {
        if (this.meetings == null) {
            return 0;
        }

        if (this.meetings.length === 0) {
            return 0;
        }

        var meetingLength = this.meetings[0].endTime.valueOf() - this.meetings[0].startTime.valueOf();
        var meetingElapsed = this.meetings[0].endTime.valueOf() - Date.now().valueOf();

        if (meetingElapsed < 0) {
            meetingElapsed = meetingLength;
        }

        return (meetingLength / meetingElapsed) * 100;
    }

    // TODO: palauta oletus jos ei ole meetingejä?
    // TODO: error: this.meetings is undefined?
    get currentMeeting(): Meeting {
        //if (this.meetings.length > 0) {
            return this.meetings[0];
        //} else {
           // ??
        //}
    }

    // TODO: jos on alle 3 meetings?
    get upcomingMeetings(): Meeting[] {
        return this.meetings.slice(0, 3);
    }
}

interface Meeting {
    subject: string;
    organizer: number;
    startTime: Date;
    endTime: Date;

    participants: Participant[];
}

interface Participant {
    name: string;
    title: string;
}