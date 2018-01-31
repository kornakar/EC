export class TimeOnlyValueConverter {
    toView(value: Date) {
        var date = new Date(value);
        return date.getHours() + ':' + date.getMinutes();
    }
}