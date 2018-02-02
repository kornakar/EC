export class MeetingToHeightValueConverter {
    toView(value: Meeting) {
        var endTime = new Date(value.endTime);
        var startTime = new Date(value.startTime);
        var timeDiff = Math.abs(endTime.getTime() - startTime.getTime());

        // hax --> hours to px
        return (Math.round(timeDiff / 60000) / 60) * 90;
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