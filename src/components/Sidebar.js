import Choices from './Choices';
import Image from './Image';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <aside id="sidebar">
      <h2>L'Image du Jour</h2>
      <Image />
      <Choices />
    </aside>
  );
}
