import { useEffect, useState } from 'react'
import { useGitHubStats } from '../hooks/useGitHubStats'

function StatItem({ value, label, suffix = '', delay, animate = true }) {
  const [displayValue, setDisplayValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!isVisible) return
    if (!animate) {
      setDisplayValue(value)
      return
    }
    if (value === 0) return

    const duration = 1500
    const steps = 30
    const increment = value / steps
    let current = 0

    const interval = setInterval(() => {
      current += increment
      if (current >= value) {
        setDisplayValue(value)
        clearInterval(interval)
      } else {
        setDisplayValue(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(interval)
  }, [value, isVisible, animate])

  return (
    <div className={`stat-item ${isVisible ? 'stat-visible' : 'stat-hidden'}`}>
      <div className="stat-value">{displayValue}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

function GitHubStats() {
  const { stats, loading, error } = useGitHubStats()

  if (loading) {
    return (
      <div className="github-stats">
        <p className="stats-label">dev_activity</p>
        <div className="stats-row">
          <div className="stat-skeleton-item">
            <div className="stat-skeleton-value" />
            <div className="stat-skeleton-label" />
          </div>
          <div className="stat-skeleton-item">
            <div className="stat-skeleton-value" />
            <div className="stat-skeleton-label" />
          </div>
          <div className="stat-skeleton-item">
            <div className="stat-skeleton-value" />
            <div className="stat-skeleton-label" />
          </div>
        </div>
      </div>
    )
  }

  if (error || !stats) return null

  return (
    <div className="github-stats">
      <p className="stats-label">dev_activity</p>
      <div className="stats-row">
        {stats.activeSince && (
          <StatItem value={stats.activeSince} label="Active Since" delay={0} animate={false} />
        )}
        <StatItem value={stats.publicRepos} label="Public Repos" delay={150} />
        <StatItem value={stats.totalCommits} label="Total Commits" suffix="+" delay={300} />
      </div>
    </div>
  )
}

export default GitHubStats
