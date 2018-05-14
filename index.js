const search = instantsearch({
  appId: '47CSD2QLER',
  apiKey: 'b77f1a0f29c4243afda6282330456514',
  indexName: 'paragraphs',
  searchParameters: {
    hitsPerPage: 8,
  },
});

search.addWidget(
  instantsearch.widgets.hits({
    container: document.querySelector('#paragraphs'),
    templates: {
      item: '{{{_highlightResult.content.value}}}',
    },
  })
);

search.addWidget(
  instantsearch.widgets.searchBox({
    container: document.querySelector('#searchBox'),
    placeholder: 'Entrez les termes de recherche',
    autofocus: false /* Only to avoid live preview taking focus */,
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: document.querySelector('#brand'),
    attributeName: 'brand',
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: document.querySelector('#paginationB'),
  })
);

search.start();
