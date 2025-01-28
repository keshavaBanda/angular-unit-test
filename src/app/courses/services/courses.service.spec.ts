import { TestBed } from "@angular/core/testing"
import { CoursesService } from "./courses.service"
import { HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing"
import { COURSES } from "../../../../server/db-data"
import { provideHttpClient } from "@angular/common/http"


describe("CoursesService", () => {
  let courseService: CoursesService
  let httpTestingController: HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CoursesService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    courseService = TestBed.inject(CoursesService)
    httpTestingController = TestBed.inject(HttpTestingController)

  })

  it("should get all courses", () => {
    courseService.findAllCourses().subscribe((data) => {
      expect(data).toBeTruthy();
      expect(data.length).toBe(12);
      const course = data.find(e => e.id == 12)
      expect(course.titles.description).toBe("Angular Testing Course")
    })
    const req = httpTestingController.expectOne('/api/courses');
    expect(req.request.method).toEqual("GET");
    req.flush({ payload: Object.values(COURSES) });
  })



})
