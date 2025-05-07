const Button = ({ operator, fn }) => {
  return (
    <button
      type="button"
      className="h-10 w-10 flex items-center justify-center rounded-full bg-cyan-600 hover:bg-cyan-500 font-black hover:ring-2 hover:ring-offset-2 hover:ring-cyan-500"
      onClick={fn}
    >
      <span className="text-xl text-white">{operator}</span>
    </button>
  );
};

export default Button;
