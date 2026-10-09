'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <div className="container-studio">
        <section className="hero fade-in">
          <Image 
            className="hero-image" 
            src="/studio-hero.jpg" 
            width={1600} 
            height={1024} 
            alt="En solbelyst monstera i en ljus keramikkruka i ateljén" 
            priority 
          />
          <div className="hero-content">
            <div className="frosted-background">
              <div className="eyebrow">En växtateljé i Göteborg</div>
              <h1>Lite grönare.<br />Lite mer <span>liv.</span></h1>
              <p className="hero-copy">
                Liv till dina rum, handplockat med omsorg.<br />
                Växter med karaktär – för hem som känns.
              </p>
              <Link href="/sortiment" className="studio-button">
                Utforska våra växter
              </Link>
            </div>
          </div>
          <div className="hero-caption">
            <span>🌿</span> Handplockat. Inte massproducerat.
          </div>
        </section>

        <div className="intro-line">
          <span><span>🌱</span> Utvalda med omsorg</span>
          <span><span>🤍</span> Personlighet i varje blad</span>
          <span><span>🌿</span> Rotade i Göteborg</span>
        </div>
      </div>
    </>
  );
}