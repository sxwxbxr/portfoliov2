import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function NavBar() {
  return (
    <nav className="bg-white/80 dark:bg-gray-800/80 backdrop-blur sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        <span className="font-bold">Portfolio</span>
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-blue-500">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
