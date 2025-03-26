// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'shooting-star': 'shooting-star 10s linear infinite',
        'fade-in': 'fadeIn 1s ease-out',
        'fade-in-delay': 'fadeIn 1s ease-out 0.5s',
        'spin-slow': 'spin 10s linear infinite',
        'orbit': 'orbit 10s linear infinite',
      },
      
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 0.8 },
        },
        'shooting-star': {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '100%': { transform: 'translateX(1500px) translateY(1500px)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(150px) rotate(-360deg)' },
        },
        
      },
      
    },
    
  },
  // ... rest of your config
}

