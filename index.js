$(document).ready(function (){
});
var displayError = () => $('#errors').html("I'm sorry, there's been an error. Please try again.")

function searchRepositories() {
  const searchTerms = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
    $(`#results`).html(renderSearch(data))
  }).fail(error => {
    displayError()
  })
}

function renderSearch(repos) {
  const repoList = '<div>' + repos.items.map(r => {
  return (`
        <h2><a href="${r.html_url}">${r.name}</a></h2>
        <p><a href="#" data-repository="${r.name}" data-owner="${r.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
        <p>${r.description}</p>
    `
  )}.join('')
)
  document.getElementById("results").innerHTML = repoList
}

function showCommits(el){
  $.get(`https://api.github.com/repos/${el.dataset.owner}/${el.dataset.repository}/commits`, data =>{
    $("#details").html(displaycommits(data))
  }).fail(error => {
    displayError()
  })
}

function displaycommits(data){
  const result = data.map((r) =>{
    return `
    <h3>${r.sha}</h3>
    <p>${r.commit.message}</p>
    `
  })
  return result;
}
