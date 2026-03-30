import { useEffect, useState } from 'react'

const GITHUB_USERNAME = 'AdityaMohite47'

export function useGitHubStats() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchStats() {
      try {
        const userResponse = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`
        )
        if (!userResponse.ok) throw new Error('Failed to fetch user data')
        const userData = await userResponse.json()

        const reposResponse = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=created&direction=asc`
        )
        if (!reposResponse.ok) throw new Error('Failed to fetch repos')
        const repos = await reposResponse.json()

        const ownRepos = repos.filter((repo) => !repo.fork)

        let activeSinceYear = new Date().getFullYear()
        if (ownRepos.length > 0) {
          activeSinceYear = new Date(ownRepos[0].created_at).getFullYear()
        }

        const estimatedCommits = ownRepos.reduce((total, repo) => {
          return total + Math.max(10, Math.min(repo.size / 10, 100))
        }, 0)

        setStats({
          publicRepos: userData.public_repos,
          totalCommits: Math.floor(estimatedCommits / 10) * 10,
          activeSince: activeSinceYear,
        })
      } catch (err) {
        console.error('Error fetching GitHub stats:', err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  return { stats, loading, error }
}
