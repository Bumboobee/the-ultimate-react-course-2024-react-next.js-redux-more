const Message = ({ code, message }) => {
  return (
    <div
      className={`${code === "OB" ? 'bg-yellow-100 border-yellow-400 text-yellow-700' : 'bg-gray-100 border-gray-400 text-gray-700 '} border px-4 py-3 mb-5 rounded relative`}
      role="alert"
    >
      <strong className="font-bold"> Atenção! </strong>
      <span className="block sm:inline">{message}</span>
    </div>
  );
};

export default Message;
