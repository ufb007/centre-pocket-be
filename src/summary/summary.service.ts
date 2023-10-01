import { Injectable } from '@nestjs/common';
import { ReportType } from 'src/data';
import { ReportService } from 'src/report/report.service';

@Injectable()
export class SummaryService {
    constructor(private readonly reportService: ReportService) {

    }

    calculateSummary() {
        const totalExpenses = this.reportService.getAllReports(ReportType.EXPENSE).reduce((sum, report) => sum + report.amount, 0);
        const totalIncome = this.reportService.getAllReports(ReportType.INCOME).reduce((sum, report) => sum + report.amount, 0);

        return {
            totalIncome,
            totalExpenses,
            netIncome: totalIncome - totalExpenses
        }
    }
}
