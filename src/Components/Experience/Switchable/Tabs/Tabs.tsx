
import { ExperienceTabsProps } from 'Core/types';
import './Tabs.scss';

const Tabs = (props: ExperienceTabsProps) => {
  const tabs = props.tabs;
  return (
    <div className="tabs-container">
      <ul>
        {tabs.map((wp, index) => {
          return (
            <button
              key={wp.id}
              type="button"
              id={wp.id.toString()}
              onClick={props.OnClick}
              className={wp.selected ? "tab active" : "tab"}
            >
              {wp.title}
            </button>
          );
        })}
      </ul>
    </div>
  );
};

export default Tabs;
