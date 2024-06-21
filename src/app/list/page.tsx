import Link from "next/link";

export default function List() {
  return (
    <div className="mainWrap">
      <h4>List Page</h4>
      <div>
        <div className="food">
          <h4>상품1 $40</h4>
        </div>
        <div className="food">
          <h4>상품2 $40</h4>
        </div>
      </div>
    </div>
  );
}
