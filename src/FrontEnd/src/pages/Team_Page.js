import React from 'react'
import Hero from '../Components/UI/Hero/Hero'
import Team from '../Components/Bottom/Team'
import { useEffect } from "react";

function TeamPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero
        title="Team"
        description="We have experienced team to assist you for asset buying and selling."
        page="Team"
      />
      <Team/>
      </>
  )
}

export default TeamPage