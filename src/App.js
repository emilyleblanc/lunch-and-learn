
import './App.css';
import ListItem from './ListItem';

function App() {
  return (
    <div className="list">
      <ListItem
        id={0}
        task={'buy groceries'}
        />
      <ListItem
        id={1}
        task={'go to work'}
        />
      <ListItem
        id={2}
        task={'treat myself'}
        />
    </div>
  );
}

export default App;
