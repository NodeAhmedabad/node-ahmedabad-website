import persons, { categories } from '@/data/persons/persons';

const teamMembers = Object.values(persons).filter(
  (person) => person.category === categories.CORE || person.category === categories.VOLUNTEER,
);

export default teamMembers;
