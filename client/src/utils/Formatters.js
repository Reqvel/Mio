import { format } from "date-fns";

export function numFormatter(num) {
    const formatter = Intl.NumberFormat('en', { notation: 'compact' });
    return formatter.format(num)
}

export function dateFormatter(date) {
    const dateParts = date.split(".");
    const dateObject = format(new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]), "dd MMM");
    return dateObject
};