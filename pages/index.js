import Head from "next/head";
import LandingBanner from "../components/landingBanner";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Your way into financial independancy - no matter where you live or
          what you have been doing until now.
        </title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <meta
          name="description"
          content="Let me take you for a ride into the newest technology and all the possibilities it gives us to earn our money independant from everything."
        />
        <link rel="icon" href="/favicon.ico" />
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-160662945-3"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: ` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'UA-160662945-3');`,
          }}
        />
      </Head>
      <LandingBanner />
    </>
  );
}
