import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { ViewContainerRef } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { TrainingsService } from 'src/app/services/trainings.service';
import { NewsService } from 'src/app/services/news.service';
import { MagazineService } from 'src/app/services/magazine.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { JobsService } from 'src/app/services/jobs.service';
import { ContactService } from 'src/app/services/contact.service';
import { CourseProblemsService } from 'src/app/services/course-problems.service';
import { InternProblemsService } from 'src/app/services/intern-problems.service';
import { JobApplicantService } from 'src/app/services/job-applicant.service';
import { CourseApplicantService } from 'src/app/services/course-applicant.service';
import { TrainingApplicantService } from 'src/app/services/training-applicant.service';
import { EnquiryCourseService } from 'src/app/services/enquiry-course.service';
import { EnrollAlbnaaService } from 'src/app/services/enroll-albnaa.service';
import { MembershipService } from 'src/app/services/membership.service';
import { ResultService } from 'src/app/services/result.service';
import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-control-pannel',
  templateUrl: './control-pannel.component.html',
  styleUrls: ['./control-pannel.component.css'],
})
export class ControlPannelComponent implements OnInit {
  private apiUrl:string = environment.apiUrl;

  courses: any[] = [];
  trainings: any[] = [];
  news: any[] = [];
  magazines: any[] = [];
  jobs :any[] = [];
  contacts :any[] =[];
  coursesProblems :any[] = [];
  internProblems :any[] = [];
  jobApplicant:any[] = [];
  courseApplicant:any[] = [];
  trainingApplicant:any[] =[];
  courseAskInfo:any[] = [];
  applyAlbnaa:any[] = [];
  myForm!: FormGroup ;
  fileToUpload!: File | null;
  myMagazineForm:FormGroup;
  data: any[] = [];
  selectedId: number | null = null;
  currentNewsId: number = 0;
  isEditing = false;
  myCoursesForm:FormGroup;
  myJobForm:FormGroup;
  membershipApplicant:any[] =[];
  myResultForm:FormGroup;


  constructor(
    private http:HttpClient,
    private courseService: CoursesService,
    private trainingsService: TrainingsService,
    private newsService: NewsService,
    private magazinesService: MagazineService,
    private fb: FormBuilder,
    private jobService:JobsService,
    private contactService:ContactService,
    private courseProblemsService :CourseProblemsService,
    private internProblemService :InternProblemsService,
    private jobApplicantService :JobApplicantService,
    private courseApplicantService : CourseApplicantService,
    private trainingApplicantService :TrainingApplicantService,
    private enquiryCourseService :EnquiryCourseService,
    private enrollAlbnaaService :EnrollAlbnaaService,
    private membershipService :MembershipService,
    private resultService:ResultService
    

  ) {

    this.myForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl:['',Validators.required]
  });

  this.myMagazineForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    imageUrl:['',Validators.required]
});

this.myCoursesForm = this.fb.group({
  title:['', Validators.required],
  description: ['', Validators.required],
  price:['', Validators.required],
  duration:['', Validators.required],
  trainerName:['', Validators.required]

});

this.myJobForm = this.fb.group({
  name:['', Validators.required],
  salary: ['', Validators.required],
  description:['', Validators.required],
  status:true,
  experienceYears:['', Validators.required],
  graduationQualifacation:['', Validators.required],
  location:['', Validators.required]
});

