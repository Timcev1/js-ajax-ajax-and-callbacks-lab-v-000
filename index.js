$(document).ready(function (){
});

function displayError() {
  $("#errors").html("There has been error. Please try again.")
}

function searchRepositories() {
  const searchTerms = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
    $(`#results`).html(renderSearch(data))
  }).fail(error => {
    displayError()
  })
}

function searchRepositories() {
  const search = $("#searchTerms")[0].value;
  $.get(`https://api.github.com/search/repositories?q=${search}`, data => {
    $("#results").html(showRepositories(data))
  }).fail(error => {
    displayError()
  })
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
