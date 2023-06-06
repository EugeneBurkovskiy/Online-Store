const formatRating = (ratingValue: number) => {
  const ratingSymbol = '★';
  const emptyRatingSymbol = '☆';
  const roundedRatingValue = Math.round(ratingValue);
  const ratingString = ratingSymbol.repeat(roundedRatingValue);

  if (ratingString.length < 5) {
    return ratingString + emptyRatingSymbol.repeat(5 - ratingString.length);
  }

  return ratingString;
};

export { formatRating };
