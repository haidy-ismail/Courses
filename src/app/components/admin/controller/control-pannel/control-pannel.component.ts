import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-control-pannel',
  templateUrl: './control-pannel.component.html',
  styleUrls: ['./control-pannel.component.css']
})
export class ControlPannelComponent {
 
  showNewsList = false;
  showAddNews = false;
  showEditNews = false;
  showDeleteNews = false;

  showMagazineList=false;
  showAddMagazine = false;
  showEditMagazine = false;
  showDeleteMagazine =false;

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
  showAddCourses =false;
  showDeleteCourses = false;

  showInternList = false;
  showEditIntern = false;
  showAddIntern =false;
  showDeleteIntern = false;


  showNewsListHandler(): void {
    this.showNewsList = true;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList=false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine =false;
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
    this.showAddCourses =false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern =false;
    this.showDeleteIntern = false;
  


  }

  showAddNewsHandler(): void {
    this.showNewsList = false;
    this.showAddNews = true;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList=false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine =false;
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
    this.showAddCourses =false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern =false;
    this.showDeleteIntern = false;


  }

  showEditNewsHandler(): void {
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = true;
    this.showDeleteNews = false;
    this.showMagazineList=false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine =false;
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
    this.showAddCourses =false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern =false;
    this.showDeleteIntern = false;


  }

  showDeleteNewsHandler(): void {
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = true;
    this.showMagazineList=false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine =false;
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
    this.showAddCourses =false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern =false;
    this.showDeleteIntern = false;


  }


  showMagazineListHandler(): void{

    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList=true;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine =false;
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
    this.showAddCourses =false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern =false;
    this.showDeleteIntern = false;

  }


  showMagazineAddHandler(): void{

    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList=false;
    this.showAddMagazine = true;
    this.showEditMagazine = false;
    this.showDeleteMagazine =false;
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
    this.showAddCourses =false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern =false;
    this.showDeleteIntern = false;

  }

  showMagazineEditHandler(): void{

    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList=false;
    this.showAddMagazine = false;
    this.showEditMagazine = true;
    this.showDeleteMagazine =false;
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
    this.showAddCourses =false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern =false;
    this.showDeleteIntern = false;



  }

  showMagazineDeleteHandler(): void{

    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList=false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine =true;
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
    this.showAddCourses =false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern =false;
    this.showDeleteIntern = false;


  }

  
  showMembershipListHandler(): void{

    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList=false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine =false;
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
    this.showAddCourses =false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern =false;
    this.showDeleteIntern = false;


  }

  showJobsListHandler(): void{
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList=false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine =false;
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
    this.showAddCourses =false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern =false;
    this.showDeleteIntern = false;

  }

  showJobsAddHandler():void{
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList=false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine =false;
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
    this.showAddCourses =false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern =false;
    this.showDeleteIntern = false;

  }

  showJobsEditHandler():void{
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList=false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine =false;
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
    this.showAddCourses =false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern =false;
    this.showDeleteIntern = false;

  }

  showJobsDeleteHandler():void{
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList=false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine =false;
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
    this.showAddCourses =false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern =false;
    this.showDeleteIntern = false;

  }

  
  showAllProblemsHandler():void{
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList=false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine =false;
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
    this.showAddCourses =false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern =false;
    this.showDeleteIntern = false;

  }

  showCoursesProblemsHandler():void{
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList=false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine =false;
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
    this.showAddCourses =false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern =false;
    this.showDeleteIntern = false;

  }

  showInternProblemsHandler():void{
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList=false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine =false;
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
    this.showAddCourses =false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern =false;
    this.showDeleteIntern = false;

  }

  
  showCoursesListHandler():void{
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList=false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine =false;
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
    this.showAddCourses =false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern =false;
    this.showDeleteIntern = false;

  }

  showAddCoursesHandler():void{
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList=false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine =false;
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
    this.showAddCourses =true;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern =false;
    this.showDeleteIntern = false;

  }

  showEditCoursesHandler():void{
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList=false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine =false;
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
    this.showAddCourses =false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern =false;
    this.showDeleteIntern = false;

  }

  showDeleteCoursesHandler():void{
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList=false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine =false;
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
    this.showAddCourses =false;
    this.showDeleteCourses = true;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern =false;
    this.showDeleteIntern = false;
  }


  showInternListHandler():void{
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList=false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine =false;
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
    this.showAddCourses =false;
    this.showDeleteCourses = false;
    this.showInternList = true;
    this.showEditIntern = false;
    this.showAddIntern =false;
    this.showDeleteIntern = false;
  }

  showAddInternHandler():void{
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList=false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine =false;
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
    this.showAddCourses =false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern =true;
    this.showDeleteIntern = false;
  }


  showEditInternHandler():void{
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList=false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine =false;
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
    this.showAddCourses =false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = true;
    this.showAddIntern =false;
    this.showDeleteIntern = false;
  }

  showDeleteInternHandler():void{
    this.showNewsList = false;
    this.showAddNews = false;
    this.showEditNews = false;
    this.showDeleteNews = false;
    this.showMagazineList=false;
    this.showAddMagazine = false;
    this.showEditMagazine = false;
    this.showDeleteMagazine =false;
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
    this.showAddCourses =false;
    this.showDeleteCourses = false;
    this.showInternList = false;
    this.showEditIntern = false;
    this.showAddIntern =false;
    this.showDeleteIntern = true;
  }










}
