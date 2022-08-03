import CardSection from '../components/CardSection'
import Hero from '../components/Hero'
import Section from '../components/Section'
import Testimonial from '../components/Testimonial'
import { obj1, obj2 } from '../components/fragments/secObj'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Section {...obj1} />
      <CardSection />
      <Testimonial />
      <Section {...obj2} />
      <Subscribe />
      <Footer />
    </>
  )
}

export default HomePage