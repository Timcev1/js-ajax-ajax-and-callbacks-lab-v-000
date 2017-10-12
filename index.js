$(document).ready(function (){
});
var displayError = () => $('#errors').html("I'm sorry, there's been an error. Please try again.")

var searchRepositories = () => {
  const searchTerms = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
    $(`#results`).html(renderSearchResults(data))
  }).fail(error => {
    displayError()
  })
}
