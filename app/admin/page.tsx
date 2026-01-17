
export default function AdminOverview() {
  return (
    <div className="space-y-12 animate-fade-in">
      <header>
        <h1 className="text-5xl serif text-white italic">CMS Overview</h1>
        <p className="text-gray-500 uppercase tracking-widest text-[10px] mt-2">Real-time storefront synchronization</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Active Items', val: '152' },
          { label: 'Draft Essays', val: '2' },
          { label: 'New Orders', val: '3' },
          { label: 'Sys. Health', val: '100%' },
        ].map((stat, i) => (
          <div key={i} className="bg-[#151515] p-10 border border-white/5">
            <h3 className="text-[10px] uppercase tracking-widest text-gray-600 mb-4">{stat.label}</h3>
            <p className="text-4xl font-bold serif text-white italic">{stat.val}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-[#151515] p-12 border border-white/5">
        <h2 className="text-2xl serif text-white italic mb-10">System Logs</h2>
        <div className="space-y-6">
          {[1,2,3,4].map(i => (
            <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 text-sm">
              <span className="text-gray-400 font-light">Deployment of "Home" successful.</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-700">Just now</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
