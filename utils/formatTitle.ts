const formatTitle = (title: string) => {
  const maxTitleLength = 14;
  if (title.length > maxTitleLength) {
    return `${title.substring(0, maxTitleLength)}...`;
  }
  return title;
};

export { formatTitle };
