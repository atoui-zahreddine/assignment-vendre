import React, { FunctionComponent } from "react";

interface Props {
  avatar: string;
  name: string;
  email: string;
  loading: boolean;
}

const EmployeeCard: FunctionComponent<Props> = React.memo(
  ({ loading, avatar, name, email }) => {
    if (loading)
      return (
        <div className="animate-pulse h-[264px] w-[224px] bg-gray-200 rounded-xl" />
      );

    return (
      <div className="flex flex-col items-center justify-around space-y-5 px-12 py-6 bg-gray-300 rounded-2xl">
        <img
          className="w-[128px] h-[128px] rounded-full"
          src={avatar}
          alt={name}
        />
        <p className="capitalize font-bold">{name}</p>
        <a href={`mailto:${email}`} className="capitalize text-gray-700">
          contact
        </a>
      </div>
    );
  }
);

export default EmployeeCard;
