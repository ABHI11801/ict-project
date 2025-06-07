import React, { useState } from "react";

const ExecutiveDashboard = () => {
  const [leads, setLeads] = useState([]);
  const [newLead, setNewLead] = useState({ name: "", desc: "", dueDate: "" });

  const addLead = () => {
    setLeads([...leads, { ...newLead, id: Date.now() }]);
    setNewLead({ name: "", desc: "", dueDate: "" });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Executive Dashboard</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Create New Lead</h2>
        <input
          className="border p-2 mr-2"
          placeholder="Name"
          value={newLead.name}
          onChange={(e) => setNewLead({ ...newLead, name: e.target.value })}
        />
        <input
          className="border p-2 mr-2"
          placeholder="Description"
          value={newLead.desc}
          onChange={(e) => setNewLead({ ...newLead, desc: e.target.value })}
        />
        <input
          type="date"
          className="border p-2 mr-2"
          value={newLead.dueDate}
          onChange={(e) => setNewLead({ ...newLead, dueDate: e.target.value })}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addLead}>
          Add Lead
        </button>
      </div>
      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Description</th>
            <th className="p-2 border">Due Date</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td className="p-2 border">{lead.id}</td>
              <td className="p-2 border">{lead.name}</td>
              <td className="p-2 border">{lead.desc}</td>
              <td className="p-2 border">{lead.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExecutiveDashboard;