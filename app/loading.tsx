export default function LoadingPage() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 animate-fadeIn">
        <div className="flex flex-col items-center space-y-4 p-8 bg-white rounded-2xl shadow-2xl w-80">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <h2 className="text-xl font-semibold text-gray-700">Loading...</h2>
          <p className="text-sm text-gray-500">Please wait while we prepare everything for you.</p>
        </div>
      </div>
    );
  }
  