import { useRouter } from "next/router";

interface IButton {
  onClick?: () => void;
  to: string;
  children: React.ReactNode;
}

const Button = (props: IButton) => {
  const router = useRouter();

  const onClickHandler = () => {
    router.push(props.to);
  };

  return (
    <button
      className="my-4 p-4 bg-gray-900 inline-block rounded-lg text-lg text-white drop-shadow-2xl hover:bg-gray-800"
      onClick={onClickHandler}
    >
      {props.children}
    </button>
  );
};

export default Button;
