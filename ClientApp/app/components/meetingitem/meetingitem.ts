import { HttpClient } from 'aurelia-fetch-client';
import { inject } from 'aurelia-framework';

@inject(HttpClient)
export class MeetingItem {
    public meeting: Meeting;

    constructor(http: HttpClient) {
        http.fetch('api/MeetingData/Meeting')
            .then(result => result.json() as Promise<Meeting>)
            .then(data => {
                this.meeting = data;
            });
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