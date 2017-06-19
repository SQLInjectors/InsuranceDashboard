export const fetchData = ({table, fq, fl, rows = 10, query = '*:*'}) => {
  return $.ajax({
    method: 'GET',
    url: `https://v3v10.vitechinc.com/solr/${table}/select?indent=on&rows=${rows}&q=${query}&wt=json`
  });
};
