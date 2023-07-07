using { lectureschedules as my } from '../db/schema';

@path: 'service/lectureSchedule'
service LectureService  {

    entity Lectures as projection on my.Lectures;
    entity Rooms as projection on my.Rooms;
    entity Courses as projection on my.Courses;
    entity Professors as projection on my.Professors;
    
}