export class Task {
    constructor(public Title: string, public Category: Category) {
    }
}

export enum Category {
    ImportantUrgent = 0,
    ImportantNonurgent = 1,
    UnimportantUrgent = 2,
    UnimportantNonurgent = 3,
    Unsorted = 4
}
