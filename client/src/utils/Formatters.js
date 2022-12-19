import { format } from "date-fns";

export function numFormatter(num) {
    const formatter = Intl.NumberFormat('en', { notation: 'compact' });
    return formatter.format(num)
}

export function dateFormatter(date) {
    let dateParts = []
    let dateObject
    if (date.includes(".")) {
        dateParts = date.split(".");
    } else if (date.includes("-")) {
        dateParts = date.split("-");
    }

    if (dateParts.length === 3) {
        dateObject = format(new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]), "dd MMM");
    } else if (dateParts.length === 2) {
        dateObject = format(new Date(+dateParts[0], dateParts[1] - 1, +'01'), "dd MMM");
    }
    return dateObject
};