
'use strict';

function autograde(report) {
  const students = report.split('\n');
  let total = 0;
  const resultObj = students.reduce((storage, student)=>{
    const studentScores = student.split(' ');
    const studentName = studentScores.splice(0, 1);
    storage[studentName] = studentScores.reduce((studentTotal, score, index)=>{
      score = Number(score);      
      if (index === studentScores.length - 1) {
        studentTotal += score;
        let average = studentTotal / studentScores.length;
        total += average;
        return average;
      }
      return studentTotal + score;
    }, 0);
    return storage;
  }, {});
  resultObj.all = Number(Number.parseFloat(total / students.length).toFixed(2));
  return resultObj;
}
