import jsonxml from 'jsontoxml';
import {parseString} from 'xml2js';
import {promisify} from 'util';

const promisfiedParseString = promisify(parseString);

export default class Parser {
  static parseJSONBodyToXML(jsonArgument) {
    return jsonxml(jsonArgument, { html: true });
  }

  static async convertXMLToJSON(xmlMessage) {
    const options = { trim: true, explicitArray: false, explicitRoot: false };
    return promisfiedParseString(xmlMessage, options);
  }
};


