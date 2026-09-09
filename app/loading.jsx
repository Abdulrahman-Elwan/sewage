'use client'

export default function Loading() {
    return (
        <div
            dir="rtl"
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
            <div className="flex flex-col items-center">

                {/* Brand Mark */}
                <div className="relative flex h-20 w-20 items-center justify-center">
                    {/* Outer Ring */}
                    <div className="absolute inset-0 rounded-full border border-slate-200" />

                    {/* Animated Ring */}
                    <div className="absolute inset-1 animate-spin rounded-full border-2 border-transparent border-t-orange-500" />

                    {/* Water Drop */}
                    <div className="relative flex h-12 w-12 items-center justify-center">
                        <svg
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-orange-500"
                            aria-hidden="true"
                        >
                            <path
                                d="M24 4C24 4 11 18.2 11 27.8C11 35.2 16.8 41 24 41C31.2 41 37 35.2 37 27.8C37 18.2 24 4 24 4Z"
                                fill="currentColor"
                                fillOpacity="0.12"
                            />

                            <path
                                d="M24 4C24 4 11 18.2 11 27.8C11 35.2 16.8 41 24 41C31.2 41 37 35.2 37 27.8C37 18.2 24 4 24 4Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinejoin="round"
                            />

                            <path
                                d="M17 29C19.5 26.5 22 32 24.5 29.5C27 27 29.5 32.5 32 29.5"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                </div>

                {/* Brand */}
                <div className="mt-5 text-center">
                    <h1 className="text-base font-extrabold tracking-tight text-slate-800">
                        ثقتكم هدفنا
                    </h1>

                    <p className="mt-1 text-xs text-slate-400">
                        حلول الصرف الصحي باحترافية
                    </p>
                </div>

                {/* Progress */}
                <div
                    className="mt-5 h-1 w-32 overflow-hidden rounded-full bg-slate-100"
                    aria-hidden="true"
                >
                    <div className="h-full w-1/2 animate-[loading_1.4s_ease-in-out_infinite] rounded-full bg-orange-500" />
                </div>
            </div>

            <style jsx>{`
        @keyframes loading {
          0% {
            transform: translateX(200%);
          }

          50% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(-200%);
          }
        }
      `}</style>
        </div>
    );
}
