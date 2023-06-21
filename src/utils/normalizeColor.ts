export const normalizeColor = (color: string) => {
  switch (color) {
    case 'midnightgreen':
      return '#004953';
    case 'spacegray':
      return '#7D7D7D';
    case 'purple':
      return '#D8BFD8';
    case 'red':
      return '#DA2802';
    case 'green':
      return '#8CFEB1';
    case 'gold':
      return '#FFD700';
    case 'rosegold':
      return '#B76E79';
    default:
      return color;
  }
};
