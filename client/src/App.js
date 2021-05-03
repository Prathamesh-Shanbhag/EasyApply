import './App.css';
import Jobs from './Jobs';
import './App.css';

function App() {
  const mockJobs = [
    { title: 'SWE1', company: 'Google' },
    { title: 'SWE2', company: 'Facebook' },
    { title: 'SWE3', company: 'Apple' },
  ];

  return (
    <div className='App'>
      <Jobs jobs={mockJobs} />
    </div>
  );
}

export default App;
