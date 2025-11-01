import React from 'react';

type Props = {};

export default function DottedPattern({}: Props) {
  return (
    <div className="relative min-h-screen w-full bg-black">
      {/* Dark White Dotted Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255, 255, 255, 0.2) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0',
          backgroundRepeat: 'repeat',
        }}
      />
      {/* Your Content/Components */}
    </div>
  );
}
