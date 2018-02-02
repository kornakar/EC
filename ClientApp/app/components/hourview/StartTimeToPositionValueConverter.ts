export class StartTimeToPositionValueConverter {
    toView(value: Date) {
        var date = new Date(value);
        var hours = date.getHours() - 8;

        // hax
        return 100 + hours * 84 + date.getMinutes();
    }
}