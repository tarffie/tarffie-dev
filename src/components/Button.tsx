import { handleNavClick, capitalizeString } from '../utils/handlers';

export const Button = (props: { content: string, target: string }) => {
  const { content, target } = props
  const content_capitalized = capitalizeString(content);

  return (
    <a
      href={target.toLowerCase()}
      onClick={(e) => handleNavClick(e, content.toUpperCase())}
    >
      {content_capitalized}
    </a>
  );
}
