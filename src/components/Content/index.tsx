import React, { useEffect, useState } from 'react'
import Search from '../Search'
import useSearchFilter from '../../hooks/useSearchFilter';
import NoteList from '../Notes/NoteList';

const data = [
  {
    'id': 1,
    'title': 'JavaScript Basics',
    'content': 'Learn the fundamentals of JavaScript including variables, functions, and loops.',
    'tags': ['JavaScript', 'Programming', 'Basics']
  },
  {
    'id': 2,
    'title': 'React Hooks',
    'content': 'Understand the use of useState, useEffect, and custom hooks in React.',
    'tags': ['React', 'Hooks', 'Frontend']
  },
  {
    'id': 3,
    'title': 'Node.js Introduction',
    'content': 'Introduction to Node.js, including setup and basic usage.',
    'tags': ['Node.js', 'Backend', 'Introduction']
  },
  {
    'id': 4,
    'title': 'CSS Flexbox',
    'content': 'Learn how to use Flexbox for layout design in CSS.',
    'tags': ['CSS', 'Flexbox', 'Layout']
  },
  {
    'id': 5,
    'title': 'HTML5 Elements',
    'content': 'Understand the new HTML5 elements and how to use them.',
    'tags': ['HTML5', 'Elements', 'Frontend']
  },
  {
    'id': 6,
    'title': 'Git and GitHub',
    'content': 'Learn version control using Git and how to collaborate using GitHub.',
    'tags': ['Git', 'GitHub', 'Version Control']
  },
  {
    'id': 7,
    'title': 'Responsive Design',
    'content': 'Tips and tricks for designing responsive websites using media queries and breakpoints.',
    'tags': ['CSS', 'Responsive Design', 'Web Development']
  },
  {
    'id': 8,
    'title': 'Async/Await in JS',
    'content': 'Master asynchronous programming with async/await in JavaScript.',
    'tags': ['JavaScript', 'Async/Await', 'ES6']
  },
  {
    'id': 9,
    'title': 'Web Accessibility',
    'content': 'Understand the principles of web accessibility and best practices.',
    'tags': ['Web Accessibility', 'Best Practices', 'SEO']
  },
  {
    'id': 10,
    'title': 'Frontend Performance Optimization',
    'content': 'Optimizing frontend performance with techniques like lazy loading and code splitting.',
    'tags': ['Frontend', 'Performance', 'Optimization']
  }
];

const dataset = [...data, data]


const Content: React.FC = () => {
  const { filteredData, setQuery, loading } = useSearchFilter(dataset, "title");
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearch = (query: string) => {
    setQuery(query);
  }

  return (
    <div>
      <div className={`sticky top-0 py-3 bg-white ${isSticky ? 'shadow-lg' : ''} mb-5 sm:relative sm:shadow-none sm:py-0 sm:mb-0 px-4 sm:px-0`}>
        <Search className="w-full sm:w-80" onSearch={handleSearch} />
      </div>
      <NoteList notes={filteredData} isLoading={loading} />
    </div>
  )
}

export default Content