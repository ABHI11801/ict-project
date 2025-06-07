import Sidebar from '../components/SideBar';
import Nav from '../components/Nav';
import Card from '../components/Card';
import Chart from '../components/Chart';

const AdminDashboard = () => (
  <div className="flex flex-col h-screen">
    <Nav />
    <div className="flex flex-1">
      <Sidebar role="Admin" />
      <div className="flex-1 flex flex-col">
        <Topbar username="Admin" />
        <div className="p-6 grid grid-cols-4 gap-4">
          <Card title="Metric 1" count="0000" color="bg-blue-500" />
          <Card title="Metric 2" count="0000" color="bg-red-500" />
          <Card title="Metric 3" count="0000" color="bg-green-500" />
          <Card title="Metric 4" count="0000" color="bg-yellow-500" />
        </div>
        <div className="p-6 flex-1">
          <Chart />
        </div>
      </div>
    </div>
  </div>
);

export default AdminDashboard;
