import ListItem from "./ListItem.jsx";

export default function LoginMenu({ loginOpen, setloginOpen }) {
  return (
    <div
      role="menu"
      aria-hidden={!loginOpen}
      className={`${
        loginOpen ? "block" : "hidden"
      } w-48 m-0 rounded-md absolute top-[30px] right-[0] shadow-lg z-30`}
    >
      <ul className="flex flex-col font-medium text-[var(--text-primary)] p-2">
        <ListItem
          content="Login"
          onclick={() => setloginOpen(false)}
          noHover={true}
        />
        <ListItem
          content="Register"
          onclick={() => setloginOpen(false)}
          noHover={true}
        />
      </ul>
    </div>
  );
}
