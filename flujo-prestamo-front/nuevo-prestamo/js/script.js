// const customerId = '18fb48fc-b674-4ff7-8b54-2005525e89d5';
const props = {
  token:
    "eyJhbGciOiJSUzI1NiIsInR5cCI6ImF0K2p3dCJ9.eyJuYmYiOjE3MTQxNzE2MzEsImV4cCI6MTcxNDE3MzQzMSwiaXNzIjoiaHR0cDovL3VzZXItc2VydmljZS5uNS5zdmMuY2x1c3Rlci5sb2NhbDo4MDgwIiwibmFtZSI6ImFkbWluIiwic3ViIjoiMWU3OTYzZWItZDM2YS00ODQ3LWEzMWMtYzg2MjlmOGNjZGViIiwiYXV0aF90aW1lIjoiMTcxNDE3MTYzMSIsImlkcCI6ImxvY2FsIiwicm9sZSI6IiIsInNwYS1lbWFpbCI6Ijh4eFVSMndqY0ZxSUtBTURyYzE1cHBQakxNVEJLKzZhZnplamhkSVRKc3c9Iiwic3BhLXVzZXIiOiJrYXdVakkzdVdTVkZ6M1NIVzV2SEdFUGZOOGZsRW1Wa2lKa0R3aTVTWC9ZPSIsInNwYS1rZXkiOiJTclNsQkQweng0bG0rNHlzZ1JpdEU3dXA5djRrWENFeGs4UytNQW0yUzNFPSIsImF1ZCI6InVzciIsImNsaWVudF9pZCI6InVzZXJzLXNlcnZpY2UiLCJzY29wZSI6WyJvcGVuaWQiLCJiYURhIiwidXNyIl0sImFtciI6WyJwd2QiXX0.Wd3y2DlAcFM7QlyZl9XOprpewXVkP75T0bZ7FgXCVkuFajjlGsFdkcmly6JMr2LrkPnixRxY9Mnwm2b4OKt1vf-RdL68FQuoELVtxviu901iUcuCk7_irXXGhDwrpD3xdfytAtgmmh2es9BHeUtZMVGWCZk9L990OCXKUl1jDZtUOpmpDGtbBPlkIhYEFjUpyqsjSJgUt9yRD_Fs56ZIu-rhmsDJ7yjAEmBq1njptArSgys-2V96b9b0rBcmegeZBbzpodQgGkU2yQGgek-HVgJaSxc0pr5IqsnNOMKjliP6cl0XC-a053yF6rHyJezSu-0G-eH8QMmHCdzr6RagNw",
  customerId: "1e7963eb-d36a-4847-a31c-c8629f8ccdeb",
};

const dummyData = {
  data: {
    documentTypes: [
      {
        code: "55",
        description: "CNV Authorization Number",
      },
      {
        code: "98",
        description: "Correspondent Abroad",
      },
      {
        code: "13",
        description: "Court",
      },
      {
        code: "14",
        description: "File Number",
      },
      {
        code: "12",
        description: "Main File",
      },
      {
        code: "1",
        description: "Tax ID",
      },
    ],
  },
  metadata: "",
};

const SELECT_CAMPAIGNS_SCREEN_ID = "id_BanCo_newLoan_SelectCampaigns_screen";
const SELECT_PRODUCTS_SCREEN_ID = "id_BanCo_newLoan_SelectProducts_screen";

let renderer;

/***************** UTILS ***************** */
function removeListenersFromElement(element) {
  const newElement = element.cloneNode(true);
  element.parentNode.replaceChild(newElement, element);
  return newElement;
}

/***************** INIT ***************** */

class NewLoanHTTPFetcher {
  baseUrl = "https://n5develop.bcoctes.com.ar/api/v1/Customer";

  constructor() {
    this.configRequest();
  }

  configRequest() {
    const headers = new Headers();
    headers.append("accept", "text/plain");
    headers.append("Content-Type", "application/json-patch+json");
    headers.append("Authorization", `Bearer ${props.token}`);
    this.requestOptions = {
      headers,
      redirect: "follow",
    };
  }

  encodeQueryData(data) {
    const ret = [];
    for (let d in data)
      ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
    return ret.join("&");
  }

