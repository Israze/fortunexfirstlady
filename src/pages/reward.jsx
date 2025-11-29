import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { usePlan } from "../context/PlanContext";
import ToastNotification from '../components/ToastNotification';


// src/pages/Rewards.jsx
export default function Rewards() {
	const calculateTimeLeft = () => {
		const difference = +new Date("2025-12-31") - +new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearTimeout(timer);
	});

	const timerComponents = [];

	Object.keys(timeLeft).forEach((interval) => {
		if (!timeLeft[interval]) {
			return;
		}

		timerComponents.push(
			<span key={interval}>
				{timeLeft[interval]} {interval}{" "}
			</span>
		);
	});

	const navigate = useNavigate();
	const { setPlan, setPrice } = usePlan();

	const handlePlanSelection = (plan, price) => {
		setPlan(plan);
		setPrice(price);
		navigate("/register");
	};

	return (
		<div className="min-h-screen w-full bg-gradient-to-b from-[#8f211f] to-[#5e1514] text-white pb-20 pt-20">
			{/* Navbar */}
			<Header page="rewards" />
			<ToastNotification />
			

			{/* Page Title */}
			<h1 className="text-center text-4xl font-extrabold mt-4">
				Reward Structure
			</h1>
			<div className="flex flex-wrap gap-8 px-4">
				{/* STARTER PLAN CARD */}
				<div className="mt-10 w-full  rounded-2xl bg-gradient-to-b from-[#5a0f0f] to-[#3b0b0b] shadow-xl border border-yellow-700/30">
					<div className="h-2 w-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-t-xl mb-4"></div>
					<div className=" max-w-[420px] rounded-2xl bg-gradient-to-b from-[#5a0f0f] to-[#3b0b0b] p-5 shadow-xl border border-yellow-700/30">
						<h2 className="text-center text-2xl font-extrabold tracking-wide">
						STARTER PLAN
					</h2>

					{/* Price */}
					<div className="text-center mt-3">
						<p className="line-through opacity-60 text-lg">₦14,500</p>
						<p className="text-4xl font-extrabold text-yellow-400">₦7,500</p>
					</div>

					{/* Timer Badge */}
					<div className="bg-red-500 text-white text-center px-4 py-2 rounded-full mt-4 font-semibold shadow-lg animate-glow">
						Discount Ends in: {timeLeft.hours}:{timeLeft.minutes}:
						{timeLeft.seconds}
					</div>

					{/* Earnings List */}
					<div className="mt-6 space-y-3">
						{[
							"$3.5 Hourly Earnings",
							"$2.5 Hourly Earnings",
							"$2 Hourly Earnings",
							"$3 Hourly Earnings",
							"$1 Hourly Earnings",
							"$0.5 per Comedy Video View",
						].map((item) => (
							<div
								key={item}
								className="flex items-center bg-[#4a0e0e]/70 px-4 py-3 rounded-xl shadow-md border border-yellow-700/20"
							>
								<span className="text-blue-300 text-xl mr-3">💎</span>
								<p>{item}</p>
							</div>
						))}
					</div>

					{/* Withdrawal Info */}
					<div className="bg-black/30 mt-8 p-5 rounded-xl border border-yellow-700/20 text-center">
						<p className="font-semibold text-lg">Withdrawal Window:</p>
						<p className="opacity-90 mt-1">Saturday's 9AM - 6PM</p>

						<p className="font-semibold text-lg mt-3">Minimum Withdrawal:</p>
						<p className="opacity-90 mt-1">₦5,000</p>
					</div>

					{/* Button */}
					<button
						onClick={() => handlePlanSelection("FortuneX Starter", "7,500")}
						className="w-full mt-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 rounded-full shadow-lg hover:scale-[1.02] transition"
					>
						Get Starter Plan
					</button>
					</div>
					{/* Top Bar */}
				
				</div>

				{/* PLUS PLAN */}
				<div className="mt-12 w-full rounded-2xl bg-gradient-to-b from-[#5a0f0f] to-[#3b0b0b]  shadow-xl border border-yellow-700/30">
					{/* Top Bar */}
					<div className="h-2 w-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-t-xl mb-4"></div>
					<div className="max-w-[420px] rounded-2xl bg-gradient-to-b from-[#5a0f0f] to-[#3b0b0b] p-5 shadow-xl border border-yellow-700/30">
						{/* Title */}
					<div className="flex justify-between items-center">
						<h2 className="text-2xl font-extrabold tracking-wide">PLUS PLAN</h2>
						<span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-semibold">
							BEST VALUE
						</span>
					</div>

					{/* Price */}
					<div className="text-center mt-3">
						<p className="line-through opacity-60 text-lg">₦28,000</p>
						<p className="text-4xl font-extrabold text-yellow-400">₦14,500</p>
					</div>

					{/* Timer Badge */}
					<div className="bg-red-500 text-white text-center px-4 py-2 rounded-full mt-4 font-semibold shadow-lg animate-glow">
						Discount Ends in: {timeLeft.hours}:{timeLeft.minutes}:
						{timeLeft.seconds}
					</div>
					{/* Earnings List */}
					<div className="mt-6 space-y-3">
						{[
							"$7 Hourly Earnings",
							"$5 Hourly Earnings",
							"$4.5 Hourly Earnings",
							"$6 Hourly Earnings",
							"$2 Hourly Earnings",
							"$1 per Comedy Video View",
						].map((item) => (
							<div
								key={item}
								className="flex items-center bg-[#4a0e0e]/70 px-4 py-3 rounded-xl shadow-md border border-yellow-700/20"
							>
								<span className="text-blue-300 text-xl mr-3">💎</span>
								<p>{item}</p>
							</div>
						))}
					</div>

					{/* Withdrawal Info */}
					<div className="bg-black/30 mt-8 p-5 rounded-xl border border-yellow-700/20 text-center">
						<p className="text-yellow-400 text-lg font-extrabold">
							★ DAILY WITHDRAWAL ★
						</p>

						<p className="font-semibold text-lg mt-3">Withdrawal Window:</p>
						<p className="opacity-90 mt-1">Daily 9AM - 6PM</p>

						<p className="font-semibold text-lg mt-3">Minimum Withdrawal:</p>
						<p className="opacity-90 mt-1">₦5,000</p>
					</div>

					{/* Button */}
					<button
						onClick={() => handlePlanSelection("FortuneX Plus", "14,500")}
						className="w-full mt-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 rounded-full shadow-lg hover:scale-[1.02] transition"
					>
						Get Plus Plan
					</button>
					</div>

					
				</div>
			</div>
			
			<Footer className=""/>
		</div>
	);
}
