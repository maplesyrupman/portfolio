import './index.css';
import Hero from './components/Hero'
import Project from './components/Project';
import Contact from './components/Contact';

const projects = [
  {
      title: 'Ranter',
      explanation: 'A social media application inspired by Twitter.',
      technologies: [
        'NodeJS',
        'Bootstrap',
        'MySQL & Seqluelize',
        'Handlebars'
      ],
      liveLink: 'http://ranter2-0.herokuapp.com',
      ghLink: 'https://github.com/maplesyrupman/Ranter',
      image: require('./images/projects/ranter.png')
  },
  {
    title: 'Photo Port',
    explanation: 'A portfolio site for a photographer.',
    technologies: [
      'React'
    ],
    liveLink: 'http://ranter2-0.https://maplesyrupman.github.io/photo-port/',
    ghLink: 'https://github.com/maplesyrupman/photo-port/blob/main/README.md',
    image: require('./images/projects/photo-port.png')
  }
] 

function App() {
  return (
    <div className='flex flex-col items-center py-10'>
      <Hero />
      <div className='lg:w-7/12'>
        <h2 className='mb-4 text-4xl text-center'>Projects</h2>
        {projects.map(project => <Project project={project} key={project.title}/>)}
      </div>
      <Contact />
    </div>

  );
}

export default App;
