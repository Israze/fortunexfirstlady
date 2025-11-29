import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/img3.jpeg';
import image4 from '../assets/img4.jpeg';
import image5 from '../assets/img5.jpeg';
import image6 from '../assets/img6.jpeg';
import image7 from '../assets/img7.jpeg';
import image8 from '../assets/img8.jpeg';
import image9 from '../assets/img9.jpeg';
import video from '../assets/intro.mp4';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ToastNotification from '../components/ToastNotification';
import { Link } from "react-router-dom";



export default function Home() {
  return (
    <div className="bg-[#8f211f] min-h-screen flex flex-col items-center justify-center p-4 font-sans pt-20">
      <Header page="home" />
      <ToastNotification />
      <div className="w-full max-w-md">
        <div className="bg-gradient-to-r from-[#370807] to-[#6e0000] rounded-lg overflow-hidden shadow-lg mb-4 p-2 border border-white/40">
          <video src={video} className="w-full rounded-lg h-130 object-cover" autoPlay muted loop playsInline controls></video>
          <div className="mt-2 text-white text-center">
            <Link to='/rewards'>
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-xl py-2 px-4 mt-3 rounded-full">
              Join us now 🔥
            </button>
            </Link>
            
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#370807] to-[#6e0000] rounded-lg overflow-hidden shadow-lg mb-4 p-4 border border-white/40">
          <img src={image1} alt="Automated Time Earnings" className="w-full rounded-lg" />
          <div className="mt-2 text-white text-center">
            <h2 className="text-2xl font-bold mb-2">
              🔥AUTOMATED TIME EARNINGS IS HERE!💰
            </h2>
            <p className="text-lg mb-2">
              Let's be real — Time is Money, but most people just spend theirs. On
              FortuneX, you earn from it. Straight up. 🚀
            </p>
            <p className="text-lg mb-2">
              Spend 15 mins on the site — boom, N3,000. 30 mins? N6,000. 1 full hour?
              That's N12,000 in your pocket.
            </p>
            <p className="text-lg mb-4">This isn't hustle. This is smart living.</p>
            <Link to='/rewards'>
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-xl py-2 px-4 rounded-full">
              Join us now 🔥
            </button>
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#370807] to-[#6e0000] rounded-lg overflow-hidden shadow-lg mb-4 p-4 border border-white/20">
          <img src={image2} alt="Automated Time Earnings" className="w-full rounded-lg" />
          <div className="mt-2 text-white text-center">
            <h2 className="text-2xl font-bold mb-2">
              🔥FortuneX Monetization🔥
            </h2>
            <p className="text-lg mb-2">
              We just flipped the script — your activity now pays. Every click, every post,
              every move online counts for real. ⚡
            </p>
            <p className="text-lg mb-2">
              No stress. No delay. Just real-time rewards for staying active.
            </p>
            <p className="text-lg mb-4">The system reads your consistency, tracks your energy.</p>
            <Link to='/rewards'>
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-xl py-2 px-4 rounded-full">
              Join us now 🔥
            </button>
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#370807] to-[#6e0000] rounded-lg overflow-hidden shadow-lg mb-4 p-4 border border-white/20">
          <img src={image3} alt="Automated Time Earnings" className="w-full rounded-lg" />
          <div className="mt-2 text-white text-center">
            <h2 className="text-2xl font-bold mb-2">
              🔥FortuneX - Fortune Box — Your daily click for instant rewards! ⚡
            </h2>
            <p className="text-lg mb-2">
              Every day is a new chance to win. Tap once — unlock cashbacks, bonuses, and surprises that fuel your hustle. 💰
            </p>
            <p className="text-lg mb-2">
              No stress. No delay. Just real value packed in one click. The more you tap, the more you earn. It's that simple! 🚀
            </p>
            <Link to='/rewards'>
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-xl py-2 px-4 rounded-full">
              Join us now 🔥
            </button>
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#370807] to-[#6e0000] rounded-lg overflow-hidden shadow-lg mb-4 p-4 border border-white/20">
          <img src={image4} alt="Automated Time Earnings" className="w-full rounded-lg" />
          <div className="mt-2 text-white text-center">
            <h2 className="text-2xl font-bold mb-2">
              🎓 FortuneX Free Digital Course
            </h2>
            <p className="text-lg mb-2">
             Learn skills that don’t fade — they pay. 💰 We're giving full access, 100% free.
            </p>
            <p className="text-lg mb-2">
              ⚡ Social Media Marketing ⚡ Meta & TikTok Ads ⚡ Forex Trading ⚡ Crypto Trading ⚡ Affiliate Marketing
            </p>
            <Link to='/rewards'>
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-xl py-2 px-4 rounded-full">
              Join us now 🔥
            </button>
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#370807] to-[#6e0000] rounded-lg overflow-hidden shadow-lg mb-4 p-4 border border-white/20">
          <img src={image5} alt="Automated Time Earnings" className="w-full rounded-lg" />
          <div className="mt-2 text-white text-center">
            <h2 className="text-2xl font-bold mb-2">
              ⚡ Your Social Streak = Your Payday on FortuneX!
            </h2>
            <p className="text-lg mb-2">
             This ain't ordinary scrolling — every move pays now. 💰 Every like. Every share. Every post. That's money in motion.
            </p>
            <p className="text-lg mb-2">
              📌 At FortuneX, we turned your daily social energy into real income flow. 🚀
            </p>
            <Link to='/rewards'>
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-xl py-2 px-4 rounded-full">
              Join us now 🔥
            </button>
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#370807] to-[#6e0000] rounded-lg overflow-hidden shadow-lg mb-4 p-4 border border-white/20">
          <img src={image6} alt="Automated Time Earnings" className="w-full rounded-lg" />
          <div className="mt-2 text-white text-center">
            <h2 className="text-2xl font-bold mb-2">
              💥 FortuneX + TikTok = Straight Cash Flow 💰
            </h2>
            <p className="text-lg mb-2">
             Your content shouldn't just trend — it should pay. Every post, every live, every vibe you drop now counts in digits. ⚙️
            </p>
            <p className="text-lg mb-2">
              Go live. Create. Stack up. FortuneX turns your energy into real rewards — no cap, no waiting. 🔥
            </p>
            <Link to='/rewards'>
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-xl py-2 px-4 rounded-full">
              Join us now 🔥
            </button>
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#370807] to-[#6e0000] rounded-lg overflow-hidden shadow-lg mb-4 p-4 border border-white/40">
          <img src={image7} alt="Automated Time Earnings" className="w-full rounded-lg" />
          <div className="mt-2 text-white text-center">
            <h2 className="text-2xl font-bold mb-2">
              🎧 Turn Up the Volume — It's Payday Season! 💰
            </h2>
            <p className="text-lg mb-2">
             Your playlist just became your payslip. Every beat you vibe to, every rating you drop — FortuneX turns it into real cash. ⚙️
            </p>
            <p className="text-lg mb-2">
             This isn't just listening — it's earning in rhythm. 🎵💸 The earlier you rate, the faster you stack. 💰
            </p>
            <p className="text-lg mb-4">🎤 Because on FortuneX, silence doesn't pay — only</p>
            <Link to='/rewards'>
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-xl py-2 px-4 rounded-full">
              Join us now 🔥
            </button>
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#370807] to-[#6e0000] rounded-lg overflow-hidden shadow-lg mb-4 p-4 border border-white/40">
          <img src={image8} alt="Automated Time Earnings" className="w-full rounded-lg" />
          <div className="mt-2 text-white text-center">
            <h2 className="text-2xl font-bold mb-2">
              🎤 You’ve Got Ideas? Let FortuneX Pay for Them. 💰
            </h2>
            <p className="text-lg mb-2">
             You don’t need to overthink — just type, tap, and cash out. 💰 Every line you create, every lyric you drop = instant rewards.
            </p>
            <p className="text-lg mb-2">
             No pen. No stress. Just you, your mind, and money waiting at the finish line. 🧠💵💸
            </p>
            <Link to='/rewards'>
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-xl py-2 px-4 rounded-full">
              Join us now 🔥
            </button>
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#370807] to-[#6e0000] rounded-lg overflow-hidden shadow-lg mb-4 p-4 border border-white/40">
          <img src={image9} alt="Automated Time Earnings" className="w-full rounded-lg" />
          <div className="mt-2 text-white text-center">
            <h2 className="text-2xl font-bold mb-2">
              💬 Chat the World. Earn Real Money. 🌍💰
            </h2>
            <p className="text-lg mb-2">
             From Lagos to London, Accra to New York — your keyboard is now your passport.
            </p>
            <p className="text-lg mb-2">
            Every emoji, every gist, every reply isn't just talk — it's transaction. ⚙️
            </p>
            <p className="text-lg mb-4">
            On FortuneX, your words don’t fade; they multiply in value.
            </p>
            <Link to='/rewards'>
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-xl py-2 px-4 rounded-full">
              Join us now 🔥
            </button>
            </Link>
          </div>
        </div>

        

        
      </div>
      <Footer />
    </div>
  );
}
