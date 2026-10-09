'use client';

import Link from 'next/link';

export default function Navbar() {

    return (
        <nav className='navbar'>
            <div className='logo'>BLADATELJÉN</div>
            <div className='links'>
                <Link href='/'>Startsida</Link>
                <Link href='/sortiment'>Sortiment</Link>
                <Link href='/ateljen'>Ateljén</Link>
                <Link href='/generator'>AI-växtgenerator</Link>
                <Link href='/kontakt'>Kontakt</Link>
            </div>

<style jsx>{`
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2.5rem 4rem;
    }

    .logo {
        font-weight: 500;
        letter-spacing: 3px;
        font-size: 1.1rem;
        color: var(--charcoal);
    }

    .links {
        display: flex;
        gap: 2.5rem;
        font-size: 0.9rem;
    }

    .links :global(a) {
        text-decoration: none;
        color: var(--charcoal);
        opacity: 0.8;
        transition: opacity 0.2s ease;
    }

    .links :global(a):hover {
        opacity: 1;
    }
`}</style>

</nav>
    )
}