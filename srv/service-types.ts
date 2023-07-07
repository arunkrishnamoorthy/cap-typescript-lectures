interface Rooms {
    ID: number,
    name: string,
    seats: number,
    lecutres: Lectures[]
}

interface Lectures {
    cuid: string,
    starttime: Date,
    endtime: Date,
    course_ID: Courses[],
    prof_ID: Professors[],
    room_ID: Rooms[],
    allday : Boolean
}

interface Courses {
     ID: string,
    name: string,
    descr: string,
    ects: number,
    lectures : Lectures[]
}

interface Professors {
    ID: number,
    firstname: string,
    lastname: string,
    title: string,
    lectures: Lectures[]
}

export {
    Rooms,Lectures,Professors,Courses
}