```javascript
const query = { name: /pattern/i }; // Case-insensitive regex query

db.collection('myCollection').find(query).toArray((err, result) => {
  if (err) throw err;
  console.log(result);
});
```