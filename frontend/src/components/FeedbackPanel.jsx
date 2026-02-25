export default function FeedbackPanel({ feedback, loading }) {
  return (
    <div className="p-8 overflow-y-auto h-full">
      <h2 className="text-xs uppercase tracking-wider text-gray-500 mb-6">
        Review Output
      </h2>

      {loading ? (
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
        </div>
      ) : (
        <pre className="whitespace-pre-wrap text-sm leading-relaxed">
          {feedback}
        </pre>
      )}
    </div>
  );
}