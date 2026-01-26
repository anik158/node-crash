import url from "url";


const urlString = 'https://google.com/search?q=nodejs+crash&lang=en#section1';
const parsedUrl = new URL(urlString);

/* Get protocol */
console.log('url:', parsedUrl);

/* Get format */

const formattedUrl = parsedUrl.toString();
console.log('Formatted URL:', formattedUrl);

/* meta url - File URL */
console.log('Import Meta URL:', import.meta.url);

/* Get import.meta.url */
const __filename = url.fileURLToPath(import.meta.url);
console.log('__filename:', __filename);

const searchParams = parsedUrl.searchParams;

/* Get search parameters */
console.log('Search Parameters:', searchParams);

/* Get specific search parameter */
const queryParam = searchParams.get('q');
console.log('Query Parameter (q):', queryParam);

/* Search Params append */
searchParams.append('newParam', 'newValue');
console.log('Updated Search Parameters:', parsedUrl.toString());

/* Search Params delete */
searchParams.delete('lang');
console.log('After Deleting lang Parameter:', parsedUrl.toString());

