import { useRouter } from "next/router";
import Image from "next/future/image";

interface ICard {
  onClick?: () => void;
  image: string;
  name: string;
  subsidiary?: string;
  date?: string;
  role?: string[];
}

const Card = (props: ICard) => {
  const router = useRouter();
  const { name, subsidiary, role, date, image } = props;

  return (
    <div className="transition-all group p-6 border-2 border-spacing-2 border-chan-dark border-solid bg-transparent text-chan-dark hover:bg-chan-dark hover:text-chan-light rounded-lg shadow-black shadow-sm">
      {image && (
        <div className="bg-transparent group-hover:bg-white h-24 flex items-center rounded-lg border-2 border-spacing-2 border-chan-dark border-solid">
          <Image
            className="mx-auto object-contain px-5 py-6 w-full h-full"
            src={image}
            alt={name}
            width={150}
            height={150}
          />
        </div>
      )}
      <p className="font-bold text-lg pt-4">
        {subsidiary ? name + ":" : name}{" "}
        <span className="text-xs bt-2 inline-block">{subsidiary || null}</span>
      </p>
      {role &&
        role.map((r, i) => {
          return (
            <p className="pt-2 text-sm font-normal" key={i}>
              {r}
            </p>
          );
        })}
      {date && <p className="pt-2 text-sm italic">{date}</p>}
    </div>
  );
};

export default Card;
