export default function Modal({ data, onClose }) {
  if (!data) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative glass-strong rounded-2xl p-8 max-w-md w-full animate-slide-up shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:text-white transition-colors"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-center gap-4 mb-6">
          {data.icon ? (
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl shrink-0"
              style={{
                background: `linear-gradient(135deg, ${data.color1}20, ${data.color2}10)`,
                border: `1px solid ${data.color1}30`,
              }}
            >
              {data.icon}
            </div>
          ) : (
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold font-display shrink-0"
              style={{
                background: `linear-gradient(135deg, ${data.color1}, ${data.color2})`,
              }}
            >
              {data.initials}
            </div>
          )}
          <div>
            <h3 className="text-xl font-bold font-display">{data.title}</h3>
            {data.subtitle && (
              <span className="text-xs text-gray-500">{data.subtitle}</span>
            )}
          </div>
        </div>

        {data.description && (
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {data.description}
          </p>
        )}

        {data.result && (
          <p className="text-sm text-gray-400 mb-6">
            <span className="text-electric-500 font-medium">Resultado:</span>{' '}
            {data.result}
          </p>
        )}

        {data.tags && data.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full"
                style={{
                  background: 'rgba(24,131,255,0.06)',
                  border: '1px solid rgba(24,131,255,0.1)',
                  color: 'rgba(24,131,255,0.8)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
