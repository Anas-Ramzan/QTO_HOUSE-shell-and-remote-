export default function Card({ icon: Icon, title, subtitle, description, buttonText, buttonStyle = "primary" }) {
  return (
    <div className="w-full max-w-full p-10 bg-gray rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition flex flex-col justify-between min-h-[220px]">
      <div>
        <div className="flex items-center gap-2 mb-2">
          {Icon && <Icon className="w-7 h-7 text-green-600" />}
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        </div>

        <p className="text-base text-gray-700 mb-1">{subtitle}</p>

        <p className="text-sm text-gray-500 mb-6">{description}</p>
      </div>

      <button
        className={`w-full px-5 py-3 text-sm font-medium rounded-lg transition ${
          buttonStyle === "primary"
            ? "bg-green-600 text-white hover:bg-green-700"
            : "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50"
        }`}
      >
        {buttonText}
      </button>
    </div>
  )
}
