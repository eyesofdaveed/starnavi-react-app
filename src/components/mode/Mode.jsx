/* Mode options to choose from from the object mode passed */
const Mode = ({ mode }) => {
  return (
    <option value={Object.values(mode)[0].field}>{Object.keys(mode)[0]}</option>
  );
};

export default Mode;
