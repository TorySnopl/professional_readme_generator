// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;
  switch (license){
    case 'none':
      badge = {name:'none', color: 'silver'};
      break;
    case 'afl-3.0':
      badge = {name: 'afl-3.0', color: 'white'};
      break;
    case 'apache-2.0':
      badge = {name: 'apache-2.0', color: 'maroon'};
      break;
    case 'artistic-2.0':
      badge = {name: 'artistic-2.0', color: 'red'};
      break;
    case 'bsl-1.0':
      badge = {name: 'bsl-1.0', color: 'purple'};
      break;
    case 'bsd-2-clause':
      badge = {name: 'bsd-2-clause', color: 'green'};
      break;
    case 'bsd-3-clause':
      badge = {name: 'bsd-3-clause', color: 'olive'};
      break;
    case 'bsd-3-clause-clear':
      badge = {name: 'bsd-3-clause-clear', color: 'yellow'};
      break;
    case 'bsd-4-clause':
      badge = {name: 'bsd-4-clause', color: 'navy'};
      break;
    case '0bsd':
      badge = {name: '0bsd', color: 'blue'};
      break;
    case 'cc':
      badge = {name: 'cc', color: 'lime'};
      break;
    case 'cc0-1.0':
      badge = {name: 'cc0-1.0', color: 'teal'};
      break;
    case 'cc-by-4.0':
      badge = {name: 'cc-by-4.0', color: 'aqua'};
      break;
    case 'cc-by-sa-4.0':
      badge = {name: 'cc-by-sa-4.0', color: 'fuchsia'};
      break;
    case 'wrfpl':
      badge = {name: 'wrfpl', color: 'aliceblue'};
      break;
    case 'ecl-2.0':
      badge = {name: 'ecl-2.0', color: 'antiquewhite'};
      break;
    case 'epl-1.0':
      badge = {name: 'epl-1.0', color: 'aquamarine'};
      break;
    case 'epl-2.0':
      badge = {name: 'epl-2.0', color: 'azure'};
      break;
    case 'eupl-1.1':
      badge = {name: 'eupl-1.1', color: 'beige'};
      break;
    case 'agpl-3.0':
      badge = {name: 'agpl-3.0', color: 'bisque'};
      break;
    case 'gpl':
      badge = {name: 'gpl', color: 'black'};
      break;
    case 'gpl-2.0':
      badge = {name: 'gpl-2.0', color: 'blanchedalmond'};
      break;
    case 'gpl-3.0':
      badge = {name: 'gpl-3.0', color: 'blue'};
      break;
    case 'lgpl':
      badge = {name: 'lgpl', color: 'brown'};
      break;
    case 'lgpl-2.1':
      badge = {name: 'lgpl-2.1', color: 'burlywood'};
      break;
    case 'lgpl-3.0':
      badge = {name: 'lgpl-3.0', color: 'cadetblue'};
      break;
    case 'isc':
      badge = {name: 'isc', color: 'chartreuse'};
      break;
    case 'lppl-1.3c':
      badge = {name: 'lppl-1.3c', color: 'coral'};
      break;
    case 'ms-pl':
      badge = {name: 'ms-pl', color: 'cornflowerblue'};
      break;
    case 'mit':
      badge = {name: 'mit', color: 'crimson'};
      break;
    case 'mpl-2.0':
      badge = {name: 'mpl-2.0', color: 'cyan'};
      break;
    case 'osl-3.0':
      badge = {name: 'osl-3.0', color: 'darkblue'};
      break;
    case 'postgresql':
      badge = {name: 'postgresql', color: 'darkgreen'};
      break;
    case 'ofl-1.1':
      badge = {name: 'ofl-1.1', color: 'darkorchid'};
      break;
    case 'ncsa':
      badge = {name: 'ncsa', color: 'darkslategray'};
      break;
    case 'unlicense':
      badge = {name: 'unlicense', color: 'firebrick'};
      break;
    case 'zlib':
      badge = {name: 'zlib', color: 'gold'};
      break;
  }
  if (!license){
    return ""} else {
      return `https://img.shields.io/badge/${badge.name}${badge.color}`
    }
}
 
 	 
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let path;

  switch (license){
    case 'none':
      
      break;
    case 'afl-3.0':
      path = 'afl-3.0';
      break;
    case 'apache-2.0':
      path = 'apache-2.0';
      break;
    case 'artistic-2.0':
      path = 'artistic-2.0';
      break;
    case 'bsl-1.0':
      path = 'bsl-1.0';
      break;
    case 'bsd-2-clause':
      path = 'bsd-2-clause';
      break;
    case 'bsd-3-clause':
      path ='bsd-3-clause';
      break;
    case 'bsd-3-clause-clear':
      path = 'bsd-3-clause-clear';
      break;
    case 'bsd-4-clause':
      path = 'bsd-4-clause';
      break;
    case '0bsd':
      path = '0bsd';
      break;
    case 'cc':
      path = 'cc';
      break;
    case 'cc0-1.0':
      path = 'cc0-1.0';
      break;
    case 'cc-by-4.0':
      path = 'cc-by-4.0';
      break;
    case 'cc-by-sa-4.0':
      path = 'cc-by-sa-4.0';
      break;
    case 'wrfpl':
      path = 'wrfpl';
      break;
    case 'ecl-2.0':
      path = 'ecl-2.0';
      break;
    case 'epl-1.0':
      path = 'epl-1.0';
      break;
    case 'epl-2.0':
      path = 'epl-2.0';
      break;
    case 'eupl-1.1':
      path = 'eupl-1.1';
      break;
    case 'agpl-3.0':
      path = 'agpl-3.0';
      break;
    case 'gpl':
      path = 'gpl';
      break;
    case 'gpl-2.0':
      path = 'gpl-2.0';
      break;
    case 'gpl-3.0':
      path = 'gpl-3.0';
      break;
    case 'lgpl':
      path = 'lgpl';
      break;
    case 'lgpl-2.1':
      path = 'lsgpl-2.1';
      break;
    case 'lgpl-3.0':
      path = 'lgpl-3.0';
      break;
    case 'isc':
      path = 'isc';
      break;
    case 'lppl-1.3c':
      path = 'lppl-1.3c';
      break;
    case 'ms-pl':
      path = 'ms-pl';
      break;
    case 'mit':
      path = 'mit';
      break;
    case 'mpl-2.0':
      path = 'mpl-2.0';
      break;
    case 'osl-3.0':
      path = 'osl-3.0';
      break;
    case 'postgresql':
      path = 'postgresql';
      break;
    case 'ofl-1.1':
      path = 'ofl-1.1';
      break;
    case 'ncsa':
      path = 'ncsa';
      break;
    case 'unlicense':
      path = 'unlicense';
      break;
    case 'zlib':
      path = 'zlib';
      break;
  }
if(license === 'none'){
  return ""
}else{
  return `https://choosealicense.com/licenses/${path}`;}

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const badge = renderLicenseBadge(license);
  return `# License ${license}\n${badge}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n${renderLicenseSection(data.license)}\n`;
}

module.exports = {renderLicenseBadge, renderLicenseLink, renderLicenseSection, generateMarkdown};
