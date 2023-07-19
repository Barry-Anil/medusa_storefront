import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

export interface SearchBarProps extends React.ButtonHTMLAttributes<HTMLInputElement> {}

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(({
  children,
  className,
  disabled,
  type = 'text',
  placeholder = 'Search',
  ...props
}, ref) => {
  const defaultValue = children !== null ? "" : ''; // Convert children to a string

  return (
    <input
      type={type}
      className={cn(
        `
        w-auto
        rounded-full
        bg-black
        border-transparent
        px-5
        py-3
        disabled:cursor-not-allowed
        disabled:opacity-50
        text-white
        font-semibold
        hover:opacity-75
        transition
        `,
        className
      )}
      disabled={disabled}
      ref={ref}
      {...props}
      defaultValue={defaultValue}
      placeholder='Search'
    />
  );
});

SearchBar.displayName = 'Searchbar';

export default SearchBar;