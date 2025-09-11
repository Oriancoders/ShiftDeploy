export default function ShiftDeployLoader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A1930] text-white">
      <div className="relative w-24 h-24">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full"
            style={{
              backgroundColor: ['#FF7A00', '#00CFFF', '#1E3A8A', '#FF7A00'][i],
              transform: `rotate(${i * 90}deg) translate(40px)`,
              animation: `spin 1.2s linear infinite`,
              transformOrigin: 'center -40px'
            }}
          />
        ))}
      </div>
      <p className="mt-6 text-lg tracking-widest animate-pulse">
        Deploying...
      </p>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg) translate(40px) rotate(0deg); }
          to { transform: rotate(360deg) translate(40px) rotate(-360deg); }
        }
      `}</style>
    </div>
  );
}
