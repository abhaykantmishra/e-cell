  export function GridBackground({ children, className = "", isDark = true }) {
    return (
      <div className={`bg-grid ${isDark ? 'bg-grid-dark' : ''} ${className}`}>
        {children}
      </div>
    )
}  