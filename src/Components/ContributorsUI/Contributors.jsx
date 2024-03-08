import React from "react";
import User from "./User";
import userData from "../../assets/data/userData";

export default function Contributors() {
  return (
    <section className="px-2 sm:px-0">
      <p className="paragraphFont text-center">
        Here you can find all the lovely people that contributed to our site
      </p>
      <div className="sm:center min-h-72  sm:flex-wrap sm:gap-5">
        {userData.map(({ id, name, image, description }) => {
          return (
            <User
              key={id}
              name={name}
              image={image}
              description={description}
            />
          );
        })}
      </div>
    </section>
  );
}
