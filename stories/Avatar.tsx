// Avatar.tsx
import { Image } from '@heroui/react';
import React from 'react';

type AvatarProps = {
  src: string;
  alt?: string;
  size?: 'small' | 'medium' | 'large';
  rounded?: boolean;
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  size = 'medium',
  rounded = true,
}) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-20 h-20',
  };

  return (
    <Image 
      src={src}
      alt={alt}
      className={`${sizeClasses[size]} ${rounded ? 'rounded-full' : 'rounded-md'} object-cover`}
    />
  );
};
