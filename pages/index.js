
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import ContactUs from "../components/ContactUs";
import AboutUs from "../components/AboutUs";

export default function Home() {
  return (
    <>
      <SeoHead title='Affotax Bookkeeping' />
      <Layout>
        <Hero />
        <Pricing />
        {/* <Feature /> */}
        <AboutUs />
        <ContactUs />
      </Layout>
    </>
  );
}
