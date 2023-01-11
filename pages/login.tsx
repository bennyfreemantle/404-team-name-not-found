import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import LoginButton from "../components/LoginButton/LoginButton";


export default function LoginPage() {
  return (
    <div className="bg-slate-800">
      <div className="flex flex-col container mx-auto my-0 p-3">
        <Head>
          <title>CineMate</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
      </div>
      <div className="flex flex-col min-h-screen container mx-auto my-0 p-3">
        <main className="flex-1 text-amber-50 justify-center">
          <h1 className="">Log in to your account</h1>
          <form className="flex flex-col gap-4">
            <fieldset className="flex flex-col gap-4">
            <label htmlFor="email">
              Email
              </label>
              <input id="email" name="email" type="email"></input>
              </fieldset>
             <fieldset className="flex flex-col gap-4">
            <label htmlFor="password">
              Password
              </label>
              <input id="password" name="password" type="password"></input>
              </fieldset> 
            <LoginButton></LoginButton>
          </form>
        </main>
        <Footer />
      </div>
    </div>
  );
}

//text sizing - h1 in larger font
//display components in vertical stack rather than side by side ✅
//position on the page (central)
//colour of input text
//sign in button in header - should not appear on this page