import Head from "next/head";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>!404-Det finns inget här</title>
      </Head>
      <section id="error_404" className="w-full h-screen flex items-center justify-start flex-col">
        <div className="flex items-center justify-center flex-col gap-4 mt-16">
          <h2 className="3xl:text-4xl md:text-2xl text-lg text-black font-medium">!404-Det finns inget här</h2>
          <Link href="/" className="3xl:text-2xl text-lg text-black">Tillbaka Till Hem</Link>
        </div>
      </section>
    </>
  );
};

ErrorPage.layout = "L1";
export default ErrorPage;
