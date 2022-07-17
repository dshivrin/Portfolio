//TODO: cleanup the types

export type NavItemProps = {
  text: string;
  href: string;
  cssclass: string;
};

export type TitleProps = {
  text: string;
  style?: object | {};
};

export type SkillsListProps = {
  skills: string[];
  style?: object | {};
};

export type WorkplaceSlim = {
  id: number;
  name: string;
  title: string;
  selected: boolean;
};

export type Workplace = WorkplaceSlim & {
  position: string;
  from: string;
  to: string;
  description: string;
  bullets: string[];
  website: string;
};

export type ExperienceTabsProps = {
  tabs: Workplace[];
  OnClick: (event: any) => void;
  style?: object | {};
};

export type ExperienceContentProps = {
  selectedWorkplace: Workplace;
};

export type PositionProps = {
  workplace: Workplace;
};

export type ExperienceProps = {
  workplace: Workplace;
};

export type DateRangeProps = {
  from: string | Date;
  to?: string | Date; //null = current year. moment(null) = moment() = current date
  format: string;
};

export type elementType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
export type IterationType = number | "infinite";

export type AnimatedTextProps = {
  element: string;
  text: string[];
  typeDelay: number;
  eraseDelay: number;
  nextWordDelay: number;
  iterations: IterationType;
  CSSclass?: string;
  elStyle?: Object;
};

export type GridProps = {
  size: number;
  children: JSX.Element,
};

//GOL type
export type Matrix = Array<Array<boolean>>;
