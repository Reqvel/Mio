import { format } from "date-fns";

export function numFormatter(num) {
    const formatter = Intl.NumberFormat('en', { notation: 'compact' });
    return formatter.format(num)
}

export function dateFormatter(date) {
    return format(new Date(date), "dd MMM");
};