import { useRouter } from "next/router";
import Image from "next/future/image";
import cx from "classnames";

interface ICard {
  onClick?: () => void;
  name: string;
  type?: string;
  image?: string;
  subsidiary?: string;
  date?: string;
  role?: string[];
  className?: any;
}

const Card = (props: ICard) => {
  const router = useRouter();
  const { name, subsidiary, role, date, image, type = "normal" } = props;

  return (
    <div
      className={cx(
        "transition-all group p-6 border-2 border-spacing-2 border-chan-gray border-solid bg-transparent text-chan-gray hover:bg-gradient-to-bl from-cyan-500 to-blue-700 hover:text-chan-light shadow-black shadow-sm",
        type === "large" ? "p-20" : "p-6",
        props.className
      )}
    >
      {image && (
        <div className="bg-transparent group-hover:bg-white h-24 flex items-center border-2 border-spacing-2 border-chan-gray border-solid">
          <Image
            className="mx-auto object-contain px-5 py-6 w-full h-full"
            src={image}
            alt={name}
            width={150}
            height={150}
          />
        </div>
      )}
      <p
        className={cx(
          "font-bold pt-4",
          !image ? "pt-0" : "",
          type === "large" ? "text-2xl" : "text-lg"
        )}
      >
        {subsidiary ? name + ":" : name}{" "}
        <span className="text-xs bt-2 inline-block">{subsidiary || null}</span>
      </p>
      {role &&
        role.map((r, i) => {
          return (
            <p className="pt-2 text-sm font-medium" key={i}>
              {r}
            </p>
          );
        })}
      {date && <p className="pt-2 text-sm italic">{date}</p>}
    </div>
  );
};

export default Card;
