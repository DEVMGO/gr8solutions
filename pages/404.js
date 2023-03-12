import Head from "next/head";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>!404-Det finns inget här</title>
      </Head>
      <section id="error_404">
        <div className="error_bg">
          <h2>!404-Det finns inget här</h2>
          <Link href="/">Tillbaka Till Hem</Link>
        </div>
      </section>
    </>
  );
};

ErrorPage.layout = "L1";
export default ErrorPage;
