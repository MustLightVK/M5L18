class StudentList {
    constructor() {
      this.students = {}; 
    }
  
    addStudent(name, scores) {
      if (!this.students.hasOwnProperty(name)) {
        this.students[name] = {};
      }
  
      for (let count in scores) {
        this.students[name][count] = scores[count];
      }
    }
  
    calculate(name) {
      let totalScore = 0;
      let subjectCount = 0;
  
      for (let count in this.students[name]) {
        totalScore += this.students[name][count];
        subjectCount++;
      }
  
      const averageScore = totalScore / subjectCount;
      console.log(`Средний балл студента ${name} по всем предметам: ${averageScore.toFixed(2)}`);
    }
}
  
const student = new StudentList();
student.addStudent('Дмитрий', {math: 65, english: 91, physics: 83});
student.addStudent('Владимир', {math: 75, english: 83, physics: 70});
student.addStudent('Алина', {math: 90, english: 77, physics: 95});
  
student.calculate('Дмитрий');
student.calculate('Владимир');
student.calculate('Алина');
  