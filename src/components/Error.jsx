const Error = ({ mensaje }) => {
  return (
    <div className="bg-red-800 text-center text-white rounded-md p-3 mb-3 font-bold uppercase">
      <p>{mensaje}</p>
    </div>
  );
};

export default Error;
