$(document).ready(function (){
});
var displayError = () => $('#errors').html("I'm sorry, there's been an error. Please try again.")

var searchRepositories = () => {
  const searchTerms = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
    $(`#results`).html(renderSearch(data))
  }).fail(error => {
    displayError()
  })
}
var renderSearch = (result) => {
  const repoList = '<div>' + repos.items.map(r => {
  return (`
        <h2><a href="${r.html_url}">${r.name}</a></h2>
        <p><a href="#" data-repository="${r.name}" data-owner="${r.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
        <p>${r.description}</p>
    `
  )}.join('')
  document.getElementById("results").innerHTML = repoList
}

var render
