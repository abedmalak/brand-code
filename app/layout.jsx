import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export const metadata = {
    title: "Brandcode",
    description: "Media Agency",
  };
  
  const RootLayout = ({ children }) => (
    <html lang='en'>
      <body>
          <div className='main'> {/**
           * all the gradient is wrapped around main
           */}
            <div className='gradient' /> {/* changes the background*/}
          </div>
  
          <main className='app'> {/*** This is where the app is, the nav stays on top and the footer under the children*/}
            <Navbar />
            {children}
            <Footer />
          </main>

      </body>
    </html>
  );
  
  export default RootLayout;
  