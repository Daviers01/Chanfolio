import cx from "classnames";
import { useRouter } from "next/router";

interface ICard {
  onClick?: () => void;
  className: string;
  to?: any;
  href?: any;
  children: React.ReactNode;
}

const Card = (props: ICard) => {
  const router = useRouter();

  const onClickHandler = () => {
    router.push(props.to);
  };

  if (props.href) {
    return (
      <a
        className={cx(
          "cursor-pointer shadow-lg flex flex-col justify-center hover:transition-all",
          props.className
        )}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }

  return (
    <div
      className={cx(
        "cursor-pointer shadow-lg flex flex-col justify-center hover:transition-all",
        props.className
      )}
      onClick={onClickHandler}
    >
      {props.children}
    </div>
  );
};

export default Card;
