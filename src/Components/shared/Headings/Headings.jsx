

const Headings = ({content, variant = 'primary', description, size = 'md', className,  ...props}) => {
    const sizes = {
        sm: 'text-sm px-2 py-1',
        md: 'text-md px-4 py-2',
        lg: 'text-lg px-6 py-3'
    };

    const variants = {
        primary: 'bg-[rgb(244,239,250)] text-blue-950 w-full h-auto text-[32px] font-bold text-center gap-6 flex flex-col items-center justify-center py-6',
        secondary: 'text-red-400'
    };

    const variantClasses = variants[variant];
    const sizeClasses = sizes[size] || sizes.md;
  return (
    <div
             className={`${variantClasses} ${sizeClasses} ${className}  `} 
            {...props}
          
        >
            <div className='flex justify-center items-center   gap-4'>
                <span className='text-blue-950'>{content}</span>
            </div>
    </div>
  )
}

export default Headings