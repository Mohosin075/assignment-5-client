import { Image } from "antd";

function Logo() {
  return (
    <Image
      width={35}
      style={{cursor : 'pointer'}}
      preview={false}
      src="https://cdn-icons-png.freepik.com/256/15565/15565366.png?semt=ais_hybrid"
    />
  );
}

export default Logo;
