function getGridData(mycolor) {
  var data = new Array();
  var xpos = 1; //starting xpos and ypos at 1 so the stroke will show when we make the grid below
  var ypos = 1;
  var width = 30;
  var height = 30;
  var click = 0;
  var count = 0;

  // iterate for rows
  for (var row = 0; row < 22; row++) {
    data.push(new Array());

    // iterate for cells/columns inside rows
    for (var column = 0; column < 15; column++) {
      // console.log(count, mycolor[count]);
      data[row].push({
        x: xpos,
        y: ypos,
        width: width,
        height: height,
        padding: 10,
        color: d3.lab(
          parseFloat(mycolor[count]["L*"]),
          parseFloat(mycolor[count]["a*"]),
          parseFloat(mycolor[count]["b*"]),
          (opacity = 1)
        ),
        click: click,
      });
      // increment the x position. I.e. move it over by 50 (width variable)
      xpos += width;
      // console.log(count);
      count++;
    }
    // reset the x position after a row is complete
    xpos = 1;
    // increment the y position for the next row. Move it down 50 (height variable)
    ypos += height;
  }
  return data;
}

/**
 * Given the L*, a*, b* values for a color along with necessary data, return an object in the following form:
 * {chip_id: "123", L*: #, a*: #, b*: #, all_terms: [{language_id: "language1", speaker_id: "s1", term_abb: 'b', term: "abc"}, ...]}
 *
 * @param {string|float} l                  L* value for the color
 * @param {string|float} a                  a* value for the color
 * @param {string|float} b                  b* value for the color
 * @param {array}        mycolor            array of objects for all the colors
 * @param {array}        chipTermDict       array of objects containing mappings between chip id, language id, speaker id, and the term abbreviation
 * @param {object}       termAbbrevTermDict dictionary of mappings from [term_abbreviation, language_id] to a term
 *
 * @returns object
 */
function getDataByColor(l, a, b, mycolor, chipTermDict, termAbbrevTermDict) {
  let chip = mycolor.find((d) => d["L*"] == l && d["a*"] == a && d["b*"] == b);
  let chipID = chip.chip_id;
  let colorData = getAllTermsByChipID(chipID, chipTermDict, termAbbrevTermDict);

  colorData["L*"] = l;
  colorData["a*"] = a;
  colorData["b*"] = b;
  return colorData;
}

function getAllTermsByChipID(chipID, chipTermDict, termAbbrevTermDict) {
  // get all the chip terms for the given chip ID
  let terms = chipTermDict.filter((d) => d.chip_id == chipID);

  // start building object to return
  let colorData = { chip_id: chipID };
  let allTerms = [];

  terms.forEach((term) => {
    var termDict = {};
    termDict.language_id = term.language_id;
    termDict.speaker_id = term.speaker_id;
    termDict.term_abbreviation = term.term_abbreviation;
    key = [term.term_abbreviation, term.language_id];
    termDict.term = termAbbrevTermDict[key];
    allTerms.push(termDict);
  });
  // debugger;
  colorData.all_terms = allTerms;
  return colorData;
}

function getListofTerms(all_terms) {
  var colorWords = [];

  for (var i = 0; i < all_terms.length; i++) {
    colorWords.push(all_terms[i].term);
  }

  // return colorWords;

  var myMap = {};
  colorWords.forEach(
    (el) => (myMap[el] = myMap[el] != undefined ? myMap[el] + 1 : 1)
  );
  return Object.keys(myMap).map((k) => {
    return { term: k, count: myMap[k] };
  });
}

/**
 * Return a dictionary in which the key is a tuple of [term_abbreviation, langugae_id] and the value is the term associated with the given term_abbreviation, language pair
 *
 * @param {array} langTermDict Array of objects containing mappings between langugae, term id, term abbreviation, and the actual term
 *
 * @returns object
 */
function getTermAbbrevToTermDict(langTermDict) {
  let termAbbrevTermDict = {};
  langTermDict.forEach((d) => {
    var key = [d.term_abbreviation, d.language_id].toString();
    termAbbrevTermDict[key] = d.term;
  });
  return termAbbrevTermDict;
}

function getLangToTermsDict(langTermDict) {
  let langDict = {};
  langTermDict.forEach((item) => {
    let langID = item.language_id;
    if (langID in langDict) {
      // console.log("id in dict already");

      // stores distinct terms used for the language
      let terms = langDict[langID];
      terms.push(item.term);
    } else {
      // console.log("id not in dict yet");
      langDict[langID] = [item.term];
    }
    // console.log("item is", item);
    // debugger;
  });
  console.log("lang dict is", langDict);
  // debugger;
  return langDict;
}

// function buildAllChipsData(chipTermDict, termAbbrevTermDict) {
//   var chipData = {};
//   var chips = new Set(chipTermDict.map((d) => d.chip_id));

//   chips.forEach((chipID) => {
//     // if chip ID does not exist in chip data yet
//     if (!(chipID in chipData)) {
//       chipData[chipID] = [];
//     }
//     chipTerms = getChipTermsByID(chipID, chipTermDict);
//     chipTerms.forEach((term) => {
//       var termDict = {};
//       termDict.chip_id = term.chip_id;
//       termDict.language_id = term.language_id;
//       termDict.speaker_id = term.speaker_id;
//       termDict.term_abbreviation = term.term_abbreviation;
//       key = [term.term_abbreviation, term.language_id];
//       termDict.term = termAbbrevTermDict[key];
//       chipData[chipID].push(termDict);
//     });
//   });
//   return chipData;
// }
