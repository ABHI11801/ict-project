import { Link } from 'react-router-dom';

const Sidebar = ({ role }) => {
  const menuItems = {
    Admin: ['All Leads', 'Add User', 'Reports'],
    Executive: ['My Leads', 'Create Lead'],
    Manager: ['Team Leads', 'Assign Tasks'],
  };

  const items = menuItems[role] || [];

  return (
    <div style={{ width: '200px', background: '#eee', padding: '1rem' }}>
      <h3>{role} Menu</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item, idx) => (
          <li key={idx} style={{ margin: '8px 0' }}>
            <Link to={`/${item.toLowerCase().replace(/ /g, '-')}`}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
