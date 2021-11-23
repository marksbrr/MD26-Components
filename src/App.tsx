import Accordion from './components/accordion/accordion';
import accordionData from './components/data/accordionData';
import Switch from './components/switch/switch';
import Dropdown from './components/dropdown/dropdown';
import Rating from './components/rating/rating';
import ToggleButton from './components/toggle-button/toggle-button';
import './App.scss';

const App = () => (

  <div className="container">
    <h1 className="task-header">Accordion</h1>
    {accordionData.map((item, index) => (
      <Accordion
        key={item.question}
        question={item.question}
        answer={item.answer}
        index={index}
      />
    ))}
    <h1 className="task-header">Switch</h1>
    <Switch />
    <h1 className="task-header">Dropdown</h1>
    <Dropdown />
    <h1 className="task-header">Rating</h1>
    <Rating />
    <h1 className="task-header">Toggle</h1>
    <ToggleButton />
  </div>
);
export default App;
