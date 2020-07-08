import Link from 'next/link'
const Header = () => (
  <div className="header">
    <Link href="/">
      <div>Index Page</div>
    </Link>
    <Link href="/about">
        <div>About Page</div>
      </Link>
    <Link href="/contect">
        <div>Contect Page</div>
      </Link>
  </div>
)

export default Header