this.myResultForm = this.fb.group({
  name:['', Validators.required],
  nationalNumber: ['', Validators.required],
  trainingName:['', Validators.required],
  degree:['', Validators.required],
  estimation:['', Validators.required]

});



 }

  ngOnInit(): void {
    this.getCourses();
    this.getTrainings();
    this.getAllMagazines();
    this.getAllnews();
    this.getAllJobs();
    this.getAllContact();
    this.getAllCourseProblems();
    this.getAllInternProblems();
    this.getAllJobApplicant();
    this.getAllCourseApplicant();
    this.getAllTrainingApplicant();
    this.getAllEnguiryCourse();
    this.getAllEnrollmentAlbnaa();
    this.getAllMembershipApplicant();
    this. getAllProblems();
  }

 

  onSubmitResult() {
    if (this.myResultForm.valid) {
      const newResultItem = this.myResultForm.value;
      this.resultService.postResult(newResultItem).subscribe(
          () => {
            alert('تم الاضافه')
              console.log('result item added successfully');
              console.log('Form data:', this.myResultForm);
              this.myResultForm.reset();
              // Optionally, refresh the news list or navigate back to the list
              
               // Function to refresh the news list
          },
          error => {
              console.error('Error adding result item:', error);
              console.log('Form data:', this.myResultForm);
  
          }
      );
  } else {
      console.error('Form is invalid');
  }
  }
  


  getAllMembershipApplicant(){
    this.membershipService.getMembershipApplicant().subscribe((res:any)=>{
      this.membershipApplicant = res
    })
  }

  //tech support
  getAllProblems(): void{
    this.http.get<any>(this.apiUrl + 'TechSupport/getAllTechSupports')
    .subscribe((response) => {
      this.data = response;
      console.log(this.data);
    });
  }
  getAllEnrollmentAlbnaa(){
    this.enrollAlbnaaService.getAllEnrollElbnaa().subscribe((res:any)=>{
      this.applyAlbnaa = res
    })
  }
  getAllEnguiryCourse(){
    this.enquiryCourseService.getAllCourseAskInfo().subscribe((res:any)=>{
      this.courseAskInfo = res
    })
  }

  getAllTrainingApplicant(){
    this.trainingApplicantService.getAllTrainingApplicant().subscribe((res:any)=>{
      this.trainingApplicant = res
    })
  }

  getAllCourseApplicant(){
    this.courseApplicantService.getAllCoursepplicant().subscribe((res:any)=>{
      this.courseApplicant = res
    })
  }

  getAllCourseProblems(){
    this.courseProblemsService.getAllCourseProblems().subscribe((res:any)=>{
      this.coursesProblems = res
    })
  }

  getAllInternProblems(){
    this.internProblemService.getAllInternProblems().subscribe((res:any)=>{
      this.internProblems = res
    })
  }

  getAllJobApplicant(){
    this.jobApplicantService.getAllJobApplicant().subscribe((res:any)=>{
      this.jobApplicant = res;
    })
  }



  // News CRUD

  getAllnews(){
    this.newsService.getAllNews().subscribe((res:any)=>{
      this.news = res
    })
  }


  handleFileInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const files: FileList | null = inputElement.files;
    if (files && files.length > 0) {
      this.fileToUpload = files[0];
      console.log(this.fileToUpload); // Log the selected file to verify
      
    } 
    else {
      console.error('No file selected');
    }
  }
 
  
  // onSubmit(form: any): void {
  //   const formData: FormData = new FormData();
  //   formData.append('Title', form.title);
  //   formData.append('Description', form.description);
  //   formData.append('Image', form.imageUrl);

  //   this.http.post<any>(this.apiUrl + 'News/addNews', formData)
  //     .subscribe((response) => {
  //       console.log(response);
  //       // Handle response as needed
  //     });
  // }


  onSubmitNews() {

    if (!this.fileToUpload) {
      console.error('No file selected');
      return;
    }
    const formData = new FormData();
    const title = this.myForm.get('title')!.value;
    const description = this.myForm.get('description')!.value;
    const imageUrl = this.myForm.get('imageUrl')!.value;
    if (title && description) {
      formData.append('title', title);
      formData.append('description', description);
      formData.append('imageUrl', imageUrl)
    } else {
      console.error('One or more form fields are null');
      return;
    }
  
    formData.append('imageUrl', this.fileToUpload!); // Assert non-null with !
    this.http.post<any>( this.apiUrl + 'News/addNews', formData)
      .subscribe(
        (response) => {
          console.log(response)
          console.log('News created successfully:', response);
          // Reset form after successful submission
          this.myForm.reset();
        },
        (error: HttpErrorResponse) => {
          console.error('Error creating News:', error.error);
          // Handle error
        }
      );
    }








deletenewsById(id: number) {
  const confirmed = window.confirm('Are you sure you want to delete this record?');
    
  // If the user confirmed the deletion
  if (confirmed) {
      // Proceed with deletion
      this.newsService.deleteNewsById(id).subscribe(
          () => {
              console.log('Record deleted successfully');
              // Refresh data after successful deletion
              this.getAllnews();
          },
          error => {
              console.error('Error deleting record:', error);
          }
      );
  } else {
      // User canceled the deletion
      console.log('Deletion canceled');
  }
}




onSubmitNewsUpdate() {
  if (this.myForm.valid) {
      const updatedNewsItem = this.myForm.value;
      // Assuming you have the current news item's ID stored somewhere (e.g., `currentNewsId`):
      this.newsService.updateNewsById(this.currentNewsId, updatedNewsItem).subscribe(
          () => {
              console.log('News item updated successfully');
              // Optionally, refresh the news list or navigate back to the list
              this.getAllnews(); // Function to refresh the news list
          },
          error => {
              console.error('Error updating news item:', error);
          }
      );
  } else {
      console.error('Form is invalid');
  }
}


resetFormAndState() {
  this.myForm.reset();
  this.currentNewsId = 0;
  this.isEditing = false;
  this.showAddNews = false; // Hide the form
}

