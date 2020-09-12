module.exports = (req, res) => {
  const { a = '' } = req.query;
  let r = a;
  let l = [];
  for(i in r)for(j in r)l=[...a],l[i]=a[j],l[j]=a[i],l=l.join``,r=r>l?r:l;
  res.status(200).send(+r+1&&r||'-');
}

