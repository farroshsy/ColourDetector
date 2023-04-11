import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { TwitterTweetEmbed } from "react-twitter-embed";
const Home: NextPage = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col max-w-screen-md mx-auto">
        <div className="w-full flex flex-row h-20 items-center justify-between p-4 md:p-0">
        </div>
        <div className="">
          <div className="text-3xl font-semibold pt-20 mb-4 text-center md:text-5xl p-4">
            Generating color code captured with Webcam using AI
          </div>
          <div className="mb-6 text-center">
            <Link href="/app">
              <button className="py-4 px-6 bg-white text-black font-semibold rounded-full">
                Capture Color
              </button>
            </Link>
          </div>
          <div className="flex flex-col items-center p-4">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
