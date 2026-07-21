import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();

  return (
    <div className="bg-gray-500 text-center text-3xl text-white p-4">
      User: {userid}
    </div>
  );
}

export default User;
