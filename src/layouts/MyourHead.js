import Head from "next/head";
const MyourHead = () => {
  return (
    <Head>
      <title>Usama Shaukat - Web Developer Portfolio</title>
      
      {/* Essential Meta Tags */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Usama Shaukat - Full Stack Web Developer specializing in React.js, Next.js, React Native, and Node.js. Based in Islamabad, Pakistan. Available for freelance projects." />
      <meta name="keywords" content="web developer, react developer, next.js, react native, node.js, full stack developer, pakistan, islamabad, freelance" />
      <meta name="author" content="Usama Shaukat" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph Meta Tags for Social Media */}
      <meta property="og:title" content="Usama Shaukat - Web Developer Portfolio" />
      <meta property="og:description" content="Full Stack Web Developer specializing in React.js, Next.js, React Native, and Node.js. Based in Islamabad, Pakistan." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://usama-portfoli.netlify.app/" />
      <meta property="og:image" content="https://usama-portfoli.netlify.app/images/link-preview.jpg" />
      <meta property="og:site_name" content="Usama Shaukat Portfolio" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Usama Shaukat - Web Developer Portfolio" />
      <meta name="twitter:description" content="Full Stack Web Developer specializing in React.js, Next.js, React Native, and Node.js." />
      <meta name="twitter:image" content="https://usama-portfoli.netlify.app/images/logo.png" />
      
      {/* Favicon */}
      <link rel="icon" href="/images/logo.png" />
      <link rel="apple-touch-icon" href="/images/logo.png" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://usama-portfoli.netlify.app/" />

      <link
        href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Mr+Dafoe&display=swap"
        rel="stylesheet"
      />
      {/* Styles */}
      <link rel="stylesheet" href="css/basic.css" />
      <link rel="stylesheet" href="css/layout.css" />
      <link rel="stylesheet" href="css/magnific-popup.css" />
      <link rel="stylesheet" href="css/animate.css" />
      <link rel="stylesheet" href="css/jarallax.css" />
      <link rel="stylesheet" href="css/owl.carousel.css" />
      <link rel="stylesheet" href="css/swiper.css" />
      <link rel="stylesheet" href="css/fontawesome.css" />{" "}
      {/* <link rel="shortcut icon" href="images/favicons/favicon.ico" /> */}
    </Head>
  );
};
export default MyourHead;
