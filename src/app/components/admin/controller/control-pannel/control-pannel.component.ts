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

@Component({
  selector: 'app-control-pannel',
  templateUrl: './control-pannel.component.html',
  styleUrls: ['./control-pannel.component.css'],
})
export class ControlPannelComponent implements OnInit {
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
  myForm: FormGroup ;
  myMagazineForm:FormGroup;
  data: any[] = [];
  selectedId: number | null = null;
  currentNewsId: number = 0;
  isEditing = false;
  myCoursesForm:FormGroup;
  myJobForm:FormGroup;







  constructor(
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
    private courseApplicantService : CourseApplicantService

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


  onSubmitNews() {
    if (this.myForm.valid) {
      const newNewsItem = this.myForm.value;
      this.newsService.postNews(newNewsItem).subscribe(
          () => {
            alert('News item added successfully')
              console.log('News item added successfully');
              this.myForm.reset();
              // Optionally, refresh the news list or navigate back to the list
              this.getAllnews(); // Function to refresh the news list
          },
          error => {
              console.error('Error adding news item:', error);
          }
      );
  } else {
      console.error('Form is invalid');
  }
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
  if (this.myMagazineForm.valid) {
    const newMAgazineItem = this.myMagazineForm.value;
    this.magazinesService.postMagazine(newMAgazineItem).subscribe(
        () => {
          alert('Magazine item added successfully')
            console.log('Magazine item added successfully');
            this.myMagazineForm.reset();
            // Optionally, refresh the news list or navigate back to the list
            this.getAllMagazines();
             // Function to refresh the news list
        },
        error => {
            console.error('Error adding MAgazine item:', error);
        }
    );
} else {
    console.error('Form is invalid');
}
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


 

// onSubmitNews() {
//   if (this.myForm.valid) {
//       const newsData = this.myForm.value;

//       if (this.currentNewsId !== null) {
//           // Perform update (PUT request)
//           this.newsService.updateNewsById(this.currentNewsId, newsData).subscribe(
//               () => {
//                   console.log('News item updated successfully');
//                   // Refresh the news list
//                   this.getAllnews();
//                   // Reset form and state after successful update
//                   this.resetFormAndState();
//               },
//               error => {
//                   console.error('Error updating news item:', error);
//               }
//           );
//       } else {
//           // Perform create (POST request)
//           this.newsService.postNews(newsData).subscribe(
//               () => {
//                   console.log('News item created successfully');
//                   // Refresh the news list
//                   this.getAllnews();
//                   // Reset form and state after successful creation
//                   this.resetFormAndState();
//               },
//               error => {
//                   console.error('Error creating news item:', error);
//               }
//           );
//       }
//   } else {
//       console.error('Form is invalid');
//   }
// }

// Function to reset form and state after submission










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
  }
}
