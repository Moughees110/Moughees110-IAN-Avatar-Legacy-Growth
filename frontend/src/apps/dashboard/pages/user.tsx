const users = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com" },
  { id: 2, name: "Bob Smith", email: "bob@example.com" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com" },
];

export default function User() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-800">
            <th className="p-3 border-b border-gray-700">ID</th>
            <th className="p-3 border-b border-gray-700">Name</th>
            <th className="p-3 border-b border-gray-700">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-800">
              <td className="p-3 border-b border-gray-700">{user.id}</td>
              <td className="p-3 border-b border-gray-700">{user.name}</td>
              <td className="p-3 border-b border-gray-700">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
