/**
 * This file contains the code that generated the treemap_terms.json file
 */

d3.csv("data/all_language_terms.csv", (allLangTerms) => {
  let existingCountries = [];

  let treemapTerms = {
    name: "Continent",
    children: [
      { name: "Africa", type: "Continent", children: [] },
      { name: "Asia", type: "Continent", children: [] },
      { name: "North America", type: "Continent", children: [] },
      { name: "Oceania", type: "Continent", children: [] },
      { name: "South America", type: "Continent", children: [] },
      { name: "Antarctica", type: "Continent", children: [] },
      { name: "Europe", type: "Continent", children: [] },
    ],
  };
  // used this if we wanted to stop at the language level and just display the count of # of distinct terms used in the language
  let langToTermsDict = getLangToTermsDict(langTermDict);

  allLangTerms.forEach((item) => {
    let continent = item.continent;
    let location = item.language_location;
    let name = item.language_name;
    let id = item.language_id;
    let term = item.term;
    // let value = langToTermsDict[id].length;

    // debugger;
    treemapTerms.children.forEach((resultTerm) => {
      if (resultTerm.name == continent) {
        // check if this country is in children yet
        let countries = resultTerm.children;
        let language = {
          language_id: id,
          type: "Language",
          name: name,
          children: [],
          // value: value,
        };
        let termObject = { type: "Term", name: term, value: 1 };
        if (existingCountries.includes(location)) {
          // if the country of the language already exists, find it in children and append this language
          countries.forEach((c) => {
            // if country name matches the location of the language
            if (c.name == location) {
              let languages = c.children;

              let existingLanguages = languages.map((l) => l.name);
              if (!existingLanguages.includes(name)) {
                language.children = [termObject];
                c.children.push(language);
              } else {
                // the language alraedy exists
                languages.forEach((l) => {
                  if (l.name == name) {
                    l.children.push(termObject);
                  }
                });
              }
            }
          });
        } else {
          let country = {
            name: location,
            type: "Country",
            children: [language],
          };
          existingCountries.push(location);
          country.children[0].children = [termObject];
          resultTerm.children.push(country);
        }
      }
    });
  });
  console.log(JSON.stringify(treemapTerms));
});
