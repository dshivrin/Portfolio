import { ExperienceTabsProps } from "../../../Core/types";

const Tabs = (props: ExperienceTabsProps) => {
  const tabs = props.tabs.sort((a, b) => (a.id = b.id));

  return (
    <div className="tabs-container">
      <ul>
        {tabs.map((wp, index) => {
          return (
            <button
              key={index}
              type="button"
              id={wp.id.toString()}
              onClick={props.OnClick}
            >
              {wp.name}
            </button>
          );
        })}
      </ul>
    </div>
  );
};

export default Tabs;
