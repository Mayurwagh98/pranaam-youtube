import Button from "./Button";

const list = [
  "All",
  "Live",
  "Gaming",
  "Music",
  "Dance",
  "Javascript",
  "Mr. Olympia",
  "Operating System",
  "AI",
  "Recently Uploaded",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item, index) => (
        <Button name={item} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
