import React from "react";

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#fff9ed] via-[#fff5e1] to-[#f9e5c3] flex items-center justify-center z-50 overflow-hidden">
      <div className="flex flex-col items-center gap-8 relative z-10">
        {/* Animated Oven */}
        <div className="relative">
          <div className="w-32 h-32 bg-gradient-to-br from-amber-700 to-amber-900 rounded-2xl shadow-2xl relative overflow-hidden">
            {/* Oven Door Window with Glow Animation */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-orange-400 to-yellow-300 rounded-xl"
              style={{
                animation: "glow 2s ease-in-out infinite",
              }}
            >
              {/* Baking indicator */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-yellow-200 rounded-full opacity-60 animate-ping"></div>
              </div>
            </div>

            {/* Oven Handle */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-2 bg-gray-700 rounded-full"></div>
          </div>

          {/* Heat Waves */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex gap-2">
            <div
              className="w-1 h-8 bg-orange-400 rounded-full opacity-70"
              style={{
                animation: "wave 1.5s ease-in-out infinite",
              }}
            ></div>
            <div
              className="w-1 h-10 bg-orange-500 rounded-full opacity-70"
              style={{
                animation: "wave 1.5s ease-in-out infinite 0.2s",
              }}
            ></div>
            <div
              className="w-1 h-8 bg-orange-400 rounded-full opacity-70"
              style={{
                animation: "wave 1.5s ease-in-out infinite 0.4s",
              }}
            ></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <h2
            className="text-3xl font-bold text-amber-900 mb-2"
            style={{
              animation: "fadeIn 1s ease-out",
            }}
          >
            Baking Something Special...
          </h2>
          <p
            className="text-lg text-amber-700"
            style={{
              animation: "fadeIn 1s ease-out 0.3s both",
            }}
          >
            Please wait while we prepare your treats
          </p>
        </div>

        {/* Animated Dots */}
        <div className="flex gap-3">
          <div className="w-4 h-4 bg-amber-600 rounded-full animate-bounce"></div>
          <div
            className="w-4 h-4 bg-amber-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-4 h-4 bg-amber-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>

      {/* Floating Pastries */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 text-4xl opacity-30"
          style={{
            animation: "float1 8s ease-in-out infinite",
          }}
        >
          🥐
        </div>
        <div
          className="absolute top-40 right-20 text-3xl opacity-30"
          style={{
            animation: "float2 10s ease-in-out infinite",
          }}
        >
          🍰
        </div>
        <div
          className="absolute bottom-32 left-20 text-3xl opacity-30"
          style={{
            animation: "float3 7s ease-in-out infinite",
          }}
        >
          🧁
        </div>
        <div
          className="absolute bottom-20 right-32 text-4xl opacity-30"
          style={{
            animation: "float4 9s ease-in-out infinite",
          }}
        >
          🍪
        </div>
        <div
          className="absolute top-1/3 right-10 text-3xl opacity-30"
          style={{
            animation: "float5 6s ease-in-out infinite",
          }}
        >
          🥖
        </div>
        <div
          className="absolute top-2/3 left-32 text-3xl opacity-30"
          style={{
            animation: "float6 8s ease-in-out infinite",
          }}
        >
          🎂
        </div>
      </div>

      {/* Global Styles for Animations */}
      <style>{`
        @keyframes glow {
          0%, 100% {
            opacity: 0.8;
            box-shadow: 0 0 20px rgba(251, 146, 60, 0.5);
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 40px rgba(251, 146, 60, 0.8);
          }
        }

        @keyframes wave {
          0%, 100% {
            transform: translateY(0) scaleY(1);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-15px) scaleY(1.4);
            opacity: 0.3;
          }
        }

        @keyframes float1 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(10px, -20px) rotate(5deg);
          }
          50% {
            transform: translate(-10px, -40px) rotate(-5deg);
          }
          75% {
            transform: translate(5px, -20px) rotate(3deg);
          }
        }

        @keyframes float2 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(-15px, 20px) rotate(-5deg);
          }
          50% {
            transform: translate(15px, 40px) rotate(5deg);
          }
          75% {
            transform: translate(-5px, 20px) rotate(-3deg);
          }
        }

        @keyframes float3 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(20px, -15px) rotate(7deg);
          }
          66% {
            transform: translate(-20px, -30px) rotate(-7deg);
          }
        }

        @keyframes float4 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(-20px, 15px) rotate(-6deg);
          }
          66% {
            transform: translate(20px, 30px) rotate(6deg);
          }
        }

        @keyframes float5 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(10px, 25px) rotate(4deg);
          }
        }

        @keyframes float6 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-15px, -25px) rotate(-4deg);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingPage;
