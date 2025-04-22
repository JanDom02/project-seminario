type InputProps = {
    placeholder ?: string;
    className ?: string;
    type ?: string;

};

export default function InputComponent ({placeholder, className, type = "text"}: InputProps) {
    return (
        <input type={type} placeholder={placeholder} className={`w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ${className}`} />
    );
};