const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
};

export default Button;
