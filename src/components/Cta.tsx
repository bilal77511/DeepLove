import React from "react";
import { Container } from "@/components/Container";
import { saveEmail } from "../_actions/postAction";
import { useState } from "react";
import Lottie from "lottie-react";
import waitlistAnimation from "../lotties/waitlist_animation.json";


export const Cta = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleGetStarted = async (event: React.MouseEvent<HTMLButtonElement>) => {

    console.log("handleGetStarted");
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("email", email);

    console.log("EMail", email);

    const result = await saveEmail(formData);

    if (result.error) {
      setMessage("Error: " + result.error);
    } else {
      setMessage("You're signed up! 🎉");
      setEmail(""); // Clear input field
    }

    setLoading(false);
  };
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-pink-400 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
      <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Ready to get a girlfriend?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Deeplove AI is ready to go, what about you?
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              className="px-6 py-3 text-lg font-medium text-white bg-pink-500 hover:bg-pink-600 rounded-md"
              onClick={handleGetStarted}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Get Started"}
            </button>
            {message && <p className="text-sm text-gray-600">{message}</p>}
            <Lottie
              animationData={waitlistAnimation}
              loop={true} // Set to false if you want it to play only once
              className="w-96 md:w-1/5 object-cover"
            />
          </div>

        </div>
      </div>
    </Container>
  );
};
