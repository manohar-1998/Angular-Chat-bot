import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private router: Router) {}
  // List for recent reports goes here
  recentReports = [
    {
      title: 'Introduction to Indian History',
      category: 'Course/Module/Lesson',
    },
    {
      title: 'Introduction to Indian History',
      category: 'Course/Module/Lesson',
    },
  ];

  // List for recent bots goes here
  recentBots = [
    {
      title: 'Introduction to Indian History',
      category: 'Course/Module/Lesson',
    },
    {
      title: 'Introduction to Indian History',
      category: 'Course/Module/Lesson',
    },
    {
      title: 'Introduction to Indian History',
      category: 'Course/Module/Lesson',
    },
  ];

  handleRedirect() {
    this.router.navigate(['/chat-bot']);
  }
}
