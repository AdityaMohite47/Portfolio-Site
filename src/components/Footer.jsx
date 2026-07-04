function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <p>Thanks for reading this far — feel free to reach out anytime.</p>
      <p>© {year} Aditya Mohite</p>
    </footer>
  )
}

export default Footer
