export function prepareToSendCalendarEvents(events) {
    let formattedEvents = []
    events.forEach(event => {
        let formattedEvent = {
            description: event.Desription,
            end_time: event.EndTime,
            end_timezone: event.EndTimezone,
            following_id: event.FollowingId,
            guid: event.Guid,
            id: event.Id,
            is_all_day: event.IsAllDay,
            location: event.Location,
            recurrence_exception: event.RecurrenceException,
            recurrence_id: event.RecurrenceId,
            recurrence_rule: event.RecurrenceRule,
            start_time: event.StartTime,
            start_timezone: event.StartTimezone,
            subject: event.Subject,
        }

        formattedEvents.push(formattedEvent)
    });

    return formattedEvents
}

export function prepareToShowCalendarEvents(events) {
    let formattedEvents = []
    events.forEach(event => {
        let formattedEvent = {
            Desription: event.description,
            EndTime: event.end_time,
            EndTimezone: event.end_timezone,
            FollowingId: event.following_id,
            Guid: event.guid,
            Id: event.id,
            IsAllDay: event.is_all_day,
            Location: event.location,
            RecurrenceException: event.recurrence_exception,
            RecurrenceId: event.recurrence_id,
            RecurrenceRule: event.recurrence_rule,
            StartTime: event.start_time,
            StartTimezone: event.start_timezone,
            Subject: event.subject,
        }

        formattedEvents.push(formattedEvent)
    });

    return formattedEvents
}
