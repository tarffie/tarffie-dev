export const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const capitalizeString = (text: string)=> {
  return new String(text[0]
    .toUpperCase())
    .concat(text
      .slice(1, -1))
}

