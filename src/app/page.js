'use client'
import React from 'react';
import HeaderSection from './components/Header';
import FooterSection from './components/Footer'
import SinglePageSections from './components/SinglePageSections';
// import ReactLogoAnimation from './components/ReactLogo'
import LinksLayout from './components/Links';

export default function Home() {
  return (
    <div className="">
        <HeaderSection />
      <main className="relative">
        {/* <LinksLayout /> */}
        <SinglePageSections />
        {/* <ReactLogoAnimation /> */}
      </main>
        <FooterSection />
    </div>
  );
}
