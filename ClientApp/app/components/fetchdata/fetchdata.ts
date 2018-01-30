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
}

interface Meeting {
    subject: string;
    organizer: number;
    startTime: number;
    endTime: string;

    participants: Participant[];
}

interface Participant {
    name: string;
    title: string;
}