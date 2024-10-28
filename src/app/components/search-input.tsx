import React, { InputHTMLAttributes } from 'react';
import Image from 'next/image';

export interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearchClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function SearchInput({ onSearchClick, ...rest }: SearchInputProps) {
  return (
    <div className="relative w-96">
      <input
        {...rest}
        type="text"
        className="text-sm flex-1 py-3 pl-3 pr-11 rounded border-gray-300 bg-gray-50"
      />
      <button type="button" className="absolute top-0 right-0 p-3" onClick={onSearchClick}>
        <Image width={20} height={20} src="/public/icons/magnifying-glass.svg" alt="search icon" />
      </button>
    </div>
  );
}
