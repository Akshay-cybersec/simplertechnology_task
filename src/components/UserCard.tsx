interface UserCardProps {
  name: string;
  email: string;
}

const UserCard = ({ name, email }: UserCardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 transform transition-transform duration-300 hover:scale-105">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <div className="h-14 w-14 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-bold">
            {name.charAt(0).toUpperCase()}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500 mt-1">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
