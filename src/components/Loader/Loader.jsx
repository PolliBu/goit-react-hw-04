import { InfinitySpin } from 'react-loader-spinner';
export const Loader = () => {
  return (
    <div>
      <InfinitySpin
        visible={true}
        width="300"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};
