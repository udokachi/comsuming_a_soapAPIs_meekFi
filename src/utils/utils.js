import Parser from '../parser/parser.js'

export default class Formatter {
  static countryByName(jsonArguments) {
    let soapBody = Parser.parseJSONBodyToXML(jsonArguments);

    return `<soap: Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Header/>
        <soap:Body>
            ${soapBody}
        </soap:Body>
        </soap:Envelope> `;
  }
};

