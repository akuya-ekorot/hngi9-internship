import Head from "next/head";
import Footer from "../components/Footer";
import SocialSection from "../components/SocialSection";

import ProfileSection from "../components/ProfileSection";
import LinkSection from "../components/LinkSection";

const Home = () => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
    </Head>

    <div className="flex flex-col">
      <section className="flex flex-col grow px-[112px] py-[64px]">
        <main className="py-[32px]">
          <div className="content flex flex-col gap-[56px]">
            <ProfileSection />
            <LinkSection />
          </div>
        </main>
        <SocialSection />
      </section>
      <Footer />
    </div>
  </>
);

export default Home;
