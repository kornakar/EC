import { HttpClient } from 'aurelia-fetch-client';
import { inject } from 'aurelia-framework';

@inject(HttpClient)
export class Fetchdata {
    public meetings: Meeting[];
    private maxMeetings: number = 3;

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

        // NOTE: testiksi
        var dateNow = new Date(2018, 3, 3, 8, 0, 0);

        if (this.meetings[0].startTime < dateNow || this.meetings[0].endTime > dateNow) {
            return 0;
        }

        // startTime.getTime() is not a function??
        //return Math.round(dateNow.getTime() - this.meetings[0].startTime.getTime()) /
        //    Math.round((this.meetings[0].endTime.getTime() - this.meetings[0].startTime.getTime()));

        return 30;
    }

    get currentMeeting(): Meeting {
        if (this.meetings == null) {
            return new Meeting();
        }

        if (this.meetings.length > 0) {
            return this.meetings[0];
        } else {
            return new Meeting();
        }
    }

    get upcomingMeetings(): Meeting[] {
        if (this.meetings == null) {
            return new Array<Meeting>(0);
        }

        var returnedMeetings = this.meetings.length - 1 > this.maxMeetings ? this.maxMeetings : this.meetings.length;

        return this.meetings.slice(1, returnedMeetings);
    }
}

class Meeting {
    subject: string;
    organizer: string;
    startTime: Date;
    endTime: Date;

    participants: Participant[];
}

class Participant {
    name: string;
    title: string;
}