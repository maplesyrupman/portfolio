import './index.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects';
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
      ghLink: 'https://github.com/maplesyrupman/Ranter/blob/main/README.md',
      image: require('./images/projects/ranter.png')
  },
  {
    title: 'Photo Port',
    explanation: 'A portfolio site for a photographer.',
    technologies: [
      'React'
    ],
    liveLink: 'https://maplesyrupman.github.io/photo-port/',
    ghLink: 'https://github.com/maplesyrupman/photo-port/blob/main/README.md',
    image: require('./images/projects/photo-port.png')
  },
  {
    title: 'Shop-Shop',
    explanation: 'E-Commerce site with shopping cart persistance',
    technologies: [
      'React',
      'GraphQL',
      'Apollo Server',
      'Swipe',
      'Redux'
    ],
    liveLink: 'https://shop-shop-2000.herokuapp.com/',
    ghLink: 'https://github.com/maplesyrupman/shop-shop/blob/main/README.md',
    image: require('./images/projects/shop-shop.png')
  }
] 

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route index element={<Hero />} />
          <Route path='/projects' element={<Projects projects={projects} />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
