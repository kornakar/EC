import { HttpClient } from 'aurelia-fetch-client';
import { inject } from 'aurelia-framework';

@inject(HttpClient)
export class Hourview {
    public meetings: Meeting[];

    public calendarTimes: Date[];

    constructor(http: HttpClient) {
        http.fetch('api/MeetingData/Meetings')
            .then(result => result.json() as Promise<Meeting[]>)
            .then(data => {
                this.meetings = data;
            });

        const startHour = 8;
        const endHour = 16;

        this.calendarTimes = new Array<Date>();
        for (let hour = startHour; hour <= endHour; hour += 1) {
            this.calendarTimes.push(new Date(2018, 1, 1, hour, 0, 0));

            if (hour < endHour) {
                this.calendarTimes.push(new Date(2018, 1, 1, hour, 30, 0));
            }
        }
    }

    get currentTime(): Date {
        return new Date(Date.now());
    }
}

interface Meeting {
    subject: string;
    organizer: string;
    startTime: Date;
    endTime: Date;

    participants: Participant[];
}

interface Participant {
    name: string;
    title: string;
}