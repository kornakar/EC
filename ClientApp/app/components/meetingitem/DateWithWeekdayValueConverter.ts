export class DateWithWeekdayValueConverter {
    toView(value: Date) {
        var date = new Date(value);
        return date.toLocaleDateString("en-US", { weekday: 'long' }) + ", " +
            date.getDay() +
            "." +
            date.getMonth() +
            "." +
            date.getFullYear();
    }
}