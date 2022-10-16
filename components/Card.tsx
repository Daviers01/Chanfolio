import { useRouter } from "next/router";
import Image from "next/future/image";

interface ICard {
  onClick?: () => void;
  image: string;
  name: string;
  subsidiary?: string;
  date: string;
  role: string[];
}

const Card = (props: ICard) => {
  const router = useRouter();
  const { name, subsidiary, role, date, image } = props;

  return (
    <div className="p-6 bg-gray-50 hover:bg-gray-100 rounded-lg cursor-pointer  shadow-lg">
      <div className="bg-white h-24 flex items-center rounded-lg">
        <Image
          className="mx-auto"
          src={image}
          alt={name}
          width={150}
          height={150}
        />
      </div>
      <p className="font-bold text-lg pt-4">
        {subsidiary ? name + ":" : name}{" "}
        <span className="text-xs bt-2 inline-block">{subsidiary || null}</span>
      </p>
      {role.map((r, i) => {
        return (
          <p className="pt-2 text-sm" key={i}>
            {r}
          </p>
        );
      })}
      <p className="pt-2 text-xs italic">{date}</p>
    </div>
  );
};

export default Card;
