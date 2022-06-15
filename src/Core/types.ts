//TODO: cleanup the types

export type NavItemProps = {
  text: string;
  href: string;
}

export type TitleProps = {
  text: string;
  style?: object | {};
}

export type SkillsListProps =  {
  skills: string[];
  style?: object | {};
}

export type WorkplaceSlim = {
  id: number;
  name: string;
  selected: boolean;
}

export type Workplace = WorkplaceSlim & {
  position: string;
  dates: string;
  description: string;
  bullets: string[];
  website: string;
}

export type ExperienceTabsProps = {
  tabs: Workplace[];
  OnClick: (event: any) => void;
  style?: object | {};
}

export type ExperienceContentProps =  {
  selectedWorkplace: Workplace;
}

export type PositionProps = {
  workplace: Workplace
}

export type ExperienceProps = {
  workplace: Workplace
}

