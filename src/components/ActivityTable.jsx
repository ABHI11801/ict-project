import React from "react";

const ActivityTable = () => {
  const leads = [
    { id: 1, name: "Lead A", status: "Pending", team: "Team 1" },
    { id: 2, name: "Lead B", status: "Completed", team: "Team 2" },
    { id: 3, name: "Lead C", status: "In Review", team: "Team 1" },
  ];

  return (
    <table className="w-full border mt-4 text-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2 border">ID</th>
          <th className="p-2 border">Lead</th>
          <th className="p-2 border">Status</th>
          <th className="p-2 border">Team</th>
        </tr>
      </thead>
      <tbody>
        {leads.map((lead) => (
          <tr key={lead.id}>
            <td className="p-2 border">{lead.id}</td>
            <td className="p-2 border">{lead.name}</td>
            <td className="p-2 border">{lead.status}</td>
            <td className="p-2 border">{lead.team}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ActivityTable;
