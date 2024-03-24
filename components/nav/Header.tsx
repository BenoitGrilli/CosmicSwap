import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <div className="flex items-center space-x-2">
      <Image src="/images/logo.png" alt="Logo" width={300} height={300} />

    </div>
  );
};

export default Header;