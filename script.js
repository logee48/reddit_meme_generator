//function get json file data from url
async function loadNames() {
  const response = await fetch('https://meme-api.herokuapp.com/gimme');
  const names = await response.json();
  console.log(names);
  document.getElementById('subredditplace').innerHTML = names.subreddit;
  document.getElementById('imageitself').src = names.url;
  document.getElementById('captionplace').innerHTML = names.title;
}
