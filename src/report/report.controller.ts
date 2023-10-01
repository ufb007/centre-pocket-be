import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, ParseUUIDPipe, ParseEnumPipe } from "@nestjs/common";
import { ReportType } from "src/data"; 
import { ReportService } from "./report.service"; 
import { CreateReportDto, UpdateReportDto, ReportResponseDto } from "src/dtos/report.dto"; 

@Controller('report/:type')
export class ReportController {
  constructor(
    private readonly reportService: ReportService
  ){}

  @Get()
  getAllReports(@Param('type', new ParseEnumPipe(ReportType)) type: ReportType): ReportResponseDto[] {
    return this.reportService.getAllReports(type);
  }

  @Get(':id')
  getReportById(
    @Param('type', new ParseEnumPipe(ReportType)) type: ReportType,
    @Param('id', ParseUUIDPipe) id: string
  ): ReportResponseDto {
    return this.reportService.getReportById(type, id);
  }

  @Post()
  createReport(
    @Body() { amount, source }: CreateReportDto,
    @Param('type') type: ReportType
  ): ReportResponseDto {
    return this.reportService.createReport(type, { amount, source });
  }

  @Put(':id')
  updateReport(
    @Body() body: UpdateReportDto,
    @Param('type') type: ReportType,
    @Param('id', ParseUUIDPipe) id: string
  ): ReportResponseDto {
    return this.reportService.updateReport(type, body, id);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteReport(
    @Param('id', ParseUUIDPipe) id: string
  ): string {
    return this.reportService.deleteReport(id);
  }
}