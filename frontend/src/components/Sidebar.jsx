export default function Sidebar({ history }) {
  return (
    <aside className="w-64 border-r border-gray-200 dark:border-gray-800 p-6">
      <h2 className="text-xs uppercase tracking-wider text-gray-500 mb-6">
        Review History
      </h2>

      {history.length === 0 && (
        <p className="text-sm text-gray-400">No reviews yet</p>
      )}

      <div className="space-y-4">
        {history.map((item, index) => (
          <div
            key={index}
            className="p-3 rounded-lg bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition cursor-pointer"
          >
            <p className="text-sm font-medium">{item.language}</p>
            <p className="text-xs text-gray-500">{item.time}</p>
          </div>
        ))}
      </div>
    </aside>
  );
}