  get(path, params) {
    return dummyData; // TODO: Eliminar esta linea!!!!!!
    const queryParams = params ? `?${this.encodeQueryData(params)}` : "";
    const url = `${this.baseUrl}${path}${queryParams}`;
    return fetch(url, this.requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((error) => {
        console.log("error en fetcher", error);
        return [];
      });
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

class NewLoanStorage {
  /* selectedCampaign = '';
  selectedProduct = '';
 */
  constructor(customerId) {
    this.customerId = customerId;
  }

  buildIdentifier(fieldName) {
    return `newLoanBanCo-${this.customerId}-${fieldName}`;
  }

  saveCurrentForm(screenId) {
    localStorage.setItem(this.buildIdentifier("currentForm"), screenId);
  }

  get currentForm() {
    return localStorage.getItem(this.buildIdentifier("currentForm"));
  }

  saveSelectedCampaign(campaignId) {
    console.log("setter", campaignId);
    // this.selectedCampaign = campaignId;
    localStorage.setItem(this.buildIdentifier("campaign"), campaignId);
  }

  get selectedCampaign() {
    return localStorage.getItem(this.buildIdentifier("campaign"));
  }

  saveSelectedProduct(productId) {
    // this.selectedProduct = productId
    localStorage.setItem(this.buildIdentifier("product"), productId);
  }

  get selectedProduct() {
    return localStorage.getItem(this.buildIdentifier("product"));
  }
}

// window.newLoanBanCo = {};
// window.newLoanBanCo.NewLoanHTTPFetcher = NewLoanHTTPFetcherBanCo;
// window.newLoanBanCo.NewLoanUtils = NewLoanUtilsBanCo;
// window.newLoanBanCo.NewLoanStorage = NewLoanStorageBanCo;

console.log("PROPS =>", props);

/***************** SELECT CAMPIGN ***************** */
/**
 * Clase para formulario de seleccionar campaña
 */
class SelectCampaigns {
  constructor(customerId) {
    this.customerId = customerId;
    if (this.init()) {
      this.render();
    }
  }

  init() {
    try {
      this.fetcher = new NewLoanHTTPFetcher();
      // this.utils = new NewLoanUtilsBanCo();
      this.storage = new NewLoanStorage(this.customerId);
      return true;
    } catch (err) {
      console.log("Error al configurar formulario", err);
      return false;
    }
  }

  async render() {
    try {
      this.storage.saveCurrentForm(SELECT_CAMPAIGNS_SCREEN_ID);
      this.list = document.getElementById("id_selectCampaigns_list");
      const campaigns = await this.fetcher.get(
        `/Customers/document-types/?personType=PJ`
      );
      const temp = campaigns.data.documentTypes; // TODO cambiar por el real campo!!
      const noResultsEl = document.createElement("p", {
        text: "No se encontraron campañas disponibles",
      });
      this.list.replaceChildren();
      if (!temp || !temp.length) {
        this.list.appendChild(noResultsEl);
      } else {
        temp.forEach((camp) => {
          const campItemEl = document.createElement("li");
          campItemEl.classList.add("newLoan__selectionScreen__listItem");
          campItemEl.id = camp.code;
          campItemEl.addEventListener("click", (ev) => {
            this.storage.saveSelectedCampaign(campItemEl.id);
            renderer.navigate(SELECT_PRODUCTS_SCREEN_ID);
            // alert('seleccionado:' + this.storage.selectedCampaign);
          });
          const titleEl = document.createElement("h3");
          titleEl.textContent = camp.description;
          campItemEl.appendChild(titleEl);
          const startDateEl = document.createElement("p");
          startDateEl.textContent = `Fecha inicio: ${camp.code}`;
          campItemEl.appendChild(startDateEl);
          const endDateEl = document.createElement("p");
          endDateEl.textContent = `Fecha fin: ${camp.code}`;
          campItemEl.appendChild(endDateEl);

          /*  const link = document.createElement("a");
          link.classList.add("selectionScreen__listItem");
          link.setAttribute("href", "#");
          link.appendChild(campItemEl); */

          this.list.appendChild(campItemEl);
        });
      }
    } catch (err) {
      console.log("Error al renderizar Select campaigns", err);
    }
  }
}

/***************** SELECT PRODUCT ***************** */
/**
 * Clase para formulario de seleccionar producto de una campaña
 */
class SelectProducts {
  constructor(customerId) {
    this.customerId = customerId;
    if (this.init()) {
      this.render();
    }
  }

  init() {
    try {
      this.list = document.getElementById("id_selectProducts_list");
      if (!this.list) throw new Error();

      this.fetcher = new NewLoanHTTPFetcher();
      // this.utils = new NewLoanUtilsBanCo();
      this.storage = new NewLoanStorage(this.customerId);
      return true;
    } catch (err) {
      console.log("Error al configurar formulario", err);
      return false;
    }
  }

  async render() {
    this.storage.saveCurrentForm(SELECT_PRODUCTS_SCREEN_ID);
    const campaignId = this.storage.selectedCampaign;
    // TODO agregar el param id de campaña a la petición
    const products = await this.fetcher.get(
      `/Customers/document-types/?personType=PJ`
    );
    console.log("products =>", products);
    const temp = products.data.documentTypes; // TODO cambiar por el real campo!!
    const noResultsEl = document.createElement("p", {
      text: "No se encontraron productos disponibles",
    });
    if (!temp || !temp.length) {
      this.list.appendChild(noResultsEl);
    } else {
      console.log("this.list =>", this.list);
      this.list.replaceChildren();
      temp.forEach((prod) => {
        const prodItemEl = document.createElement("li");
        prodItemEl.classList.add("newLoan__selectionScreen__listItem");
        prodItemEl.id = prod.code;
        prodItemEl.addEventListener("click", (ev) => {
          this.storage.saveSelectedProduct(prodItemEl.id);
          // alert('seleccionado:' + prodItemEl.id);
        });
        const titleEl = document.createElement("h3");
        titleEl.textContent = prod.description;
        prodItemEl.appendChild(titleEl);
        const estadoEl = document.createElement("p");
        estadoEl.textContent = `Estado: ${prod.code}`;
        prodItemEl.appendChild(estadoEl);
        const canalEl = document.createElement("p");
        canalEl.textContent = `Canal: ${prod.code}`;
        prodItemEl.appendChild(canalEl);
        const sucursalEl = document.createElement("p");
        sucursalEl.textContent = `Sucursal: ${prod.code}`;
        prodItemEl.appendChild(sucursalEl);

        /* const link = document.createElement("a");
        link.classList.add("selectProduct__listItem");
        link.setAttribute("href", "/seleccionar-plan/html/index.html");
        link.appendChild(prodItemEl); */

        this.list.appendChild(prodItemEl);
      });
    }
  }
}

/***************** SELECT PLAN ***************** */



// mantener el orden en que aparecen las pantallas para la correcta navegacion
const configScreens = [
  {
    id: SELECT_CAMPAIGNS_SCREEN_ID,
    Component: SelectCampaigns,
    name: "selectCampaignsScreen",
  },
  {
    id: SELECT_PRODUCTS_SCREEN_ID,
    Component: SelectProducts,
    name: "selectProductsScreen",
  },
];

/***************** HEADER ***************** */
/**
 * Clase para mostrar un header y opcion de regresar al formulario anterior
 */
class Header {
  constructor(customerId) {
    this.customerId = customerId;
    this.init();
    this.render();
  }

  init() {
    this.storage = new NewLoanStorage(this.customerId);
  }

  render() {
    const arrow = document.getElementById("id_BanCo_newLoan_LeftArrow");
    const newArrow = removeListenersFromElement(arrow);
    newArrow.addEventListener("click", () => {
      console.log('currFormIdx =>', arrow);
      const currFormIdx = configScreens.findIndex(
        (screen) => screen.id === this.storage.currentForm
      );
      if (currFormIdx > 0) {
        renderer.navigate(configScreens[currFormIdx - 1].id);
      }
    });
  }
}

/***************** RENDERER ***************** */
class Renderer {
  constructor(customerId) {
    this.customerId = customerId;
    this.init();
  }

  init() {
    new Header(this.customerId);
    this.navigate(SELECT_CAMPAIGNS_SCREEN_ID);
  }

  navigate(screenId) {
    try {
      configScreens.forEach((screen) => {
        // console.log("screen =>", screen);
        if (screen.id === screenId) {
          this[screen.name] = new screen.Component(this.customerId);
          this.mount(screen.id);
          if (screen.id === SELECT_CAMPAIGNS_SCREEN_ID) {
            this.unmount("id_BanCo_newLoan_LeftArrow");
          } else {
            this.mount("id_BanCo_newLoan_LeftArrow");
            // header.setBackListener(() => this.navigate());
          }
        } else {
          this[screen.name] = null;
          this.unmount(screen.id);
        }
      });
    } catch (err) {
      console.log("Error al navegar", err);
    }
  }

  mount(screenId) {
    try {
      const currentScreenEl = document.getElementById(screenId);
      currentScreenEl.style.display = "block";
    } catch (err) {
      console.log("Error al renderizar elemento");
    }
  }

  unmount(screenId) {
    try {
      const currentScreenEl = document.getElementById(screenId);
      currentScreenEl.style.display = "none";
    } catch (err) {
      console.log("Error al desmontar elemento");
    }
  }
}

/***************** RUN !!! ***************** */
renderer = new Renderer(props.customerId);
