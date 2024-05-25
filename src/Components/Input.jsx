
import { forwardRef } from "react"

///i
const Input =  forwardRef(function Input({ textarea, label, ...props }, ref) {
    return (
        <p>
          <label>{label}</label>
          {textarea ? <textarea ref={ref} {...props}/> : <input ref={ref}  {...props} />}
        </p>  
    )
});

export default Input;