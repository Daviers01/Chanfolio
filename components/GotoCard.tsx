import cx from "classnames";
import { useRouter } from "next/router";

interface ICard {
  onClick?: () => void;
  className: string;
  to: string;
  children: React.ReactNode;
}

const Card = (props: ICard) => {
  const router = useRouter();

  const onClickHandler = () => {
    router.push(props.to);
  };

  return (
    <div
      className={cx(
        "rounded-lg cursor-pointer shadow-lg flex flex-col justify-center",
        props.className
      )}
      onClick={onClickHandler}
    >
      {props.children}
    </div>
  );
};

export default Card;