startUpdateNewsById(id: number) {
  const newsItem = this.news.find(item => item.id === id);
  if (newsItem) {
      // Prefill the form with the news item data
      this.myForm.patchValue(newsItem);
      // Set the current news ID to the ID of the news item being edited
      this.currentNewsId = id;
      // Optionally, set a flag to indicate editing mode
      this.isEditing = true;
      // Display the form for editing (if necessary)
      this.showAddNews = true; // Assuming this variable controls the form visibility
  }
}


// End Crud News




// Magazine CRUD

getAllMagazines(){
  this.magazinesService.getAllMagazines().subscribe((res:any)=>{
    this.magazines = res
  })
}


onSubmitMagazine() {

  if (!this.fileToUpload) {
    console.error('No file selected');
    return;
  }
  const formData = new FormData();
  const title = this.myMagazineForm.get('title')!.value;
  const description = this.myMagazineForm.get('description')!.value;
  const imageUrl = this.myMagazineForm.get('imageUrl')!.value;
  if (title && description) {
    formData.append('title', title);
    formData.append('description', description);
    formData.append('imageUrl', imageUrl)
  } else {
    console.error('One or more form fields are null');
    return;
  }

  formData.append('imageUrl', this.fileToUpload!); // Assert non-null with !
  this.http.post<any>( this.apiUrl + 'Magazine/addMagazine', formData)
    .subscribe(
      (response) => {
        console.log(response)
        console.log('Magazines created successfully:', response);
        // Reset form after successful submission
        this.myMagazineForm.reset();
      },
      (error: HttpErrorResponse) => {
        console.error('Error creating Magazine:', error.error);
        // Handle error
      }
    );

//   if (this.myMagazineForm.valid) {
//     const newMAgazineItem = this.myMagazineForm.value;
//     this.magazinesService.postMagazine(newMAgazineItem).subscribe(
//         () => {
//           alert('Magazine item added successfully')
//             console.log('Magazine item added successfully');
//             this.myMagazineForm.reset();
//             // Optionally, refresh the news list or navigate back to the list
//             this.getAllMagazines();
//              // Function to refresh the news list
//         },
//         error => {
//             console.error('Error adding MAgazine item:', error);
//         }
//     );
// } else {
//     console.error('Form is invalid');
// }
}


deleteMagazineById(id: number) {
  const confirmed = window.confirm('Are you sure you want to delete this record?');
    
  // If the user confirmed the deletion
  if (confirmed) {
      // Proceed with deletion
      this.magazinesService.deleteMagazineById(id).subscribe(
          () => {
              console.log('Record deleted successfully');
              // Refresh data after successful deletion
              this.getAllMagazines();
          },
          error => {
              console.error('Error deleting record:', error);
          }
      );
  } else {
      // User canceled the deletion
      console.log('Deletion canceled');
  }
}


// End MAgazine CRUD



// courses CRUD

  getCourses() {
    this.courseService.getAllCourses().subscribe((res: any) => {
      this.courses = res;
    });
  }


  onSubmitCourse() {
    if (this.myCoursesForm.valid) {
      const newCourseItem = this.myCoursesForm.value;
      this.courseService.postCourse(newCourseItem).subscribe(
          () => {
            alert('Course item added successfully')
              console.log('Course item added successfully');
              this.myCoursesForm.reset();
              // Optionally, refresh the news list or navigate back to the list
              this.getCourses();
               // Function to refresh the news list
          },
          error => {
              console.error('Error adding Course item:', error);
          }
      );
  } else {
      console.error('Form is invalid');
  }
  }

  
  deleteCourseById(id: number) {
    const confirmed = window.confirm('Are you sure you want to delete this record?');
      
    // If the user confirmed the deletion
    if (confirmed) {
        // Proceed with deletion
        this.courseService.deleteCourseById(id).subscribe(
            () => {
                console.log('Record deleted successfully');
                // Refresh data after successful deletion
                this.getCourses();
            },
            error => {
                console.error('Error deleting record:', error);
            }
        );
    } else {
        // User canceled the deletion
        console.log('Deletion canceled');
    }
  }
  




  // End Courses CRUD


//JOBs CRUD 
getAllJobs(){
  this.jobService.getAllJobs().subscribe((res:any)=>{
    this.jobs = res
  })
}


deleteJobById(id: number) {
  const confirmed = window.confirm('Are you sure you want to delete this record?');
    
  // If the user confirmed the deletion
  if (confirmed) {
      // Proceed with deletion
      this.jobService.deleteJobById(id).subscribe(
          () => {
              console.log('Record deleted successfully');
              // Refresh data after successful deletion
              this.getAllJobs();
          },
          error => {
              console.error('Error deleting record:', error);
          }
      );
  } else {
      // User canceled the deletion
      console.log('Deletion canceled');
  }
}


