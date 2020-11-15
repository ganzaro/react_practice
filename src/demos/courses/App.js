import React, {useState, useEffect} from 'react';

import CoursesList from './CoursesList';
import Search from './Search';
import courses from './data';

const App = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = event => {
    setSearchText(event.target.value);
  }

  const filteredCourses = courses.filter(course => {
    return course.title.includes(searchText) || course.author.includes(searchText);
  });

  return (
    <div>
      <h1>List of Courses</h1>
      <hr />

      <Search onSearch={handleSearch} />
      
      <CoursesList courses={filteredCourses} />
    </div>
  );
}

export default App;


