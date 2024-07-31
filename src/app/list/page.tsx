import Link from "next/link";

export default function List() {
  let product: string[] = ['Tomato', 'Pasta', 'Coconut']

  return (
    <div className="mainWrap">
      <h4>List Page</h4>
      <div>
        {product.map((item, i) => (
          <div className="food" key={i}>\
            
            <h4>{item} $40</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
