export class TimeOnlyValueConverter {
    toView(value: Date) {
        var date = new Date(value);

        var minutes = "";
        if (date.getMinutes() === 0) {
            minutes = "00";
        } else {
            minutes = date.getMinutes().toString();
        }

        return date.getHours() + ":" + minutes;
    }
}