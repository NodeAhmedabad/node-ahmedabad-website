import fullStackInnovationsImage1 from '@/assets/events/full-stack-innovations-2024/gallery/1.jpeg';
import fullStackInnovationsImage10 from '@/assets/events/full-stack-innovations-2024/gallery/10.jpeg';
import fullStackInnovationsImage11 from '@/assets/events/full-stack-innovations-2024/gallery/11.jpeg';
import fullStackInnovationsImage12 from '@/assets/events/full-stack-innovations-2024/gallery/12.jpeg';
import fullStackInnovationsImage2 from '@/assets/events/full-stack-innovations-2024/gallery/2.jpeg';
import fullStackInnovationsImage3 from '@/assets/events/full-stack-innovations-2024/gallery/3.jpeg';
import fullStackInnovationsImage4 from '@/assets/events/full-stack-innovations-2024/gallery/4.jpeg';
import fullStackInnovationsImage5 from '@/assets/events/full-stack-innovations-2024/gallery/5.jpeg';
import fullStackInnovationsImage6 from '@/assets/events/full-stack-innovations-2024/gallery/6.jpeg';
import fullStackInnovationsImage7 from '@/assets/events/full-stack-innovations-2024/gallery/7.jpeg';
import fullStackInnovationsImage8 from '@/assets/events/full-stack-innovations-2024/gallery/8.jpeg';
import fullStackInnovationsImage9 from '@/assets/events/full-stack-innovations-2024/gallery/9.jpeg';
import meetup2023Image1 from '@/assets/events/node-ahmedabad-meetup-2023/gallery/1.jpg';
import meetup2023Image10 from '@/assets/events/node-ahmedabad-meetup-2023/gallery/10.jpg';
import meetup2023Image11 from '@/assets/events/node-ahmedabad-meetup-2023/gallery/11.jpg';
import meetup2023Image12 from '@/assets/events/node-ahmedabad-meetup-2023/gallery/12.jpg';
import meetup2023Image13 from '@/assets/events/node-ahmedabad-meetup-2023/gallery/13.jpg';
import meetup2023Image14 from '@/assets/events/node-ahmedabad-meetup-2023/gallery/14.jpg';
import meetup2023Image15 from '@/assets/events/node-ahmedabad-meetup-2023/gallery/15.jpg';
import meetup2023Image2 from '@/assets/events/node-ahmedabad-meetup-2023/gallery/2.jpg';
import meetup2023Image3 from '@/assets/events/node-ahmedabad-meetup-2023/gallery/3.jpg';
import meetup2023Image7 from '@/assets/events/node-ahmedabad-meetup-2023/gallery/7.jpg';
import meetup2023Image8 from '@/assets/events/node-ahmedabad-meetup-2023/gallery/8.jpg';

