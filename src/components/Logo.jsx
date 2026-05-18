// 潤思 CRIS · Logo Mark — SVG hex-C emblem

export function LogoMark({ size = 40, color = "var(--accent-copper)", glow = true }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={glow ? { filter: "drop-shadow(0 0 12px rgba(200, 153, 104, 0.35))" } : {}}
    >
      {/* Outer hexagon — pointy top/bottom */}
      <polygon
        points="60,8 106,34 106,86 60,112 14,86 14,34"
        stroke={color}
        strokeWidth="4"
        strokeLinejoin="miter"
        fill="none"
      />
      {/* Inner C — hexagon outline with right side opened */}
      <path
        d="M 78 30 L 36 30 L 26 60 L 36 90 L 78 90"
        stroke={color}
        strokeWidth="4"
        strokeLinejoin="miter"
        strokeLinecap="butt"
        fill="none"
      />
      {/* Center accent dot */}
      <circle cx="60" cy="60" r="3.2" fill={color} />
    </svg>
  )
}

export function LogoLockup({ markSize = 40, compact = false }) {
  return (
    <a href="#home" className="logo-lockup">
      <LogoMark size={markSize} />
      <div className="logo-text">
        <strong>CRIS</strong>
        {!compact && <span>Corporate Resource Integration System</span>}
        <em>大连润思科技</em>
      </div>
    </a>
  )
}

export default LogoLockup
