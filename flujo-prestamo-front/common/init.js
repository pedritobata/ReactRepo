const customerId = '18fb48fc-b674-4ff7-8b54-2005525e89d5';

/***************** INIT ***************** */

class NewLoanHTTPFetcherBanCo {
  baseUrl = 'https://n5develop.bcoctes.com.ar/api/v1/Customer';
  token =
    'eyJhbGciOiJSUzI1NiIsInR5cCI6ImF0K2p3dCJ9.eyJuYmYiOjE3MTQxNTQ5MDQsImV4cCI6MTcxNDE1NjcwNCwiaXNzIjoiaHR0cDovL3VzZXItc2VydmljZS5uNS5zdmMuY2x1c3Rlci5sb2NhbDo4MDgwIiwibmFtZSI6ImFkbWluIiwic3ViIjoiMWU3OTYzZWItZDM2YS00ODQ3LWEzMWMtYzg2MjlmOGNjZGViIiwiYXV0aF90aW1lIjoiMTcxNDE1NDkwNCIsImlkcCI6ImxvY2FsIiwicm9sZSI6IiIsInNwYS1lbWFpbCI6Ilp4UFdPOFVMcjV1MmJQUjdlVjNjd0FNbzlKNjRBUDY4RFY2djVIZHdpTVE9Iiwic3BhLXVzZXIiOiJnNk1qcngzRjF0QXAyZ2FURVc3YXY3M3BBU0pUVmV3UWZMK3JVMUpnaEFnPSIsInNwYS1rZXkiOiJXUGI0RUNDVC92WUlBMkhWUTg1U3Zxc0JBaUpWcEFKbXFaWjU3UkJwcHNNPSIsImF1ZCI6InVzciIsImNsaWVudF9pZCI6InVzZXJzLXNlcnZpY2UiLCJzY29wZSI6WyJvcGVuaWQiLCJiYURhIiwidXNyIl0sImFtciI6WyJwd2QiXX0.e4_xv4FlOqZRByMpwD_QASOvgNjtbIAx77OtzuPpZ5_IBQJMoWiKh6GnUeTPPaaEeAinFduCKToJVrp8fl3bZGjf4Rgx6qqt8BzXAWItS70urKf3lt1GwmfM8wEPUatmHw56-EnlVbUwpQZbg1Ba2gM5p3LKXjNUrjVV7vRZspedD2LdAbIhxCzpYUEqquaIDx8UQ_xApUxRlrUWiCUTSDy8WJMJm6nKtmO3ux5hT5461RHqr6u-c0SzeTsJZh8Lj5paSyQSJlraOU9tRslsz_LeWZn35mscfYCLZxtELF0GjERg2AOXlr6tz0F7bA7gh0J2iGMDJoseKCKyk8SaHQ';

  constructor() {
    this.configRequest();
  }

  configRequest() {
    this.headers = new Headers();
    this.headers.append('accept', 'text/plain');
    this.headers.append('Content-Type', 'application/json-patch+json');
    this.headers.append('Authorization', `Bearer ${this.token}`);
    this.requestOptions = {
      headers: this.headers,
      redirect: 'follow',
    };
  }

  encodeQueryData(data) {
    const ret = [];
    for (let d in data)
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    return ret.join('&');
  }

  get(path, params) {
    const queryParams = params ? `?${this.encodeQueryData(params)}` : '';
    const url = `${this.baseUrl}${path}${queryParams}`;
    return fetch(url, this.requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((error) => console.log('error', error));
  }
}

/* class NewLoanUtilsBanCo {
  constructor() {
    // super();
  }

  static createHtmlElement(elType, { text, cssClasses, id }) {
    const element = document.createElement(elType);
    if (id) {
      element.id = id;
    }
    if (cssClasses) {
      cssClasses.forEach((cssClass) => element.classList.add(cssClass));
    }
    if (text) {
      element.textContent = text;
    }

    return element;
  }
} */

class NewLoanStorageBanCo {
  constructor(customerId) {
    this.customerId = customerId;
  }

  buildIdentifier(fieldName) {
    return `newLoanBanCo-${this.customerId}-${fieldName}`;
  }

  saveSelectedCampaign(campaignId) {
    localStorage.setItem(this.buildIdentifier('campaign'), campaignId);
  }

  getSelectedCampaign() {
    localStorage.getItem(this.buildIdentifier('campaign'));
  }

  saveSelectedProduct(productId) {
    localStorage.setItem(this.buildIdentifier('product'), productId);
  }

  getSelectedProduct() {
    localStorage.getItem(this.buildIdentifier('product'));
  }
}

// window.newLoanBanCo = {};
// window.newLoanBanCo.NewLoanHTTPFetcher = NewLoanHTTPFetcherBanCo;
// window.newLoanBanCo.NewLoanUtils = NewLoanUtilsBanCo;
// window.newLoanBanCo.NewLoanStorage = NewLoanStorageBanCo;

console.log('PROPS =>', props)

/***************** SELECT CAMPIGN ***************** */


/***************** SELECT PRODUCT ***************** */


/***************** SELECT PLAN ***************** */