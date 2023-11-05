"use client";

import { InfinitySpin } from "react-loader-spinner";

export default function LoadingUI() {
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col space-y-3">
        <div>
            <InfinitySpin 
                width='200'
                color="#1C1917"
            />
        </div>
        <p className="text-stone-700 relative right-1 font-semibold">please wait</p>
    </main>
  )
}
