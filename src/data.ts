export enum ReportType {
    INCOME = "income",
    EXPENSE = "expense"
}

export interface Data {
    report: {
        id: string
        source: string
        amount: number
        created_at: Date
        updated_at: Date
        type: "income" | "expense"
    }[]
}

export const data: Data = {
    report: [
        {
            id: "uuid1",
            source: "Salary",
            amount: 7500,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id: "uuid2",
            source: "Food",
            amount: 2200,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
        },
        {
            id: "uuid",
            source: "Computers",
            amount: 2200,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
        }
    ]
}