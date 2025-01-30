import React from "react";
import { Activity, Zap, BarChart3 } from "lucide-react";

export default function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid-background"></div>
      </div>

      {/* Power Towers */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="power-towers">
          <div className="power-tower tower1">
            <svg viewBox="0 0 100 200" className="tower-svg">
              <path
                d="M40 200 L60 200 L60 50 L90 20 L80 20 L50 45 L20 20 L10 20 L40 50 Z"
                fill="currentColor"
              />
              <path
                d="M30 100 L70 100 M25 150 L75 150"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
            </svg>
          </div>
          <div className="power-tower tower2">
            <svg viewBox="0 0 100 200" className="tower-svg">
              <path
                d="M40 200 L60 200 L60 50 L90 20 L80 20 L50 45 L20 20 L10 20 L40 50 Z"
                fill="currentColor"
              />
              <path
                d="M30 100 L70 100 M25 150 L75 150"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
            </svg>
          </div>
          <div className="power-tower tower3">
            <svg viewBox="0 0 100 200" className="tower-svg">
              <path
                d="M40 200 L60 200 L60 50 L90 20 L80 20 L50 45 L20 20 L10 20 L40 50 Z"
                fill="currentColor"
              />
              <path
                d="M30 100 L70 100 M25 150 L75 150"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* Power Lines */}
        <div className="power-line line1"></div>
        <div className="power-line line2"></div>
        <div className="power-flow flow1"></div>
        <div className="power-flow flow2"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-icons">
          <Zap className="icon text-yellow-300" size={24} />
          <Activity className="icon text-blue-300" size={24} />
          <BarChart3 className="icon text-green-300" size={24} />
          <Zap className="icon text-yellow-300" size={24} />
          <Activity className="icon text-blue-300" size={24} />
          <BarChart3 className="icon text-green-300" size={24} />
        </div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0">
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>
      </div>
    </div>
  );
}
