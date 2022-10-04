import ListItem from './ListItem';
import Image from './Image';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <aside id="sidebar">
      <h2>Image du Jour</h2>
      <Image />
      <div>
        <h3>List of Choices</h3>
        <ul>
          <ListItem />
        </ul>
      </div>
    </aside>
  );
}
