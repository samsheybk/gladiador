const TECH_GROUPS = [
  {
    label: 'Frontend',
    color: '#06b6d4',
    items: [
      { name: 'React', icon: '⚛' },
      { name: 'Vue', icon: '💚' },
      { name: 'Next.js', icon: '▲' },
      { name: 'TypeScript', icon: 'TS' },
      { name: 'Tailwind', icon: '🌊' },
      { name: 'Angular', icon: '🅰' },
      { name: 'Svelte', icon: '🧡' },
      { name: 'Redux', icon: '🔄' },
    ],
  },
  {
    label: 'Backend',
    color: '#10b981',
    items: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Python', icon: '🐍' },
      { name: 'Java', icon: '☕' },
      { name: 'Go', icon: '🔵' },
      { name: 'Rust', icon: '🦀' },
      { name: 'NestJS', icon: '🇳' },
      { name: 'FastAPI', icon: '⚡' },
      { name: 'GraphQL', icon: '◈' },
    ],
  },
  {
    label: 'Bases de Datos',
    color: '#8b5cf6',
    items: [
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Redis', icon: '🔴' },
      { name: 'MySQL', icon: '🐬' },
      { name: 'Elasticsearch', icon: '🔍' },
      { name: 'Firebase', icon: '🔥' },
      { name: 'SQLite', icon: '📦' },
      { name: 'MariaDB', icon: '🐬' },
    ],
  },
]

function ScrollingRow({ group, reverse = false }) {
  const doubled = [...group.items, ...group.items, ...group.items]

  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center gap-4 lg:gap-6 py-3">
        <span
          className="shrink-0 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-md"
          style={{
            background: `${group.color}15`,
            color: group.color,
            border: `1px solid ${group.color}20`,
          }}
        >
          {group.label}
        </span>
        <div className="flex-1 overflow-hidden mask-edges">
          <div
            className="flex gap-4 lg:gap-6"
            style={{
              animation: `scroll-${reverse ? 'right' : 'left'} 40s linear infinite`,
              width: 'max-content',
            }}
          >
            {doubled.map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className="flex items-center gap-2.5 glass-card rounded-xl px-4 py-2.5 shrink-0 group hover:border-electric-500/30 transition-all duration-300"
                style={{
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                  style={{
                    background: `linear-gradient(135deg, ${group.color}20, ${group.color}08)`,
                    border: `1px solid ${group.color}20`,
                  }}
                >
                  <span className="text-base leading-none">{item.icon}</span>
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TechStack() {
  return (
    <section className="relative py-10 lg:py-14 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-1/2 w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(24,131,255,0.08) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <span className="text-electric-500 text-sm font-semibold tracking-widest uppercase">
            Arsenal Tecnológico
          </span>
          <h2 className="section-title mt-3">
            Nuestro{' '}
            <span className="gradient-text">Armamento</span>
          </h2>
          <p className="section-subtitle">
            Las herramientas con las que forjamos soluciones digitales de alto rendimiento.
          </p>
        </div>
      </div>

      <div className="relative">
        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-33.33%); }
            100% { transform: translateX(0); }
          }
          .mask-edges {
            mask-image: linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%);
            -webkit-mask-image: linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%);
          }
        `}</style>

        <div className="space-y-4 lg:space-y-5">
          {TECH_GROUPS.map((group, i) => (
            <ScrollingRow key={group.label} group={group} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
