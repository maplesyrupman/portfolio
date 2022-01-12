import './index.css';
import Hero from './components/Hero'
import Project from './components/Project';
import Contact from './components/Contact';

const projects = [
  {
      title: 'Project title',
      explanation: 'Lorem ipsum ind anata las tilrafla man do init gallitsray for in dinast man dealer.',
      liveLink: 'http://ranter2-0.herokuapp.com',
      ghLink: 'https://github.com/maplesyrupman/Ranter',
      image: require('./images/projects/ranter.png')
  }
] 

function App() {
  return (
    <div className='flex flex-col items-center py-10'>
      <Hero />
      <div className='flex flex-col items-center'>
        <h2 className='mb-4 text-4xl'>Projects</h2>
        {projects.map(project => <Project project={project} key={project.title}/>)}
      </div>
      <Contact />
    </div>

  );
}

export default App;
