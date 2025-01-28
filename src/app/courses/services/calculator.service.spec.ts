import { CalculatorService } from "./calculator.service"
import { LoggerService } from "./logger.service"
import { TestBed } from "@angular/core/testing"

describe("CalculatorService", () => {
  let loggerSpy: any, calcService: CalculatorService;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj("LoggerService", ["log"]) // detector
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        { provide: LoggerService, useValue: loggerSpy }
      ]
    })
    calcService = TestBed.inject(CalculatorService);
  })

  it('Add Two number', () => {
    const result = calcService.add(2, 1)
    expect(result).toBe(3, "unexpected addtion")
    expect(loggerSpy.log).toHaveBeenCalledTimes(1)
  })

  it('Subtract Two number', () => {
    const result = calcService.subtract(2, 1)
    expect(result).toBe(1, "unexpected addtion")
    expect(loggerSpy.log).toHaveBeenCalledTimes(1)
  })
})
