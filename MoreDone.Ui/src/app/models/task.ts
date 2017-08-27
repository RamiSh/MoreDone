export class Task {
    constructor(public Title: string, public Category: Category) {
    }
}

export enum Category {
    ImportantUrgent = 1,
    ImportantNonurgent = 2,
    UnimportantUrgent = 3,
    UnimportantNonurgent = 4,
    Unsorted = 5,
    Deleted = 6,
    Completed = 7
}
