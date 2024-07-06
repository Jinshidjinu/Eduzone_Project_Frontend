
import PropTypes from 'prop-types';

const Button = ({ children, onClick, className, content, variant = 'primary', size = 'md', ...props }) => {
  const baseStyles = 'rounded-lg py-2 transition-colors';
  
  const variants = {
    primary: 'bg-[#9280D9] rounded-lg text-white py-2 hover:scale-105 hover:bg-gradient-to-r from-[#A54A99] to-[#490692] duration-300 mt-2',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    outline: 'bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
  };

  const sizes = {
    sm: 'text-sm px-2 py-1',
    md: 'text-md px-4 py-2',
    lg: 'text-lg px-6 py-3',        
  };

  const variantClasses = variants[variant] || variants.primary;
  const sizeClasses = sizes[size] || sizes.md;

  return (
    <button 
      className={`${baseStyles} ${variantClasses} ${sizeClasses} ${className || ''}`}
      onClick={onClick}
      {...props}
    >
      {content || children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  content: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default Button;
