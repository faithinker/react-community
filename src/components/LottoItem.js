import Button from "./Button";

const LottoItem = ({ id, isAuto, selectedNumbers }) => {
  return (
    <div className="LottoItem">
      <div className="tag">
        <span>{id}</span>
        <span>{isAuto ? "자동" : "수동"}</span>
      </div>
      <div className="content">
        {selectedNumbers
          .sort((a, b) => a - b)
          .map((num) => (
            <span key={num}>{num}</span>
          ))}
      </div>
      <Button text={"삭제"} onClick={() => alert("삭제")} />
    </div>
  );
};

export default LottoItem;
