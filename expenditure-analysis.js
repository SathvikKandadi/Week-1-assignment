function calculateTotalSpentByCategory(transactions) {
  let n=transactions.length;
  let res=[];
  const map = new Map();
  for(let i=0;i<n;i++)
    {
      let obj=transactions[i];
      if(map.has(obj.category))
      {
        let s=map.get(obj.category);
        s=s+obj.price;
        map.set(obj.category,s);
      }
      else
      {
        map.set(obj.category,obj.price);
      }
    }
  map.forEach((value,key)=>{
    let k=key;
    let v=value;
    let ans={
      category:k,
      totalSpent:v
    };
    res.push(ans);
  }
  );
  return res;
}
const transactions = [
			{
				id: 1,
				timestamp: 1656076800000,
				price: 10,
				category: 'Food',
				itemName: 'Pizza',
			},
			{
				id: 2,
				timestamp: 1656105600000,
				price: 20,
				category: 'Food',
				itemName: 'Burger',
			},
			{
				id: 3,
				timestamp: 1656134400000,
				price: 30,
				category: 'Food',
				itemName: 'Sushi',
			},
		];
console.log(calculateTotalSpentByCategory(transactions));