onSubmitJob() {
  if (this.myJobForm.valid) {
    const newJobItem = this.myJobForm.value;
    this.jobService.postJob(newJobItem).subscribe(
        () => {
          alert('Job item added successfully')
            console.log('Job item added successfully');
            console.log('Form data:', this.myJobForm);
            this.myJobForm.reset();
            // Optionally, refresh the news list or navigate back to the list
            this.getAllJobs();
             // Function to refresh the news list
        },
        error => {
            console.error('Error adding job item:', error);
            console.log('Form data:', this.myJobForm);

        }
    );
} else {
    console.error('Form is invalid');
}
}






// End CTRUD




  getTrainings() {
    this.trainingsService.getAllTrainings().subscribe((res: any) => {
      this.trainings = res;
    });
  }


//Contact Us

getAllContact(){
  this.contactService.getAllJobs().subscribe((res:any)=>{
    this.contacts = res
  })
}



  showNewsList = false;
  showAddNews = false;
  showEditNews = false;
  showDeleteNews = false;

  showMagazineList = false;
  showAddMagazine = false;
  showEditMagazine = false;
  showDeleteMagazine = false;

  showMembershipList = false;

  showJobsList = false;
  showAddJobsList = false;
  showEditJobsList = false;
  showDeleteJobsList = false;

  showAllProblemsList = false;

  showCoursesProblems = false;
  showInternProblems = false;

  showCoursesList = false;
  showEditCourses = false;
  showAddCourses = false;
  showDeleteCourses = false;

  showInternList = false;
  showEditIntern = false;
  showAddIntern = false;
  showDeleteIntern = false;

  showEnrollAlbnaa = false;
  showJobApplicant = false;
  showCourseApplicant = false;
  showTrainingApplicant = false;
  showCourseAskInfo = false;
  showAddingResult = false;

  showNewsListHandler(): void {
    this.showNewsList = true;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList = false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine = false;
    this.showMembershipList = false;
    this.showJobsList = false;
    this.showAddJobsList = false;
    this.showEditJobsList = false;
    this.showDeleteJobsList = false;
    this.showAllProblemsList = false;
    this.showCoursesProblems = false;
    this.showInternProblems = false;
    this.showCoursesList = false;
    this.showEditCourses = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern = false;
    this.showDeleteIntern = false;
    this.showEnrollAlbnaa = false;
    this.showJobApplicant = false;
    this.showCourseApplicant = false;
    this.showTrainingApplicant = false;
    this.showCourseAskInfo = false;
    this.showAddingResult = false;

  }

  showAddNewsHandler(): void {
    this.showNewsList = false;
    this.showAddNews = true;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList = false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine = false;
    this.showMembershipList = false;
    this.showJobsList = false;
    this.showAddJobsList = false;
    this.showEditJobsList = false;
    this.showDeleteJobsList = false;
    this.showAllProblemsList = false;
    this.showCoursesProblems = false;
    this.showInternProblems = false;
    this.showCoursesList = false;
    this.showEditCourses = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern = false;
    this.showDeleteIntern = false;
    this.showEnrollAlbnaa = false;
    this.showJobApplicant = false;
    this.showCourseApplicant = false;
    this.showTrainingApplicant = false;
    this.showCourseAskInfo = false;
    this.showAddingResult = false;



  }

  showEditNewsHandler(): void {
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = true;
    this.showDeleteNews = false;
    this.showMagazineList = false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine = false;
    this.showMembershipList = false;
    this.showJobsList = false;
    this.showAddJobsList = false;
    this.showEditJobsList = false;
    this.showDeleteJobsList = false;
    this.showAllProblemsList = false;
    this.showCoursesProblems = false;
    this.showInternProblems = false;
    this.showCoursesList = false;
    this.showEditCourses = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern = false;
    this.showDeleteIntern = false;
    this.showEnrollAlbnaa = false;
    this.showJobApplicant = false;
    this.showCourseApplicant = false;
    this.showTrainingApplicant = false;
    this.showCourseAskInfo = false;
    this.showAddingResult = false;






  }

  showDeleteNewsHandler(): void {
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = true;
    this.showMagazineList = false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine = false;
    this.showMembershipList = false;
    this.showJobsList = false;
    this.showAddJobsList = false;
    this.showEditJobsList = false;
    this.showDeleteJobsList = false;
    this.showAllProblemsList = false;
    this.showCoursesProblems = false;
    this.showInternProblems = false;
    this.showCoursesList = false;
    this.showEditCourses = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern = false;
    this.showDeleteIntern = false;
    this.showEnrollAlbnaa = false;
    this.showJobApplicant = false;
    this.showCourseApplicant = false;
    this.showTrainingApplicant = false;
    this.showCourseAskInfo = false;
    this.showAddingResult = false;






  }

  showMagazineListHandler(): void {
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList = true;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine = false;
    this.showMembershipList = false;
    this.showJobsList = false;
    this.showAddJobsList = false;
    this.showEditJobsList = false;
    this.showDeleteJobsList = false;
    this.showAllProblemsList = false;
    this.showCoursesProblems = false;
    this.showInternProblems = false;
    this.showCoursesList = false;
    this.showEditCourses = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern = false;
    this.showDeleteIntern = false;
    this.showEnrollAlbnaa = false;
    this.showJobApplicant = false;
    this.showCourseApplicant = false;
    this.showTrainingApplicant = false;
    this.showCourseAskInfo = false;
    this.showAddingResult = false;






  }

  showMagazineAddHandler(): void {
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList = false;
    this.showAddMagazine = true;
    this.showEditMagazine = false;
    this.showDeleteMagazine = false;
    this.showMembershipList = false;
    this.showJobsList = false;
    this.showAddJobsList = false;
    this.showEditJobsList = false;
    this.showDeleteJobsList = false;
    this.showAllProblemsList = false;
    this.showCoursesProblems = false;
    this.showInternProblems = false;
    this.showCoursesList = false;
    this.showEditCourses = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern = false;
    this.showDeleteIntern = false;
    this.showEnrollAlbnaa = false;
    this.showJobApplicant = false;
    this.showCourseApplicant = false;
    this.showTrainingApplicant = false;
    this.showCourseAskInfo = false;
    this.showAddingResult = false;






  }

  showMagazineEditHandler(): void {
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList = false;
    this.showAddMagazine = false;
    this.showEditMagazine = true;
    this.showDeleteMagazine = false;
    this.showMembershipList = false;
    this.showJobsList = false;
    this.showAddJobsList = false;
    this.showEditJobsList = false;
    this.showDeleteJobsList = false;
    this.showAllProblemsList = false;
    this.showCoursesProblems = false;
    this.showInternProblems = false;
    this.showCoursesList = false;
    this.showEditCourses = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern = false;
    this.showDeleteIntern = false;
    this.showEnrollAlbnaa = false;
    this.showJobApplicant = false;
    this.showCourseApplicant = false;
    this.showTrainingApplicant = false;
    this.showCourseAskInfo = false;
    this.showAddingResult = false;






  }

  showMagazineDeleteHandler(): void {
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList = false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine = true;
    this.showMembershipList = false;
    this.showJobsList = false;
    this.showAddJobsList = false;
    this.showEditJobsList = false;
    this.showDeleteJobsList = false;
    this.showAllProblemsList = false;
    this.showCoursesProblems = false;
    this.showInternProblems = false;
    this.showCoursesList = false;
    this.showEditCourses = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern = false;
    this.showDeleteIntern = false;
    this.showEnrollAlbnaa = false;
    this.showJobApplicant = false;
    this.showCourseApplicant = false;
    this.showTrainingApplicant = false;
    this.showCourseAskInfo = false;
    this.showAddingResult = false;






  }

  showMembershipListHandler(): void {
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList = false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine = false;
    this.showMembershipList = true;
    this.showJobsList = false;
    this.showAddJobsList = false;
    this.showEditJobsList = false;
    this.showDeleteJobsList = false;
    this.showAllProblemsList = false;
    this.showCoursesProblems = false;
    this.showInternProblems = false;
    this.showCoursesList = false;
    this.showEditCourses = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern = false;
    this.showDeleteIntern = false;
    this.showEnrollAlbnaa = false;
    this.showJobApplicant = false;
    this.showCourseApplicant = false;
    this.showTrainingApplicant = false;
    this.showCourseAskInfo = false;
    this.showAddingResult = false;






  }

  showJobsListHandler(): void {
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList = false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine = false;
    this.showMembershipList = false;
    this.showJobsList = true;
    this.showAddJobsList = false;
    this.showEditJobsList = false;
    this.showDeleteJobsList = false;
    this.showAllProblemsList = false;
    this.showCoursesProblems = false;
    this.showInternProblems = false;
    this.showCoursesList = false;
    this.showEditCourses = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern = false;
    this.showDeleteIntern = false;
    this.showEnrollAlbnaa = false;
    this.showJobApplicant = false;
    this.showCourseApplicant = false;
    this.showTrainingApplicant = false;
    this.showCourseAskInfo = false;
    this.showAddingResult = false;






  }

  showJobsAddHandler(): void {
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList = false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine = false;
    this.showMembershipList = false;
    this.showJobsList = false;
    this.showAddJobsList = true;
    this.showEditJobsList = false;
    this.showDeleteJobsList = false;
    this.showAllProblemsList = false;
    this.showCoursesProblems = false;
    this.showInternProblems = false;
    this.showCoursesList = false;
    this.showEditCourses = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern = false;
    this.showDeleteIntern = false;
    this.showEnrollAlbnaa = false;
    this.showJobApplicant = false;
    this.showCourseApplicant = false;
    this.showTrainingApplicant = false;
    this.showCourseAskInfo = false;
    this.showAddingResult = false;






  }

  showJobsEditHandler(): void {
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList = false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine = false;
    this.showMembershipList = false;
    this.showJobsList = false;
    this.showAddJobsList = false;
    this.showEditJobsList = true;
    this.showDeleteJobsList = false;
    this.showAllProblemsList = false;
    this.showCoursesProblems = false;
    this.showInternProblems = false;
    this.showCoursesList = false;
    this.showEditCourses = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern = false;
    this.showDeleteIntern = false;
    this.showEnrollAlbnaa = false;
    this.showJobApplicant = false;
    this.showCourseApplicant = false;
    this.showTrainingApplicant = false;
    this.showCourseAskInfo = false;
    this.showAddingResult = false;





  }

  showJobsDeleteHandler(): void {
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList = false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine = false;
    this.showMembershipList = false;
    this.showJobsList = false;
    this.showAddJobsList = false;
    this.showEditJobsList = false;
    this.showDeleteJobsList = true;
    this.showAllProblemsList = false;
    this.showCoursesProblems = false;
    this.showInternProblems = false;
    this.showCoursesList = false;
    this.showEditCourses = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern = false;
    this.showDeleteIntern = false;
    this.showEnrollAlbnaa = false;
    this.showJobApplicant = false;
    this.showCourseApplicant = false;
    this.showTrainingApplicant = false;
    this.showCourseAskInfo = false;
    this.showAddingResult = false;






  }

  showAllProblemsHandler(): void {
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList = false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine = false;
    this.showMembershipList = false;
    this.showJobsList = false;
    this.showAddJobsList = false;
    this.showEditJobsList = false;
    this.showDeleteJobsList = false;
    this.showAllProblemsList = true;
    this.showCoursesProblems = false;
    this.showInternProblems = false;
    this.showCoursesList = false;
    this.showEditCourses = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern = false;
    this.showDeleteIntern = false;
    this.showEnrollAlbnaa = false;
    this.showJobApplicant = false;
    this.showCourseApplicant = false;
    this.showTrainingApplicant = false;
    this.showCourseAskInfo = false;
    this.showAddingResult = false;






  }

  showCoursesProblemsHandler(): void {
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList = false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine = false;
    this.showMembershipList = false;
    this.showJobsList = false;
    this.showAddJobsList = false;
    this.showEditJobsList = false;
    this.showDeleteJobsList = false;
    this.showAllProblemsList = false;
    this.showCoursesProblems = true;
    this.showInternProblems = false;
    this.showCoursesList = false;
    this.showEditCourses = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern = false;
    this.showDeleteIntern = false;
    this.showEnrollAlbnaa = false;
    this.showJobApplicant = false;
    this.showCourseApplicant = false;
    this.showTrainingApplicant = false;
    this.showCourseAskInfo = false;
    this.showAddingResult = false;






  }

  showInternProblemsHandler(): void {
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList = false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine = false;
    this.showMembershipList = false;
    this.showJobsList = false;
    this.showAddJobsList = false;
    this.showEditJobsList = false;
    this.showDeleteJobsList = false;
    this.showAllProblemsList = false;
    this.showCoursesProblems = false;
    this.showInternProblems = true;
    this.showCoursesList = false;
    this.showEditCourses = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern = false;
    this.showDeleteIntern = false;
    this.showEnrollAlbnaa = false;
    this.showJobApplicant = false;
    this.showCourseApplicant = false;
    this.showTrainingApplicant = false;
    this.showCourseAskInfo = false;
    this.showAddingResult = false;






  }

  showCoursesListHandler(): void {
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList = false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine = false;
    this.showMembershipList = false;
    this.showJobsList = false;
    this.showAddJobsList = false;
    this.showEditJobsList = false;
    this.showDeleteJobsList = false;
    this.showAllProblemsList = false;
    this.showCoursesProblems = false;
    this.showInternProblems = false;
    this.showCoursesList = true;
    this.showEditCourses = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern = false;
    this.showDeleteIntern = false;
    this.showEnrollAlbnaa = false;
    this.showJobApplicant = false;
    this.showCourseApplicant = false;
    this.showTrainingApplicant = false;
    this.showCourseAskInfo = false;
        this.showAddingResult = false;






  }

  showAddCoursesHandler(): void {
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList = false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine = false;
    this.showMembershipList = false;
    this.showJobsList = false;
    this.showAddJobsList = false;
    this.showEditJobsList = false;
    this.showDeleteJobsList = false;
    this.showAllProblemsList = false;
    this.showCoursesProblems = false;
    this.showInternProblems = false;
    this.showCoursesList = false;
    this.showEditCourses = false;
    this.showAddCourses = true;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern = false;
    this.showDeleteIntern = false;
    this.showEnrollAlbnaa = false;
    this.showJobApplicant = false;
    this.showCourseApplicant = false;
    this.showTrainingApplicant = false;
    this.showCourseAskInfo = false;
    this.showAddingResult = false;






  }

  showEditCoursesHandler(): void {
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList = false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine = false;
    this.showMembershipList = false;
    this.showJobsList = false;
    this.showAddJobsList = false;
    this.showEditJobsList = false;
    this.showDeleteJobsList = false;
    this.showAllProblemsList = false;
    this.showCoursesProblems = false;
    this.showInternProblems = false;
    this.showCoursesList = false;
    this.showEditCourses = true;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern = false;
    this.showDeleteIntern = false;
    this.showEnrollAlbnaa = false;
    this.showJobApplicant = false;
    this.showCourseApplicant = false;
    this.showTrainingApplicant = false;
    this.showCourseAskInfo = false;
    this.showAddingResult = false;






  }

  showDeleteCoursesHandler(): void {
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList = false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine = false;
    this.showMembershipList = false;
    this.showJobsList = false;
    this.showAddJobsList = false;
    this.showEditJobsList = false;
    this.showDeleteJobsList = false;
    this.showAllProblemsList = false;
    this.showCoursesProblems = false;
    this.showInternProblems = false;
    this.showCoursesList = false;
    this.showEditCourses = false;
    this.showAddCourses = false;
    this.showDeleteCourses = true;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern = false;
    this.showDeleteIntern = false;
    this.showEnrollAlbnaa = false;
    this.showJobApplicant = false;
    this.showCourseApplicant = false;
    this.showTrainingApplicant = false;
    this.showCourseAskInfo = false;
    this.showAddingResult = false;






  }

  showInternListHandler(): void {
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList = false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine = false;
    this.showMembershipList = false;
    this.showJobsList = false;
    this.showAddJobsList = false;
    this.showEditJobsList = false;
    this.showDeleteJobsList = false;
    this.showAllProblemsList = false;
    this.showCoursesProblems = false;
    this.showInternProblems = false;
    this.showCoursesList = false;
    this.showEditCourses = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
    this.showInternList = true;
    this.showEditIntern = false;
    this.showAddIntern = false;
    this.showDeleteIntern = false;
    this.showEnrollAlbnaa = false;
    this.showJobApplicant = false;
    this.showCourseApplicant = false;
    this.showTrainingApplicant = false;
    this.showCourseAskInfo = false;
    this.showAddingResult = false;






  }

  showAddInternHandler(): void {
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList = false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine = false;
    this.showMembershipList = false;
    this.showJobsList = false;
    this.showAddJobsList = false;
    this.showEditJobsList = false;
    this.showDeleteJobsList = false;
    this.showAllProblemsList = false;
    this.showCoursesProblems = false;
    this.showInternProblems = false;
    this.showCoursesList = false;
    this.showEditCourses = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern = true;
    this.showDeleteIntern = false;
    this.showEnrollAlbnaa = false;
    this.showJobApplicant = false;
    this.showCourseApplicant = false;
    this.showTrainingApplicant = false;
    this.showCourseAskInfo = false;
    this.showAddingResult = false;






  }

  showEditInternHandler(): void {
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList = false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine = false;
    this.showMembershipList = false;
    this.showJobsList = false;
    this.showAddJobsList = false;
    this.showEditJobsList = false;
    this.showDeleteJobsList = false;
    this.showAllProblemsList = false;
    this.showCoursesProblems = false;
    this.showInternProblems = false;
    this.showCoursesList = false;
    this.showEditCourses = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = true;
    this.showAddIntern = false;
    this.showDeleteIntern = false;
    this.showEnrollAlbnaa = false;
    this.showJobApplicant = false;
    this.showCourseApplicant = false;
    this.showTrainingApplicant = false;
    this.showCourseAskInfo = false;
    this.showAddingResult = false;






  }

  showDeleteInternHandler(): void {
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList = false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine = false;
    this.showMembershipList = false;
    this.showJobsList = false;
    this.showAddJobsList = false;
    this.showEditJobsList = false;
    this.showDeleteJobsList = false;
    this.showAllProblemsList = false;
    this.showCoursesProblems = false;
    this.showInternProblems = false;
    this.showCoursesList = false;
    this.showEditCourses = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern = false;
    this.showDeleteIntern = true;
    this.showEnrollAlbnaa = false;
    this.showJobApplicant = false;
    this.showCourseApplicant = false;
    this.showTrainingApplicant = false;
    this.showCourseAskInfo = false;
    this.showAddingResult = false;






  }

  showEnrollAlbnaaHandler(): void {
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList = false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine = false;
    this.showMembershipList = false;
    this.showJobsList = false;
    this.showAddJobsList = false;
    this.showEditJobsList = false;
    this.showDeleteJobsList = false;
    this.showAllProblemsList = false;
    this.showCoursesProblems = false;
    this.showInternProblems = false;
    this.showCoursesList = false;
    this.showEditCourses = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern = false;
    this.showDeleteIntern = false;
    this.showEnrollAlbnaa = true;
    this.showJobApplicant = false;
    this.showCourseApplicant = false;
    this.showTrainingApplicant = false;
    this.showCourseAskInfo = false;
    this.showAddingResult = false;




  }

  showJobApplicantHandler(): void {
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList = false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine = false;
    this.showMembershipList = false;
    this.showJobsList = false;
    this.showAddJobsList = false;
    this.showEditJobsList = false;
    this.showDeleteJobsList = false;
    this.showAllProblemsList = false;
    this.showCoursesProblems = false;
    this.showInternProblems = false;
    this.showCoursesList = false;
    this.showEditCourses = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern = false;
    this.showDeleteIntern = false;
    this.showEnrollAlbnaa = false;
    this.showJobApplicant = true;
    this.showCourseApplicant = false;
    this.showTrainingApplicant = false;
    this.showCourseAskInfo = false;
    this.showAddingResult = false;




  }


  showCourseApplicantHandler(): void {
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList = false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine = false;
    this.showMembershipList = false;
    this.showJobsList = false;
    this.showAddJobsList = false;
    this.showEditJobsList = false;
    this.showDeleteJobsList = false;
    this.showAllProblemsList = false;
    this.showCoursesProblems = false;
    this.showInternProblems = false;
    this.showCoursesList = false;
    this.showEditCourses = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern = false;
    this.showDeleteIntern = false;
    this.showEnrollAlbnaa = false;
    this.showJobApplicant = false;
    this.showCourseApplicant = true;
    this.showTrainingApplicant = false;
    this.showCourseAskInfo = false;
    this.showAddingResult = false;


  }


  showTrainingApplicantHandler(): void {
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList = false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine = false;
    this.showMembershipList = false;
    this.showJobsList = false;
    this.showAddJobsList = false;
    this.showEditJobsList = false;
    this.showDeleteJobsList = false;
    this.showAllProblemsList = false;
    this.showCoursesProblems = false;
    this.showInternProblems = false;
    this.showCoursesList = false;
    this.showEditCourses = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern = false;
    this.showDeleteIntern = false;
    this.showEnrollAlbnaa = false;
    this.showJobApplicant = false;
    this.showCourseApplicant = false;
    this.showTrainingApplicant = true;
    this.showCourseAskInfo = false;
    this.showAddingResult = false;


  }

  showCourseAskInfoHandler(): void {
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList = false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine = false;
    this.showMembershipList = false;
    this.showJobsList = false;
    this.showAddJobsList = false;
    this.showEditJobsList = false;
    this.showDeleteJobsList = false;
    this.showAllProblemsList = false;
    this.showCoursesProblems = false;
    this.showInternProblems = false;
    this.showCoursesList = false;
    this.showEditCourses = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern = false;
    this.showDeleteIntern = false;
    this.showEnrollAlbnaa = false;
    this.showJobApplicant = false;
    this.showCourseApplicant = false;
    this.showTrainingApplicant = false;
    this.showCourseAskInfo = true;
    this.showAddingResult = false;


  }

  showAddResultHandler(): void {
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList = false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine = false;
    this.showMembershipList = false;
    this.showJobsList = false;
    this.showAddJobsList = false;
    this.showEditJobsList = false;
    this.showDeleteJobsList = false;
    this.showAllProblemsList = false;
    this.showCoursesProblems = false;
    this.showInternProblems = false;
    this.showCoursesList = false;
    this.showEditCourses = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern = false;
    this.showDeleteIntern = false;
    this.showEnrollAlbnaa = false;
    this.showJobApplicant = false;
    this.showCourseApplicant = false;
    this.showTrainingApplicant = false;
    this.showCourseAskInfo = false;
    this.showAddingResult = true;


  }


  
}
