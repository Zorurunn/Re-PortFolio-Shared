export const Planguage = (props) => {
  return (
    <div id="Skill" className="flex flex-col items-center justify-center gap-2">
      {props.svg ? null : <img className="w-16 h-16" src={`${props.source}`} />}
      {props.svg}
      <p className="text-[#4B5563] dark:text-[#D1D5DB]">{props.text}</p>
    </div>
  );
};
