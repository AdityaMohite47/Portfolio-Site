const skills = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'C++']
  },
  {
    category: 'Frontend',
    items: ['React (Beginner)']
  },
  {
    category: 'Backend',
    items: ['Django', 'FastAPI', 'REST API Development']
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'PostgreSQL']
  },
  {
    category: 'Machine Learning',
    items: ['Scikit-learn', 'Pandas', 'NumPy']
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Docker']
  },
]

function Skills() {
  return (
    <section id="skills">
      <h2><span>#</span> skills</h2>

      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.category} className="skill-group">
            <h3>{group.category}</h3>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span key={item} className="tag-pill">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
