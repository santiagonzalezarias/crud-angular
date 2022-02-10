import { Component } from '@angular/core';
import { Student } from './models/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  studentsArray: Student[] = [
    { id: 1, name: 'Santiago', lastname: 'Gonzalez', edad: '20' },
    { id: 2, name: 'Juan', lastname: 'Gomez', edad: '25' },
    { id: 3, name: 'Valentina', lastname: 'Perez', edad: '18' },
  ];

  selectedStudent: Student = new Student();

  submit() {
    if (this.selectedStudent.id == 0) {
      this.selectedStudent.id = this.studentsArray.length + 1;
      this.studentsArray.push(this.selectedStudent);
    }
    this.selectedStudent = new Student();
  }

  edit(student: Student) {
    this.selectedStudent = student;
  }

  delete() {
    if (confirm('Seguro que quieres eliminarlo?')) {
      this.studentsArray = this.studentsArray.filter(
        (x) => x != this.selectedStudent
      );
      this.selectedStudent = new Student();
    }
  }
}
