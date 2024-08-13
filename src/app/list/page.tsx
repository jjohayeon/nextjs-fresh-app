export default function List() {
  let product: string[] = ["Tomato", "Pasta", "Coconut"];

  return (
    <div className="mainWrap">
      <h4>List Page</h4>
      <div>
        {product.map((item, i) => {
          return (
            <div className="food" key={i}>
              <img src={`food${i}.png`} />
              <h4>{item} $40</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
