const Button = ({ title }) => {
  return (
    <button className="py-3 px-2  bg-blue-400 hover:bg-yellow-500  hover:text-black text-white rounded-lg">
      {title ?? ""}
    </button>
  );
};

export default Button;
