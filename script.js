//function get json file data from url
async function loadNames() {
  const response = await fetch('http://meme-api.herokuapp.com/gimme');
  const names = await response.json();
  console.log(names);
  document.getElementById('imageitself').src = names.url;
  document.getElementById('captionplace').innerHTML = names.title;
}
