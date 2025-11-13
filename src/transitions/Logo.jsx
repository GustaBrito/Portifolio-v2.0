import React from 'react';

// O height padrão foi aumentado para 250px
const Logo = ({ color = "#6F4E37", width = "180px", height = "250px", animated = true }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    // O viewBox foi ajustado: começa em Y = -50 e tem altura de 250
    viewBox="0 -50 200 250" 
    className={animated ? "coffee-logo-animated" : ""}
  >
    <defs>
      <linearGradient id="saucerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: color, stopOpacity: 0.8 }} />
        <stop offset="100%" style={{ stopColor: color, stopOpacity: 0.6 }} />
      </linearGradient>
      <linearGradient id="cupGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: color, stopOpacity: 0.9 }} />
        <stop offset="100%" style={{ stopColor: color, stopOpacity: 0.7 }} />
      </linearGradient>
      <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: color, stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#3C2A21", stopOpacity: 1 }} />
      </linearGradient>
      <filter id="innerShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
        <feOffset in="blur" dx="1" dy="2" result="offsetBlur" />
        <feMerge>
          <feMergeNode in="offsetBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="handleShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.2"/>
      </filter>
    </defs>

    {/* Pires com gradiente sutil */}
    <ellipse
      cx="100"
      cy="160"
      rx="72"
      ry="16"
      fill="url(#saucerGradient)"
      stroke={color}
      strokeWidth="3"
      className="saucer"
    />

    {/* Sombra sutil do pires (ligeiramente menor) */}
    <ellipse
      cx="100"
      cy="166"
      rx="68"
      ry="11"
      fill="#000"
      fillOpacity="0.08"
      className="saucer-shadow"
    />

    {/* Xícara com gradiente e sombra interna */}
    <path
      d="M62 58 C 48 78, 48 132, 62 152 H 138 C 152 132, 152 78, 138 58 Z"
      fill="url(#cupGradient)"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      filter="url(#innerShadow)"
      className="cup"
    />

    {/* Borda superior da xícara com brilho mais sutil */}
    <ellipse
      cx="100"
      cy="58"
      rx="38"
      ry="14"
      fill="none"
      stroke={color}
      strokeWidth="4"
      className="cup-rim"
    />
    <ellipse
      cx="95"
      cy="55"
      rx="32"
      ry="10"
      fill="#FFF"
      fillOpacity="0.2"
      className="cup-rim-highlight"
    />

    {/* Líquido do café com gradiente e brilho refinado */}
    <path
      d="M62 66 C 67 73, 133 73, 138 66 C 143 78, 143 132, 138 147 H 62 C 57 132, 57 78, 62 66 Z"
      fill="url(#liquidGradient)"
      fillOpacity="1"
      className={animated ? "coffee-liquid" : ""}
    />

    {/* Brilho no líquido (mais sutil e alongado) */}
    <path
      d="M78 72 Q 95 68, 115 73 T 130 68"
      stroke="#FFF"
      strokeWidth="1.5"
      fill="none"
      strokeOpacity="0.3"
      strokeLinecap="round"
      className="liquid-shine"
    />

    {/* Alça elegante com drop shadow */}
    <path
      d="M138 80 C 160 75, 170 95, 145 120"
      fill="none"
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
      filter="url(#handleShadow)"
      className="handle"
    />
    <path
      d="M138 80 C 158 77, 165 90, 143 117"
      fill="none"
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
      className="handle-inner"
      strokeOpacity="0.8"
    />

    {/* Vapor estilizado (MAIOR E EM MAIOR QUANTIDADE) - COR BRANCA */}
    {animated && (
      <g className="steam-group">
        {/* Camada de vapor 1 (maior e principal) */}
        <path
          d="M75 25c15-10 30-10 45 0s30 10 45 0"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeOpacity="0.5"
          className="steam steam-large"
        />
        {/* Camada de vapor 2 (levemente deslocada e menor) */}
        <path
          d="M85 15c12-8 24-8 36 0s24 8 36 0"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity="0.4"
          className="steam steam-medium steam-delay-1"
        />
        {/* Camada de vapor 3 (ainda menor e mais deslocada) */}
        <path
          d="M95 5c10-6 20-6 30 0"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.3"
          className="steam steam-small steam-delay-2"
        />
      </g>
    )}
  </svg>
);

export default Logo;