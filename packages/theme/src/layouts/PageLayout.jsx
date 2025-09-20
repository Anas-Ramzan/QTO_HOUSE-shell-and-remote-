// src/layouts/PageLayout.jsx
import { Settings } from "lucide-react";

function PageLayout({
  icon: Icon,                
  title,                     
  subtitle,                  
  contentTitle,              
  contentSubtitle,           
  contentDescription,        
  showRemote = true,         
  showSettings = true,       
}) {
  return (
    <div className="p-6 space-y-6">
      {/* Top Right Actions */}
      <div className="flex justify-end items-center gap-2">
        {showRemote && (
          <span className="px-2 py-1 text-xs rounded-md bg-gray-200 text-gray-700">
            Remote
          </span>
        )}
        {showSettings && (
          <button className="flex items-center gap-1 border px-3 py-1 rounded-md text-sm hover:bg-gray-50">
            <Settings size={16} />
            Settings
          </button>
        )}
      </div>

      {/* Global Header with Icon */}
      <div className="flex items-center gap-3">
        {Icon && <Icon className="text-green-600" size={28} />}
        <div>
          <h1 className="text-xl font-bold text-gray-900">{title}</h1>
          <p className="text-gray-600">{subtitle}</p>
        </div>
      </div>

      {/* Content Box */}
      <div className="bg-gray-50 border rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800">{contentTitle}</h2>
        <p className="text-gray-600">{contentSubtitle}</p>
        <p className="text-gray-700 mt-2">{contentDescription}</p>
      </div>
    </div>
  );
}

export default PageLayout;
