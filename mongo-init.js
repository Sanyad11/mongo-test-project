db = db.getSiblingDB('sample_db');

db.createCollection('lesson_collection');

db.lesson_collection.insertMany([
 {
    name: 'lesson1',
    description: 'lesson 1'
  },
  {
    name: 'lesson2',
    description: 'lesson 2'
  },
  {
    name: 'lesson3',
    description: 'lesson 3'
  }  
]);


db.createCollection('course_collection');

db.course_collection.insertMany([
 {
    name: 'course1',
    description: 'course 1',
    lessons: ['lesson1', 'lesson2']
  },
  {
    name: 'course2',
    description: 'course 2',
    lessons: ['lesson1', 'lesson3']
  },
]);


db.createCollection('student_collection');

db.student_collection.insertMany([
 {
    name: 'Joe',
    surname: 'Smit',
    finnishedCourses: ['course1'],
    finnishedLessons: ['lesson3']
  },
  {
    name: 'Pill',
    surname: 'Dumphy',
    finnishedCourses: ['course2'],
    finnishedLessons: ['lesson2']
  },
]);