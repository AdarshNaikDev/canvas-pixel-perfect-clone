import React from 'react';

interface UserProfileProps {
  name: string;
  imageUrl: string;
}

export const UserProfile: React.FC<UserProfileProps> = ({ name, imageUrl }) => {
  return (
    <button 
      className="flex items-center gap-3 hover:bg-gray-100 rounded-full px-3 py-2 transition-colors"
      aria-label="User profile menu"
    >
      <div className="w-8 h-8 rounded relative overflow-hidden">
        <img
          src={imageUrl}
          alt={`${name}'s profile`}
          className="w-[84px] h-[84px] absolute left-[-26px] top-[-8px] object-cover"
        />
      </div>
      <div className="flex items-center gap-0.5">
        <span className="text-[#231F20] text-center text-sm font-medium">
          {name}
        </span>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.4995 6.74048C14.4995 6.64312 14.4766 6.55262 14.4282 6.47192L14.4272 6.4729C14.3814 6.3923 14.3187 6.32806 14.2388 6.28149V6.28052C14.1567 6.22583 14.0621 6.20044 13.9595 6.20044C13.8169 6.20044 13.6909 6.25434 13.5845 6.35571L13.5806 6.35864L9.08936 11.0833L4.59814 6.35864L4.59424 6.35474V6.35571C4.48784 6.25438 4.36175 6.20049 4.21924 6.20044C4.11663 6.20044 4.02197 6.22583 3.93994 6.28052L3.94092 6.28149C3.85988 6.32852 3.79461 6.39294 3.74854 6.47485L3.74951 6.47583C3.70238 6.55572 3.67822 6.6444 3.67822 6.74048C3.67822 6.88966 3.73341 7.01888 3.84033 7.12231L8.69092 12.2288L8.69287 12.2307C8.71936 12.2572 8.74723 12.2808 8.77588 12.302L8.86572 12.3577L8.87451 12.3616C8.94214 12.3876 9.0142 12.3997 9.08936 12.3997C9.16434 12.3996 9.23534 12.3877 9.30029 12.3606L9.30322 12.3586L9.39893 12.303C9.42923 12.2815 9.45865 12.2579 9.48584 12.2307L9.48682 12.2288L14.3433 7.12427L14.4116 7.04126C14.4705 6.95366 14.4995 6.85242 14.4995 6.74048Z" fill="#231F20" stroke="#231F20" strokeWidth="0.2"/>
        </svg>
      </div>
    </button>
  );
};
