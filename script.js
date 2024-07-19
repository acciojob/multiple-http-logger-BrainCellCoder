const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];
async function fetchAndLog(urls) {
  try {
    const fetchPromises = urls.map(url => fetch(url).then(response => response.json()));
    const results = await Promise.all(fetchPromises);
    results.forEach((result, index) => {
      console.log(`Response from ${urls[index]}:`, result);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
fetchAndLog(urls);