const gallery = {
  'node-ahmedabad-meetup-2023': [
    {
      id: '1',
      title: 'Community Meetup 2024',
      author: 'Dharmik Patel',
      src: meetup2023Image1,
      srcBlur:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==',
      width: 800,
      height: 600,
      tags: ['Meetup', 'Community', 'Networking'],
      date: '2024-11-10T10:00:00Z',
      popularity: 120,
    },
    {
      id: '2',
      title: 'Node.js Workshop',
      author: 'Swapnil Soni',
      src: meetup2023Image7,
      srcBlur:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAdEAABBAMBAAAAAAAAAAAAAAABAAIDBAUREiH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRkf/aAAwDAQACEQMRAD8Ajr+G1sQs1K8mLg+EcpfvTZUvQpd3RJO4a//Z',
      width: 600,
      height: 800,
      tags: ['Workshop', 'Learning', 'Node.js'],
      date: '2024-10-25T14:00:00Z',
      popularity: 95,
    },
    {
      id: '3',
      title: 'Tech Talk: Web Performance',
      author: 'Priyesh Shah',
      src: meetup2023Image10,
      srcBlur:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAcEAABBAMBAAAAAAAAAAAAAAABAAIDBAURITH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwCur+CKNvUOdNKE+wLdTqoJ3A//2Q==',
      width: 700,
      height: 500,
      tags: ['Tech Talk', 'Performance', 'Web'],
      date: '2024-11-05T18:00:00Z',
      popularity: 150,
    },
    {
      id: '4',
      title: 'Hackathon 2024 Winners',
      author: 'Nisharg Shah',
      src: meetup2023Image2,
      srcBlur:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAACAQQDAQAAAAAAAAAAAAABAgADBBEFEiExQf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGREAAgMBAAAAAAAAAAAAAAAAAAECAxES/9oADAMBAAIRAxEAPwBPljh3rZJ1+Qv+CYRznDIGdwg+VJ+xRfXUd/on//Z',
      width: 800,
      height: 600,
      tags: ['Hackathon', 'Competition', 'Innovation'],
      date: '2024-09-15T20:00:00Z',
      popularity: 200,
    },
    {
      id: '5',
      title: 'Coffee & Code Session',
      author: 'Kushal Pathak',
      src: meetup2023Image3,
      srcBlur:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAABAwUBAQAAAAAAAAAAAAABAAIDBBEFBhIhQf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEQMSIf/aAAwDAQACEQMRAD8AjaWBk7tSvlZl0kY7OiDp/U6K2xt5EmlJ+h//2Q==',
      width: 600,
      height: 900,
      tags: ['Social', 'Networking', 'Casual'],
      date: '2024-11-01T09:00:00Z',
      popularity: 80,
    },
    {
      id: '11',
      title: 'Community Meetup 2024',
      author: 'Dharmik Patel',
      src: meetup2023Image15,
      srcBlur:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==',
      width: 800,
      height: 600,
      tags: ['Meetup', 'Community', 'Networking'],
      date: '2024-11-10T10:00:00Z',
      popularity: 120,
    },
    {
      id: '6',
      title: 'React Best Practices',
      author: 'Aneri Patel',
      src: meetup2023Image12,
      srcBlur:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAABAwUBAQAAAAAAAAAAAAABAAIDBBEFBhIhQf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAXEQEBAQEAAAAAAAAAAAAAAAABABEh/9oADAMBAAIRAxEAPwCJpYWY1K+VmXRYxv8AEHTqrOy1xU5tKT//2Q==',
      width: 750,
      height: 550,
      tags: ['Workshop', 'React', 'Learning'],
      date: '2024-10-20T15:00:00Z',
      popularity: 110,
    },
    {
      id: '7',
      title: 'Team Building Event',
      author: 'Raj Khajanchi',
      src: meetup2023Image13,
      srcBlur:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAHAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAACAgEFAQAAAAAAAAAAAAABAgADBAURERIhE//EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEQMSIf/aAAwDAQACEQMRAD8AmcdW9fKx9TlXtewAfmIZStBEf6Kj5yJXKjSj/9k=',
      width: 800,
      height: 700,
      tags: ['Social', 'Community', 'Fun'],
      date: '2024-10-10T12:00:00Z',
      popularity: 130,
    },
    {
      id: '8',
      title: 'Open Source Contributors',
      author: 'Shruti Lalotra',
      src: meetup2023Image8,
      srcBlur:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAACAQQDAQAAAAAAAAAAAAABAgMABAURBhIhQf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGREAAgMBAAAAAAAAAAAAAAAAAAECAxES/9oADAMBAAIRAxEAPwBPljh3rZJ1+Qv+CYRznDIGdwg+VJ+xRfXUd/on//Z',
      width: 650,
      height: 800,
      tags: ['Open Source', 'Development', 'Community'],
      date: '2024-11-12T16:00:00Z',
      popularity: 175,
    },
    {
      id: '9',
      title: 'Annual Conference 2024',
      author: 'Dharmik Patel',
      src: meetup2023Image14,
      srcBlur:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAACAQQDAQAAAAAAAAAAAAABAgMABAURBhIhQf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEQMSIf/aAAwDAQACEQMRAD8AT5Y4d62SdfkL/gmEc5wyBncIPlSfsUX11Hf6J//Z',
      width: 600,
      height: 900,
      tags: ['Conference', 'Keynote', 'Learning'],
      date: '2024-08-30T09:00:00Z',
      popularity: 250,
    },
    {
      id: '10',
      title: 'Annual Conference 2024',
      author: 'Dharmik Patel',
      src: meetup2023Image11,
      srcBlur:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAACAQQDAQAAAAAAAAAAAAABAgMABAURBhIhQf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEQMSIf/aAAwDAQACEQMRAD8AT5Y4d62SdfkL/gmEc5wyBncIPlSfsUX11Hf6J//Z',
      width: 900,
      height: 600,
      tags: ['Conference', 'Keynote', 'Learning'],
      date: '2024-08-30T09:00:00Z',
      popularity: 250,
    },
  ],
  'full-stack-innovations-2024': [
    {
      id: '1',
      title: 'Community Meetup 2024',
      author: 'Dharmik Patel',
      src: fullStackInnovationsImage1,
      srcBlur:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==',
      width: 800,
      height: 600,
      tags: ['Meetup', 'Community', 'Networking'],
      date: '2024-11-10T10:00:00Z',
      popularity: 120,
    },
    {
      id: '2',
      title: 'Node.js Workshop',
      author: 'Swapnil Soni',
      src: fullStackInnovationsImage2,
      srcBlur:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAdEAABBAMBAAAAAAAAAAAAAAABAAIDBAUREiH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRkf/aAAwDAQACEQMRAD8Ajr+G1sQs1K8mLg+EcpfvTZUvQpd3RJO4a//Z',
      width: 600,
      height: 800,
      tags: ['Workshop', 'Learning', 'Node.js'],
      date: '2024-10-25T14:00:00Z',
      popularity: 95,
    },
    {
      id: '3',
      title: 'Coffee & Code Session',
      author: 'Kushal Pathak',
      src: fullStackInnovationsImage5,
      srcBlur:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAABAwUBAQAAAAAAAAAAAAABAAIDBBEFBhIhQf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEQMSIf/aAAwDAQACEQMRAD8AjaWBk7tSvlZl0kY7OiDp/U6K2xt5EmlJ+h//2Q==',
      width: 600,
      height: 900,
      tags: ['Social', 'Networking', 'Casual'],
      date: '2024-11-01T09:00:00Z',
      popularity: 80,
    },
    {
      id: '4',
      title: 'Hackathon 2024 Winners',
      author: 'Nisharg Shah',
      src: fullStackInnovationsImage4,
      srcBlur:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAACAQQDAQAAAAAAAAAAAAABAgADBBEFEiExQf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGREAAgMBAAAAAAAAAAAAAAAAAAECAxES/9oADAMBAAIRAxEAPwBPljh3rZJ1+Qv+CYRznDIGdwg+VJ+xRfXUd/on//Z',
      width: 800,
      height: 600,
      tags: ['Hackathon', 'Competition', 'Innovation'],
      date: '2024-09-15T20:00:00Z',
      popularity: 200,
    },
    {
      id: '5',
      title: 'Annual Conference 2024',
      author: 'Dharmik Patel',
      src: fullStackInnovationsImage12,
      srcBlur:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAACAQQDAQAAAAAAAAAAAAABAgMABAURBhIhQf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEQMSIf/aAAwDAQACEQMRAD8AT5Y4d62SdfkL/gmEc5wyBncIPlSfsUX11Hf6J//Z',
      width: 600,
      height: 900,
      tags: ['Conference', 'Keynote', 'Learning'],
      date: '2024-08-30T09:00:00Z',
      popularity: 250,
    },
    {
      id: '6',
      title: 'Tech Talk: Web Performance',
      author: 'Priyesh Shah',
      src: fullStackInnovationsImage3,
      srcBlur:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAcEAABBAMBAAAAAAAAAAAAAAABAAIDBAURITH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwCur+CKNvUOdNKE+wLdTqoJ3A//2Q==',
      width: 700,
      height: 500,
      tags: ['Tech Talk', 'Performance', 'Web'],
      date: '2024-11-05T18:00:00Z',
      popularity: 150,
    },

    {
      id: '7',
      title: 'Community Meetup 2024',
      author: 'Dharmik Patel',
      src: fullStackInnovationsImage6,
      srcBlur:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==',
      width: 800,
      height: 600,
      tags: ['Meetup', 'Community', 'Networking'],
      date: '2024-11-10T10:00:00Z',
      popularity: 120,
    },
    {
      id: '8',
      title: 'React Best Practices',
      author: 'Aneri Patel',
      src: fullStackInnovationsImage7,
      srcBlur:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAABAwUBAQAAAAAAAAAAAAABAAIDBBEFBhIhQf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAXEQEBAQEAAAAAAAAAAAAAAAABABEh/9oADAMBAAIRAxEAPwCJpYWY1K+VmXRYxv8AEHTqrOy1xU5tKT//2Q==',
      width: 750,
      height: 550,
      tags: ['Workshop', 'React', 'Learning'],
      date: '2024-10-20T15:00:00Z',
      popularity: 110,
    },
    {
      id: '9',
      title: 'Team Building Event',
      author: 'Raj Khajanchi',
      src: fullStackInnovationsImage8,
      srcBlur:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAHAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAACAgEFAQAAAAAAAAAAAAABAgADBAURERIhE//EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEQMSIf/aAAwDAQACEQMRAD8AmcdW9fKx9TlXtewAfmIZStBEf6Kj5yJXKjSj/9k=',
      width: 800,
      height: 700,
      tags: ['Social', 'Community', 'Fun'],
      date: '2024-10-10T12:00:00Z',
      popularity: 130,
    },
    {
      id: '10',
      title: 'Open Source Contributors',
      author: 'Shruti Lalotra',
      src: fullStackInnovationsImage9,
      srcBlur:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAACAQQDAQAAAAAAAAAAAAABAgMABAURBhIhQf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGREAAgMBAAAAAAAAAAAAAAAAAAECAxES/9oADAMBAAIRAxEAPwBPljh3rZJ1+Qv+CYRznDIGdwg+VJ+xRfXUd/on//Z',
      width: 650,
      height: 800,
      tags: ['Open Source', 'Development', 'Community'],
      date: '2024-11-12T16:00:00Z',
      popularity: 175,
    },
    {
      id: '11',
      title: 'Annual Conference 2024',
      author: 'Dharmik Patel',
      src: fullStackInnovationsImage10,
      srcBlur:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAACAQQDAQAAAAAAAAAAAAABAgMABAURBhIhQf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEQMSIf/aAAwDAQACEQMRAD8AT5Y4d62SdfkL/gmEc5wyBncIPlSfsUX11Hf6J//Z',
      width: 600,
      height: 900,
      tags: ['Conference', 'Keynote', 'Learning'],
      date: '2024-08-30T09:00:00Z',
      popularity: 250,
    },
    {
      id: '12',
      title: 'Annual Conference 2024',
      author: 'Dharmik Patel',
      src: fullStackInnovationsImage11,
      srcBlur:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAACAQQDAQAAAAAAAAAAAAABAgMABAURBhIhQf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEQMSIf/aAAwDAQACEQMRAD8AT5Y4d62SdfkL/gmEc5wyBncIPlSfsUX11Hf6J//Z',
      width: 600,
      height: 900,
      tags: ['Conference', 'Keynote', 'Learning'],
      date: '2024-08-30T09:00:00Z',
      popularity: 250,
    },
  ],
};

export default gallery;
