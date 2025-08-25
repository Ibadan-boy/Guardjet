function Button({ children, variant = 'primary', ...props }) {
  const baseStyles = 'px-4 py-2 rounded border border-gray-300 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
    outline: 'bg-transparent text-blue-600 border-blue-600 hover:bg-blue-50 hover:text-blue-700 focus:ring-blue-500',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;