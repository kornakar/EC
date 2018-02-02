export class StartTimeToPositionValueConverter {
    toView(value: Date) {
        var date = new Date(value);
        var hours = date.getHours() - 8;

        // hax
        return 90 + hours * 84 + (date.getMinutes() / 60) * 84;;
    }
}