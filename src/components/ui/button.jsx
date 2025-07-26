import React from 'react';
import { cn } from "../../lib/utils"; // ✅ relative path
 // ✅ Make sure @ alias is working
console.log(import.meta.env); // Should show Vite config

const Button = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn("inline-flex items-center px-4 py-2 bg-blue-600 text-white", className)}
      {...props}
    />
  );
});

Button.displayName = "Button";
export default Button;
