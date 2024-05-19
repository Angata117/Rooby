import Benefits from './Benefits/Benefits';
import Hero from './Hero/Hero';
import Information from './Information/Information';
import Integrations from './Integrations/Integrations';
import News from './News/News';
import Results from './Results/Results';
import Feedback from './Feedback/Feedback';
import Banner from '/src/app/components/ui/Banner';
const HomePage = () => {
  return (
    <section>
      <Hero></Hero>
      <Benefits></Benefits>
      <Information></Information>
      <Integrations></Integrations>
      <News></News>
      <Results></Results>
      <Feedback></Feedback>
      <Banner></Banner>
    </section>

  )
}

export default HomePage