```javascript
const query = { name: { $regex: 'pattern', $options: 'i' } }; //Correct way to use case-insensitive regex

db.collection('myCollection').find(query).toArray((err, result) => {
  if (err) throw err;
  console.log(result);
});
```