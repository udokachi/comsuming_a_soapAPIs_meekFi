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

  // static countryByCapital(jsonArguments) {
  //   let soapBody = Parser.parseJSONBodyToXML(jsonArguments);

  //   return `<soap: Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  //       <soap:Header/>
  //       <soap:Body>
  //           ${soapBody}
  //       </soap:Body>
  //       </soap:Envelope> `;
  // }
};

{/* <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <CapitalCityResponse xmlns="http://www.oorsprong.org/websamples.countryinfo">
      <CapitalCityResult>string</CapitalCityResult>
    </CapitalCityResponse>
  </soap:Body>
</soap:Envelope> */}