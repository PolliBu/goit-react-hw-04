export const ImageCard = ({ item }) => {
  return <img src={item.urls.small} alt={item.alt_description} />;
};
