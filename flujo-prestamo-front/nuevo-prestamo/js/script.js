const propsFake = {
  token:
    "eyJhbGciOiJSUzI1NiIsInR5cCI6ImF0K2p3dCJ9.eyJuYmYiOjE3MTYzMDg5MjIsImV4cCI6MTcxNjMxMDcyMiwiaXNzIjoiaHR0cDovL3VzZXItc2VydmljZS5uNS5zdmMuY2x1c3Rlci5sb2NhbDo4MDgwIiwibmFtZSI6ImFkbWluIiwic3ViIjoiMWU3OTYzZWItZDM2YS00ODQ3LWEzMWMtYzg2MjlmOGNjZGViIiwiYXV0aF90aW1lIjoiMTcxNjMwODkyMiIsImlkcCI6ImxvY2FsIiwicm9sZSI6IiIsInNwYS1lbWFpbCI6IjVYQ3doQmJBVmVSSjN4NnNGYUZ6aHUrci9yWnVUbFRJQVlZakF5dFQ2UmM9Iiwic3BhLXVzZXIiOiJRTCtzWk9PN0ZHWjROeWhiMDB4SVU5TVdhM3grWTNudklnY1o5aUhNa2FFPSIsInNwYS1rZXkiOiJiK1RTT3FDWTVqSGNnZTRseG9ycUU4ektuclVmcUZhdkcvcWJXNGlSYTM0PSIsImF1ZCI6InVzciIsImNsaWVudF9pZCI6InVzZXJzLXNlcnZpY2UiLCJzY29wZSI6WyJvcGVuaWQiLCJiYURhIiwidXNyIl0sImFtciI6WyJwd2QiXX0.iFNvKyv_BF9Tylj1txKUlQBHRsP9b1ab77hfaMWK1b_R2ZZ8WpCt0f0-rQS99tWICiFB3MR9DFvHgysrU3PDTeKBCj6cIrJjXcflOtRnsVYbdADroZZ4ZCKefUpi_c8YR0PLuDzeAwyAFDxLMuoKDuez6j7aUwoYO8-Hypv4TlV5UDhxpKceXunmk1fgxOlYOn5lN9nl-NZQOYIKqbMh58pxtp0DsH3AE-jpXQGB3Yna_QY_Z9ODjMxOnuocNjrqjUsCWx-qjwjMuti6DA1Vc-8UHEejkYw1f-l7c8JSPS_ZL1h2Wx500rumyBcQ_BIH0j8NwSjQzO4ms7hrYti-FA",
  customerId: "0b14969c-7251-40a2-83c3-4ee8f96e8792",
};

const dummyCampanas = {
  cuil: "20045149715",
  emailList: ["mullersofia@gmail.com"],
  campaigns: [
    {
      campaignId: "219",
      description: "PMO ADM PBCA PP1 + PASIVO + JUBNAC - FEB-JUN 2023",
      startDate: "2023-04-15T00:00:00",
      endDate: "2025-04-15T00:00:00",
    },
    {
      campaignId: "221",
      description: "AGUINALDO-Asalariados Enero-Junio 2023",
      startDate: "2023-05-01T00:00:00",
      endDate: "2025-05-01T00:00:00",
    },
  ],
};

const dummyProductos = [
  {
    campaignId: "219",
    productId: "642677",
    description: "JUBNAC",
    state: "H",
    channel: "ELECTRONICO",
    branch: "99",
    account: "1603",
    subAccount: "1",
    operationType: "7",
    module: "21",
    currency: "80",
  },
];

const dummyRecalculo = [
  {
    campaignId: "219",
    productId: "642677",
    totalAmount: 130000.07,
    installmentQuantity: 24,
    installmentAmount: 15076.776,
    tna: 101.0,
    tem: 8.301369863013708,
    tea: 163.86374594874832,
    cft: 0.0,
  },
  {
    campaignId: "219",
    productId: "642677",
    totalAmount: 130000.07,
    installmentQuantity: 48,
    installmentAmount: 13470.389,
    tna: 101.0,
    tem: 8.301369863013708,
    tea: 163.86374594874832,
    cft: 0.0,
  },
  {
    campaignId: "219",
    productId: "642677",
    totalAmount: 130000.07,
    installmentQuantity: 60,
    installmentAmount: 13325.868,
    tna: 101.0,
    tem: 8.301369863013708,
    tea: 163.86374594874832,
    cft: 0.0,
  },
];

const dummyPlanes = [
  {
    campaignId: "219",
    productId: "642677",
    totalAmount: 190400.0,
    installmentQuantity: 24,
    installmentAmount: 22081.66,
    tna: 101.0,
    tem: 8.301369863013708,
    tea: 163.86374594874832,
    cft: 0.0,
  },
  {
    campaignId: "219",
    productId: "642677",
    totalAmount: 213100.0,
    installmentQuantity: 48,
    installmentAmount: 22081.06,
    tna: 101.0,
    tem: 8.301369863013708,
    tea: 163.86374594874832,
    cft: 0.0,
  },
  {
    campaignId: "219",
    productId: "642677",
    totalAmount: 215400.0,
    installmentQuantity: 60,
    installmentAmount: 22079.92,
    tna: 101.0,
    tem: 8.301369863013708,
    tea: 163.86374594874832,
    cft: 0.0,
  },
];

const dummyConfirmation = {
  certificate: "236658",
  errorCode: "0",
  errorDescription: "El prestamo no se encuentra habilitado",
  loanDate: "2024-05-06T15:20:00",
  amount: 190400.0,
  accountNumber: "1603",
  subAccountNumber: "1",
  installmentQuantity: 24,
  installmentAmount: 22081.66,
  tna: 101.0,
  tem: 8.301369863013708,
  tea: 163.86374594874832,
  cft: 0.0,
};

/***************** IDS ***************** */
const ID_MAIN_CONTAINER = "id_BanCo_newLoan_mainContainer";
const ID_CONTENT_CONTAINER = "id_BanCo_newLoan_contentContainer";

const SELECT_CAMPAIGN_SCREEN_ID = "id_BanCo_newLoan_SelectCampaign_screen";
const SELECT_PRODUCT_SCREEN_ID = "id_BanCo_newLoan_SelectProduct_screen";
const SELECT_PLAN_SCREEN_ID = "id_BanCo_newLoan_SelectPlan_screen";
const CONFIRM_LOAN_SCREEN_ID = "id_BanCo_newLoan_ConfirmLoan_screen";

const ID_LEFT_ARROW = "id_BanCo_newLoan_LeftArrow";
const ID_HEADER_TITLE = "id_BanCo_newLoan_headerTitle";
const ID_SELECT_CAMPAIGN_LIST = "id_BanCo_newLoan_selectCampaign_list";
const ID_SELECT_PRODUCT_LIST = "id_BanCo_newLoan_selectProduct_list";
const ID_SELECT_PLAN_LIST = "id_BanCo_newLoan_selectPlan_list";
const ID_SELECT_PLAN_OTRO_MONTO_FORM =
  "id_BanCo_newLoan_selectPlan_otroMontoForm";
const ID_SELECT_PLAN_OTRO_MONTO_FORM_INPUT =
  "id_BanCo_newLoan_selectPlan_otroMontoForm-input";
const ID_SELECT_PLAN_OTRO_MONTO_BUTTON =
  "id_BanCo_newLoan_selectPlan_otroMontoButton";
const ID_SELECT_PLAN_OTRO_MONTO_CANCELAR =
  "id_BanCo_newLoan_selectPlan_otroMontoCancelar";
const ID_SELECT_PLAN_OTRO_MONTO_CALCULAR =
  "id_BanCo_newLoan_selectPlan_otroMontoCalcular";
const ID_LINK_VIEW_PRE_QUALIFIED =
  "id_BanCo_newLoan_selectPlan_viewPreQualified";
const ID_SELECT_PLAN_OTRO_MONTO_BUTTON_CONTAINER =
  "id_BanCo_newLoan_selectPlan_otroMontoButtonContainer";
const ID_SELECT_PLAN_OTRO_MONTO_TEXT =
  "id_BanCo_newLoan_selectPlan_otroMontoText";
const ID_SELECT_PLAN_EMAIL_CONTAINER =
  "id_BanCo_newLoan_selectPlan_emailContainer";
const ID_CONFIRM_LOAN_INFO = "id_BanCo_newLoan_ConfirmLoan_info";
const ID_CONFIRM_LOAN_INFO_HEADER = "id_BanCo_newLoan_ConfirmLoan_infoHeader";
const ID_CONFIRM_LOAN_INFO_DATA_CONTAINER =
  "id_BanCo_newLoan_ConfirmLoan_infoDataContainer";

const ID_MODAL_CONTAINER = "id_BanCo_newLoan_modal";
const ID_MODAL_BUTTON_CANCEL = "id_BanCo_newLoan_modal_cancelar";
const ID_MODAL_BUTTON_ACCEPT = "id_BanCo_newLoan_modal_aceptar";
const ID_MODAL_MESSAGE = "id_BanCo_newLoan_modal_message";
const ID_MODAL_CONTENT = "id_BanCo_newLoan_modal_content";
const ID_MODAL_CUSTOM_CONTENT = "id_BanCo_newLoan_modal_customContent";
const ID_BACKDROP = "id_BanCo_newLoan_backdrop";

const ID_ERROR_BANNER = "id_BanCo_newLoan_errorBanner";
const ID_SPINNER_TEMPLATE = "id_BanCo_newLoan_spinnerTemplate";
const ID_SPINNER = "id_BanCo_newLoan_spinner";

/***************** UTILS ***************** */
function removeListenersFromElement(element) {
  const newElement = element.cloneNode(true);
  element.parentNode.replaceChild(newElement, element);
  return newElement;
}

function setSpinner(parentId, cssClasses) {
  if ("content" in document.createElement("template")) {
    const spinner = document.getElementById(ID_SPINNER_TEMPLATE);
    const parent = document.getElementById(parentId);
    const spinnerClone = spinner.content.cloneNode(true);
    if (cssClasses?.length) {
      cssClasses.forEach((css) => {
        spinnerClone.classList.add(css);
      });
    }
    parent.appendChild(spinnerClone);
  }
}

function showErrorBanner(message, renderer, duration = 3000) {
  const timer = setTimeout(() => {
    renderer.unmount(ID_ERROR_BANNER);
    if (timer) clearInterval(timer);
  }, duration);
  const closeBtn = document.querySelector(`#${ID_ERROR_BANNER} div span`);
  const newCloseBtn = removeListenersFromElement(closeBtn);
  newCloseBtn.addEventListener("click", () => {
    if (timer) clearInterval(timer);
    renderer.unmount(ID_ERROR_BANNER);
  });
  const errorMessage = document.querySelector(`#${ID_ERROR_BANNER} div p`);
  errorMessage.textContent = message;
  renderer.mount(ID_ERROR_BANNER);
}

function showModal(
  renderer,
  { message, content, onAccepted = () => {}, onCanceled = () => {} }
) {
  renderer.mount(ID_BACKDROP);
  renderer.mount(ID_MODAL_CONTAINER);
  const messageEl = document.getElementById(ID_MODAL_MESSAGE);
  messageEl.textContent = message;
  if (content) {
    const contentEl = document.getElementById(ID_MODAL_CUSTOM_CONTENT);
    contentEl.replaceChildren();
    contentEl.appendChild(content);
  }

  const cancelBtn = document.getElementById(ID_MODAL_BUTTON_CANCEL);
  const newCancelBtn = removeListenersFromElement(cancelBtn);
  newCancelBtn.addEventListener("click", async (ev) => {
    renderer.unmount(ID_BACKDROP);
    renderer.unmount(ID_MODAL_CONTAINER);
    await onCanceled(ev);
  });
  const acceptBtn = document.getElementById(ID_MODAL_BUTTON_ACCEPT);
  const newAcceptBtn = removeListenersFromElement(acceptBtn);
  newAcceptBtn.addEventListener("click", async (ev) => {
    renderer.unmount(ID_BACKDROP);
    renderer.unmount(ID_MODAL_CONTAINER);
    await onAccepted(ev);
  });
}

/**
 * formatea fechas a dd-mes-yyyy
 * @param {string} date en formato yyyy-mm-ddTime.
 * @return {string} fecha en formato dd-<mes en letras>-yyyy
 */
function formatDate(date) {
  const months = {
    1: "Ene",
    2: "Feb",
    3: "Mar",
    4: "Abr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Ago",
    9: "Set",
    10: "Oct",
    11: "Nov",
    12: "Dic",
  };
  try {
    const dateArr = date.split("T")[0].split("-");
    const day = Number(dateArr[2]);
    const month = months[Number(dateArr[1])];
    const year = dateArr[0];
    return `${day}-${month}-${year}`;
  } catch (err) {
    console.log("Error de formato de fecha", err);
    return date;
  }
}

/**
 * formatea cantidades al formato requerido por BanCo
 * @param {string} amount.
 * @return {string} formato de BanCo
 */
function formatAmount(amount, currency = "$") {
  if (/[0-9]+/.test(Number(amount)))
    return `${currency} ${formatNumber(amount)}`;
  return amount;
}

function formatNumber(
  number,
  decimals = 2,
  decPoint = ",",
  thousandsSep = "."
) {
  if (number === 0) return number;
  number = `${number}`.replace(/[^0-9+\-Ee.]/g, "");
  const n = !isFinite(+number) ? 0 : +number;
  const prec = !isFinite(+decimals)
    ? number % 1 === 0
      ? 0
      : 2
    : Math.abs(number % 1 === 0 ? 0 : decimals);
  const sep = thousandsSep;
  const dec = decPoint;
  let s = "";
  const toFixedFix = (n, prec) => {
    if (`${n}`.indexOf("e") === -1) {
      return +`${Math.round(`${n}e+${prec}`)}e-${prec}`;
    }
    const arr = `${n}`.split("e");
    let sig = "";
    if (+arr[1] + prec > 0) {
      sig = "+";
    }
    return (+`${Math.round(
      `${+arr[0]}e${sig}${+arr[1] + prec}`
    )}e-${prec}`).toFixed(prec);
  };
  s = (prec ? toFixedFix(n, prec).toString() : `${Math.round(n)}`).split(".");
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }
  return s.join(dec);
}

function validateEmail(email) {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}

/***************** SERVICES ***************** */
class NewLoanHTTPFetcher {
  // baseUrl = "https://n5develop.bcoctes.com.ar/api/v1/integration/flow/loan";
  baseUrl = `${props?.config?.API_URL}/v1/integration/flow/loan`;

  constructor(renderer) {
    this.renderer = renderer;
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
      timeout: 2000,
    };
  }

  encodeQueryData(data) {
    const ret = [];
    for (let d in data)
      ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
    return ret.join("&");
  }

  async get(path, params) {
    /* const controller = new AbortController();
    const idTimer = setTimeout(() => controller.abort(), 3000); */

    const queryParams = params ? `?${this.encodeQueryData(params)}` : "";
    const url = `${this.baseUrl}${path}${queryParams}`;
    try {
      const response = await fetch(url, {
        ...this.requestOptions,
        // signal: controller.signal,
      });
      if (!response.ok) {
        if(response.status === 401) {
          showErrorBanner("Su sesión ha expirado, por favor vuelva a iniciar sesión", this.renderer, 10000);
          return;
        }
        throw new Error("No se obtuvo respuesta del servicio");
      }
      // clearTimeout(idTimer);
      const data = await response.json();
      if (
        (typeof data === "object" && Object.keys(data).length === 0) ||
        (Array.isArray(data) && data.length === 0)
      ) {
        throw new Error("No se obtuvo resultados");
      }

      return data;
    } catch (err) {
      console.log("Error en fetcher", err);
      /* if (path.includes("campaigns")) {
        return dummyCampanas;
      }
      if (path.includes("products")) {
        return dummyProductos;
      }
      if (path.includes("plans")) {
        return dummyPlanes;
      }
      if (path.includes("recalculate")) {
        return dummyRecalculo;
      }
      if (path.includes("confirmation")) {
        return dummyConfirmation;
      } */

      return null;
    }
  }

  async post(path = "", payload) {
    /* const controller = new AbortController();
    const idTimer = setTimeout(() => controller.abort(), 20000); */

    const strPayload = payload ? JSON.stringify(payload) : "";
    const url = `${this.baseUrl}${path}`;
    try {
      const response = await fetch(url, {
        ...this.requestOptions,
        // signal: controller.signal,
        method: "POST",
        body: strPayload,
      });
      if (!response.ok) {
        if(response.status === 401) {
          showErrorBanner("Su sesión ha expirado, por favor vuelva a iniciar sesión", this.renderer, 10000)
        }
        throw new Error("No se obtuvo respuesta del servicio");
      }
      // clearTimeout(idTimer);
      const data = await response.json();
      if (
        (typeof data === "object" && Object.keys(data).length === 0) ||
        (Array.isArray(data) && data.length === 0)
      ) {
        throw new Error("No se obtuvo resultados");
      }

      return data;
    } catch (err) {
      console.log("Error en fetcher", err);
      // return dummyConfirmation;
      return null;
    }
  }
}

class NewLoanStorage {
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
    localStorage.setItem(this.buildIdentifier("campaign"), campaignId);
  }

  get selectedCampaign() {
    return localStorage.getItem(this.buildIdentifier("campaign"));
  }

  saveSelectedProduct(product) {
    localStorage.setItem(
      this.buildIdentifier("product"),
      JSON.stringify(product)
    );
  }

  get selectedProduct() {
    return JSON.parse(localStorage.getItem(this.buildIdentifier("product")));
  }

  saveAnotherAmount(amount) {
    localStorage.setItem(this.buildIdentifier("anotherAmount"), amount);
  }

  get anotherAmount() {
    return localStorage.getItem(this.buildIdentifier("anotherAmount"));
  }

  saveCustomerData(customerData) {
    localStorage.setItem(
      this.buildIdentifier("customerData"),
      JSON.stringify(customerData)
    );
  }

  get customerData() {
    return JSON.parse(
      localStorage.getItem(this.buildIdentifier("customerData"))
    );
  }

  saveConfirmData(confirmData) {
    localStorage.setItem(
      this.buildIdentifier("confirmData"),
      JSON.stringify(confirmData)
    );
  }

  get confirmData() {
    return JSON.parse(
      localStorage.getItem(this.buildIdentifier("confirmData"))
    );
  }

  reset() {
    this.saveCurrentForm("");
    this.saveSelectedCampaign("");
    this.saveSelectedProduct("");
    this.saveAnotherAmount("");
    this.saveConfirmData("");
    this.saveCustomerData("");
  }
}

// console.log("PROPS =>", props);

/***************** SELECT CAMPAIGN ***************** */
/**
 * Clase para formulario de seleccionar campaña
 */
class SelectCampaign {
  constructor(customerId, renderer) {
    this.customerId = customerId;
    this.renderer = renderer;
    if (this.init()) {
      this.render();
    }
  }

  init() {
    try {
      this.fetcher = new NewLoanHTTPFetcher(this.renderer);
      this.storage = new NewLoanStorage(this.customerId);
      return true;
    } catch (err) {
      console.log("Error al configurar formulario", err);
      return false;
    }
  }

  async render() {
    try {
      this.renderer.mount(SELECT_CAMPAIGN_SCREEN_ID);
      this.storage.saveCurrentForm(SELECT_CAMPAIGN_SCREEN_ID);
      this.list = document.getElementById(ID_SELECT_CAMPAIGN_LIST);
      this.list.replaceChildren();
      setSpinner(SELECT_CAMPAIGN_SCREEN_ID);
      const campaignsResp = await this.fetcher.get("/campaigns", {
        customerId: props.customerId,
      });
      this.renderer.destroy(ID_SPINNER);
      if (!campaignsResp || !campaignsResp.campaigns?.length) {
        const noResultsEl = document.createElement("p");
        noResultsEl.textContent =
          "No existen Campañas disponibles para el cliente";
        this.list.appendChild(noResultsEl);
      } else {
        const { cuil, emailList, customerName } = campaignsResp;
        this.storage.saveCustomerData({
          cuil,
          emailList,
          customerName,
        });
        campaignsResp.campaigns.forEach(
          ({ campaignId, description, startDate, endDate }) => {
            const campItemEl = document.createElement("li");
            campItemEl.classList.add("newLoan__selectionScreen__listItem");
            campItemEl.id = campaignId;
            campItemEl.addEventListener("click", (ev) => {
              this.storage.saveSelectedCampaign(campItemEl.id);
              this.renderer.navigate(SELECT_PRODUCT_SCREEN_ID);
            });
            const titleEl = document.createElement("h3");
            titleEl.textContent = description;
            campItemEl.appendChild(titleEl);
            const startDateEl = document.createElement("p");
            startDateEl.textContent = `Fecha inicio: ${formatDate(startDate)}`;
            campItemEl.appendChild(startDateEl);
            const endDateEl = document.createElement("p");
            endDateEl.textContent = `Fecha fin: ${formatDate(endDate)}`;
            campItemEl.appendChild(endDateEl);

            this.list.appendChild(campItemEl);
          }
        );
      }
    } catch (err) {
      console.log("Error al renderizar Select campaigns", err);
    }
  }
}

/***************** SELECT PRODUCT ***************** */
/**
 * Clase para formulario de seleccionar un producto de una campaña
 */
class SelectProduct {
  constructor(customerId, renderer) {
    this.customerId = customerId;
    this.renderer = renderer;
    if (this.init()) {
      this.render();
    }
  }

  init() {
    try {
      this.fetcher = new NewLoanHTTPFetcher(this.renderer);
      this.storage = new NewLoanStorage(this.customerId);
      return true;
    } catch (err) {
      console.log("Error al configurar formulario", err);
      return false;
    }
  }

  async render() {
    this.renderer.mount(SELECT_PRODUCT_SCREEN_ID);
    this.storage.saveCurrentForm(SELECT_PRODUCT_SCREEN_ID);
    this.list = document.getElementById(ID_SELECT_PRODUCT_LIST);
    this.list.replaceChildren();
    setSpinner(SELECT_PRODUCT_SCREEN_ID);
    const campaignId = this.storage.selectedCampaign;
    const products = await this.fetcher.get("/campaign/products", {
      CUIL: this.storage.customerData.cuil,
      campaignId,
    });
    this.renderer.destroy(ID_SPINNER);
    if (!products || !products.length) {
      const noResultsEl = document.createElement("p");
      noResultsEl.textContent =
        "No existen Préstamos Precalificados Electrónicos para el cliente";
      this.list.appendChild(noResultsEl);
    } else {
      products.forEach((product) => {
        const { productId, description, state, channel, branch } = product;
        const prodItemEl = document.createElement("li");
        prodItemEl.classList.add("newLoan__selectionScreen__listItem");
        prodItemEl.id = productId;
        prodItemEl.addEventListener("click", (ev) => {
          this.storage.saveSelectedProduct(product);
          this.renderer.navigate(SELECT_PLAN_SCREEN_ID);
        });
        const titleEl = document.createElement("h3");
        titleEl.textContent = description;
        prodItemEl.appendChild(titleEl);
        const estadoEl = document.createElement("p");
        estadoEl.textContent = `Estado: ${state}`;
        prodItemEl.appendChild(estadoEl);
        const canalEl = document.createElement("p");
        canalEl.textContent = `Canal: ${channel}`;
        prodItemEl.appendChild(canalEl);
        const sucursalEl = document.createElement("p");
        sucursalEl.textContent = `Sucursal: ${branch}`;
        prodItemEl.appendChild(sucursalEl);

        this.list.appendChild(prodItemEl);
      });
    }
  }
}

/***************** SELECT PLAN ***************** */
/**
 * Clase para formulario de seleccionar un plan de un producto
 */
class SelectPlan {
  constructor(customerId, renderer) {
    this.customerId = customerId;
    this.renderer = renderer;
    if (this.init()) {
      this.render();
    }
  }

  init() {
    try {
      this.fetcher = new NewLoanHTTPFetcher(this.renderer);
      this.storage = new NewLoanStorage(this.customerId);
      return true;
    } catch (err) {
      console.log("Error al configurar formulario", err);
      return false;
    }
  }

  async sendPlanConfirmation({
    productId,
    installmentQuantity,
    totalAmount,
    installmentAmount,
    campaignId,
    tna,
    tem,
    tea,
    cft,
    module,
    branch,
    account,
    subAccount,
    operationType,
    currency,
    emailList,
    customerName,
  }) {
    setSpinner(ID_SELECT_PLAN_EMAIL_CONTAINER);
    this.list.childNodes.forEach((child) =>
      child.classList.add("banCo-newLoan-unclickable")
    );
    this.renderer.hide(ID_LINK_VIEW_PRE_QUALIFIED);
    this.amountBtn.disabled = true;
    const confirmationResp = await this.getLoanConfirmation({
      InstallmentQuantity: installmentQuantity,
      InstallmentAmount: installmentAmount,
      TNA: tna,
      TEM: tem,
      TEA: tea,
      cft,
      Branch: branch,
      AccountNumber: account,
      SubAccountNumber: subAccount,
      OperationType: operationType,
      Module: module,
      Currency: currency,
      Amount: totalAmount,
      CampaignId: campaignId,
      ProductoId: productId,
      Emails: emailList,
      CustomerName: customerName,
    });
    this.renderer.destroy(ID_SPINNER);
    if (confirmationResp?.errorCode === "0") {
      // exito
      this.storage.saveConfirmData(confirmationResp);
      this.renderer.navigate(CONFIRM_LOAN_SCREEN_ID);
    } else {
      showErrorBanner(
        `Error de confirmación del préstamo, codigo ${confirmationResp?.errorCode}`,
        this.renderer,
        5000
      );
      this.list.childNodes.forEach((child) =>
        child.classList.remove("banCo-newLoan-unclickable")
      );
      this.amountBtn.disabled = false;
      this.renderer.show(ID_LINK_VIEW_PRE_QUALIFIED);
    }
  }

  renderModalContent({ installmentQuantity, totalAmount, installmentAmount }) {
    const contentEl = document.createElement("div");

    const amountEl = document.createElement("p");
    amountEl.classList.add("newLoan__modalContent__amount");
    amountEl.textContent = `${formatAmount(totalAmount)}`;
    const installmentsEl = document.createElement("p");
    installmentsEl.classList.add("newLoan__modalContent__installments");
    installmentsEl.innerHTML = `<span>${installmentQuantity}</span> cuotas de <span>${formatAmount(
      installmentAmount
    )}</span>`;

    contentEl.appendChild(amountEl);
    contentEl.appendChild(installmentsEl);

    return contentEl;
  }

  renderPlansList(plans) {
    this.renderer.mount(ID_SELECT_PLAN_LIST);
    if (!plans || !plans.length) {
      const noResultsEl = document.createElement("p");
      noResultsEl.classList.add("banCo-newLoan-centered");
      noResultsEl.textContent = "No se encontraron planes disponibles";
      this.list.appendChild(noResultsEl);
    } else {
      let isValidEmail = true; // TODO cambiar a false cuando se habilite pedir email a ususario
      // mostrar email si ya existe o solicitarlo si no
      const email = this.storage.customerData.emailList[0];
      const emailContainerEl = this.renderer.mount(
        ID_SELECT_PLAN_EMAIL_CONTAINER
      );
      const emailLabelEl = emailContainerEl?.querySelector("label");
      const emailInputEl = emailContainerEl?.querySelector("label > input");
      const emailErrorMsgEl = emailContainerEl?.querySelector("p");
      if (email) {
        emailLabelEl.childNodes[0].textContent = "";
        emailInputEl.disabled = true;
        emailInputEl.value = email;
        this.renderer.hide(emailErrorMsgEl);
        isValidEmail = true;
      } else {
        // eliminar este else cuando se habilite pedir email a ususario
        this.renderer.unmount(ID_SELECT_PLAN_EMAIL_CONTAINER);
      }

      // TODO descomentar cuando se habilite pedir email a ususario
      /* if (validateEmail(emailInputEl.value)) {
        isValidEmail = true;
      }
      const newEmailInputEl = removeListenersFromElement(emailInputEl);
      newEmailInputEl?.addEventListener("keyup", (ev) => {
        const value = ev.target.value;
        if (value === "") {
          isValidEmail = false;
          this.renderer.hide(emailErrorMsgEl);
          return;
        }
        if (!validateEmail(value)) {
          isValidEmail = false;
          this.renderer.show(emailErrorMsgEl);
          return;
        }

        this.renderer.hide(emailErrorMsgEl);
        isValidEmail = true;
      }); */

      plans.forEach((plan) => {
        const {
          productId,
          installmentQuantity,
          totalAmount,
          installmentAmount,
        } = plan;
        const planItemEl = document.createElement("li");
        planItemEl.classList.add("newLoan__selectionScreen__listItem");
        planItemEl.classList.add("newLoan__selectionScreen__listItemPlan");
        planItemEl.id = productId;
        planItemEl.addEventListener("click", async (ev) => {
          if (!isValidEmail) {
            // newEmailInputEl.focus(); descomentar cuando se habilite pedir email a ususario
            return showErrorBanner(
              "Igrese un email válido",
              this.renderer,
              2100
            );
          }
          this.list.childNodes.forEach((child) => {
            if (child === planItemEl) {
              planItemEl.classList.add(
                "newLoan__selectPlan__listItem-selected"
              );
            } else {
              child.classList.remove("newLoan__selectPlan__listItem-selected");
            }
          });
          showModal(this.renderer, {
            message: "Está seguro que desea solicitar este plan?",
            onAccepted: () =>
              this.sendPlanConfirmation({
                ...plan,
                ...this.storage.selectedProduct,
                ...this.storage.customerData,
              }),
            content: this.renderModalContent(plan),
          });
        });

        const amountEl = document.createElement("span");
        amountEl.classList.add("newLoan__selectionScreen__listItemPlan-amount");
        amountEl.textContent = `${formatAmount(totalAmount)}`;
        planItemEl.appendChild(amountEl);

        const installmentsContainer = document.createElement("p");
        installmentsContainer.classList.add(
          "newLoan__selectionScreen__listItemPlan-installmentsContainer"
        );
        const installmentsQty = document.createElement("span");
        installmentsQty.classList.add(
          "newLoan__selectionScreen__listItemPlan-installmentsQty"
        );
        installmentsQty.textContent = `${installmentQuantity} Cuotas de`;
        installmentsContainer.appendChild(installmentsQty);
        const installmentsAmount = document.createElement("span");
        installmentsAmount.classList.add(
          "newLoan__selectionScreen__listItemPlan-installmentsAmount"
        );
        installmentsAmount.textContent = `${formatAmount(installmentAmount)}`;
        installmentsContainer.appendChild(installmentsAmount);

        planItemEl.appendChild(installmentsContainer);
        this.list.appendChild(planItemEl);
      });
    }
  }

  async getLoanConfirmation(payload) {
    const confirmation = await this.fetcher.post("", payload);

    return confirmation;
  }

  async renderPreQualifiedLoanPlans() {
    this.storage.saveAnotherAmount("0");
    const campaignId = this.storage.selectedCampaign;
    const { productId } = this.storage.selectedProduct;
    this.renderer.unmount(ID_SELECT_PLAN_OTRO_MONTO_FORM);
    this.renderer.unmount(ID_LINK_VIEW_PRE_QUALIFIED);
    this.list = document.getElementById(ID_SELECT_PLAN_LIST);
    this.list.replaceChildren();
    setSpinner(SELECT_PLAN_SCREEN_ID);
    const plans = await this.fetcher.get("/campaign/product/plans", {
      CUIL: this.storage.customerData.cuil,
      campaignId,
      productId,
    });
    this.renderer.destroy(ID_SPINNER);
    if (plans?.length) {
      this.amountBtn.disabled = false;
    }

    this.renderPlansList(plans);
  }

  async renderRecalculatedLoanPlans(amount) {
    if (Number(amount) <= 0 || amount === "" || amount === "undefined")
      return showErrorBanner("Debe ingresar un monto válido", this.renderer);
    this.storage.saveAnotherAmount(amount);
    const anotherAmountText = this.renderer.mount(
      ID_SELECT_PLAN_OTRO_MONTO_TEXT
    );
    anotherAmountText.textContent = `$ ${amount}`;

    this.list = document.getElementById(ID_SELECT_PLAN_LIST);
    this.list.replaceChildren();
    setSpinner(SELECT_PLAN_SCREEN_ID);
    const campaignId = this.storage.selectedCampaign;
    const productId = this.storage.selectedProduct.productId;
    const plans = await this.fetcher.get("/campaign/product/recalculate", {
      CUIL: this.storage.customerData.cuil,
      campaignId,
      productId,
      amount,
    });
    this.renderer.destroy(ID_SPINNER);
    if (plans !== undefined && !plans?.length) {
      // Errores que trae el servicio de recalculo, monto no permitido etc. mensajes del back
      showErrorBanner("Error al recalcular monto", this.renderer, 5000);
    }
    const filteredValidPlans = plans.filter(plan => plan.installmentQuantity > 0);
    if (!filteredValidPlans?.length) {
      // Error por superar monto máximo
      showErrorBanner("El monto seleccionado excede el máximo precalificado", this.renderer, 5000);
    }
    this.renderer.unmount(ID_SELECT_PLAN_OTRO_MONTO_FORM);
    const viewPreQualifiedLink = document.getElementById(
      ID_LINK_VIEW_PRE_QUALIFIED
    );
    const newViewPreQualifiedLink =
      removeListenersFromElement(viewPreQualifiedLink);
    newViewPreQualifiedLink.addEventListener("click", async () => {
      this.renderer.unmount(ID_SELECT_PLAN_OTRO_MONTO_TEXT);
      await this.renderPreQualifiedLoanPlans();
    });
    this.renderer.mount(ID_LINK_VIEW_PRE_QUALIFIED);
    this.renderPlansList(filteredValidPlans);
  }

  async render() {
    this.renderer.mount(SELECT_PLAN_SCREEN_ID);
    this.storage.saveCurrentForm(SELECT_PLAN_SCREEN_ID);
    this.renderer.unmount(ID_SELECT_PLAN_OTRO_MONTO_FORM);
    this.renderer.unmount(ID_SELECT_PLAN_OTRO_MONTO_TEXT);
    const amountInput = document.getElementById(
      ID_SELECT_PLAN_OTRO_MONTO_FORM_INPUT
    );
    const amountBtn = document.getElementById(ID_SELECT_PLAN_OTRO_MONTO_BUTTON);
    this.amountBtn = removeListenersFromElement(amountBtn);
    this.amountBtn.addEventListener("click", (ev) => {
      amountInput.value = "";
      this.renderer.unmount(ID_SELECT_PLAN_OTRO_MONTO_TEXT);
      this.renderer.mount(ID_SELECT_PLAN_OTRO_MONTO_FORM);
      this.renderer.unmount(ID_SELECT_PLAN_LIST);
      this.renderer.unmount(ID_SELECT_PLAN_EMAIL_CONTAINER);
    });
    const calcularBtn = document.getElementById(
      ID_SELECT_PLAN_OTRO_MONTO_CALCULAR
    );
    const newCalcularBtn = removeListenersFromElement(calcularBtn);
    newCalcularBtn.addEventListener("click", async (ev) => {
      ev.stopPropagation();
      await this.renderRecalculatedLoanPlans(amountInput.value);
    });
    const cancelarBtn = document.getElementById(
      ID_SELECT_PLAN_OTRO_MONTO_CANCELAR
    );
    const newCancelarBtn = removeListenersFromElement(cancelarBtn);
    newCancelarBtn.addEventListener("click", async (ev) => {
      ev.stopPropagation();
      this.renderer.unmount(ID_SELECT_PLAN_OTRO_MONTO_FORM);
      this.renderer.unmount(ID_SELECT_PLAN_OTRO_MONTO_TEXT);
      await this.renderPreQualifiedLoanPlans();
    });

    if (
      !this.storage.anotherAmount ||
      this.storage.anotherAmount === "undefined" ||
      this.storage.anotherAmount === "0"
    ) {
      await this.renderPreQualifiedLoanPlans();
    } else {
      await this.renderRecalculatedLoanPlans(this.storage.anotherAmount);
    }
  }
}

/***************** CONFIRM LOAN ***************** */
/**
 * Clase para mostrar datos de confirmación de préstamo
 */
class ConfirmLoan {
  constructor(customerId, renderer) {
    this.customerId = customerId;
    this.renderer = renderer;
    if (this.init()) {
      this.render();
    }
  }

  init() {
    try {
      this.storage = new NewLoanStorage(this.customerId);
      return true;
    } catch (err) {
      console.log("Error al configurar formulario", err);
      return false;
    }
  }

  renderInfoSection(items) {
    const infoDataContainer = document.getElementById(
      ID_CONFIRM_LOAN_INFO_DATA_CONTAINER
    );
    const infoSection = document.createElement("div");
    infoSection.classList.add("newLoan__confirmLoanScreen__info__section");
    items.forEach((item) => {
      const infoSectionItem = document.createElement("div");
      infoSectionItem.classList.add(
        "newLoan__confirmLoanScreen__info__sectionItem"
      );
      const infoSectionItemSubTitle = document.createElement("span");
      infoSectionItemSubTitle.classList.add(
        "newLoan__confirmLoanScreen__info__sectionItemSubtitle"
      );
      infoSectionItemSubTitle.textContent = item.label;
      const infoSectionItemValue = document.createElement("span");
      infoSectionItemValue.classList.add(
        "newLoan__confirmLoanScreen__info__sectionItemValue"
      );
      infoSectionItemValue.textContent = item.value;
      infoSectionItem.appendChild(infoSectionItemSubTitle);
      infoSectionItem.appendChild(infoSectionItemValue);
      infoSection.appendChild(infoSectionItem);
      infoDataContainer.appendChild(infoSection);
    });
  }

  async render() {
    const headerTitle = document.getElementById(ID_HEADER_TITLE);
    headerTitle.textContent = "Ticket préstamo";

    this.storage.saveCurrentForm(CONFIRM_LOAN_SCREEN_ID);
    this.screen = this.renderer.mount(CONFIRM_LOAN_SCREEN_ID);
    this.info = document.getElementById(ID_CONFIRM_LOAN_INFO);
    const infoHeader = document.getElementById(ID_CONFIRM_LOAN_INFO_HEADER);
    const confirmData = this.storage.confirmData;
    const noResultsEl = document.createElement("p");
    noResultsEl.textContent = "No se pudo obtener la data de confirmación";
    if (!confirmData || Object.keys(confirmData).length === 0) {
      this.screen.appendChild(noResultsEl);
      this.renderer.unmount(this.info);
    } else {
      const title = infoHeader.querySelector("h3");
      title.textContent = "Préstamo precalificado";
      const date = infoHeader.querySelector("p");
      date.textContent = `${formatDate(confirmData.loanDate)} - ${
        confirmData.loanDate.split("T")[1]
      }`;

      let section = [{ label: "Importe", value: `$ ${confirmData.amount}` }];
      this.renderInfoSection(section);

      section = [{ label: "Cuenta", value: confirmData.accountNumber }];
      this.renderInfoSection(section);

      section = [
        { label: "Nro Subcuenta", value: confirmData.subAccountNumber },
        { label: "Nro Operación", value: confirmData.certificate },
      ];
      this.renderInfoSection(section);

      section = [
        { label: "Nro Cuotas", value: confirmData.installmentQuantity },
        { label: "Valor cuotas", value: confirmData.installmentAmount },
      ];
      this.renderInfoSection(section);

      section = [
        { label: "TNA", value: confirmData.tna },
        { label: "TEA", value: confirmData.tea },
        { label: "TEM", value: confirmData.tem },
        { label: "CFT", value: confirmData.cft },
      ];
      this.renderInfoSection(section);
    }
    this.storage.reset();
  }
}

// Mantener el orden en que aparecen las pantallas para la correcta navegacion
const configScreens = [
  {
    id: SELECT_CAMPAIGN_SCREEN_ID,
    Component: SelectCampaign,
    name: "selectCampaignScreen",
  },
  {
    id: SELECT_PRODUCT_SCREEN_ID,
    Component: SelectProduct,
    name: "selectProductScreen",
  },
  {
    id: SELECT_PLAN_SCREEN_ID,
    Component: SelectPlan,
    name: "selectPlanScreen",
  },
  {
    id: CONFIRM_LOAN_SCREEN_ID,
    Component: ConfirmLoan,
    name: "confirmLoanScreen",
  },
];

/***************** HEADER ***************** */
/**
 * Clase para mostrar un header y opcion de regresar al formulario anterior
 */
class Header {
  constructor(customerId, renderer) {
    this.customerId = customerId;
    this.renderer = renderer;
    this.init();
    this.render();
  }

  init() {
    this.storage = new NewLoanStorage(this.customerId);
  }

  render() {
    const arrow = document.getElementById(ID_LEFT_ARROW);
    const newArrow = removeListenersFromElement(arrow);
    newArrow.addEventListener("click", () => {
      if (this.storage.currentForm === SELECT_PLAN_SCREEN_ID)
        this.storage.saveAnotherAmount("0");
      const currFormIdx = configScreens.findIndex(
        (screen) => screen.id === this.storage.currentForm
      );
      if (currFormIdx > 0) {
        this.renderer.navigate(configScreens[currFormIdx - 1].id);
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
    new Header(this.customerId, this);
    this.storage = new NewLoanStorage(this.customerId);
    this.navigate(this.storage.currentForm || SELECT_CAMPAIGN_SCREEN_ID);
    this.unmount(ID_ERROR_BANNER);
  }

  navigate(screenId) {
    try {
      // this.storage.saveAnotherAmount("0");
      configScreens.forEach((screen) => {
        if (screen.id === screenId) {
          this[screen.name] = new screen.Component(this.customerId, this);
          if (
            screen.id === SELECT_CAMPAIGN_SCREEN_ID ||
            screen.id === CONFIRM_LOAN_SCREEN_ID
          ) {
            this.unmount(ID_LEFT_ARROW);
          } else {
            this.mount(ID_LEFT_ARROW);
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

  mount(element) {
    let currentEl;
    try {
      if (typeof element === "string") {
        currentEl = document.getElementById(element);
      } else {
        currentEl = element;
      }

      currentEl.style.display = "block";
    } catch (err) {
      console.log("Error al renderizar elemento", err);
    }

    return currentEl;
  }

  unmount(element) {
    let currentEl;
    try {
      if (typeof element === "string") {
        currentEl = document.getElementById(element);
      } else {
        currentEl = element;
      }

      currentEl.style.display = "none";
    } catch (err) {
      console.log("Error al desmontar elemento", err);
    }
  }

  hide(element) {
    let currentEl;
    try {
      if (typeof element === "string") {
        currentEl = document.getElementById(element);
      } else {
        currentEl = element;
      }

      currentEl.classList.remove("banCo-newLoan-visible");
      currentEl.classList.add("banCo-newLoan-hidden");
    } catch (err) {
      console.log("Error al ocultar elemento", err);
    }
  }

  show(element) {
    let currentEl;
    try {
      if (typeof element === "string") {
        currentEl = document.getElementById(element);
      } else {
        currentEl = element;
      }

      currentEl.classList.remove("banCo-newLoan-hidden");
      currentEl.classList.add("banCo-newLoan-visible");
    } catch (err) {
      console.log("Error al mostrar elemento", err);
    }
  }

  destroy(element) {
    let currentEl;
    try {
      if (typeof element === "string") {
        currentEl = document.getElementById(element);
      } else {
        currentEl = element;
      }

      currentEl.remove();
    } catch (err) {
      console.log("Error al destruir elemento", err);
    }
  }
}

/***************** RUN !!! ***************** */
console.log("Ruuunnnn");
let renderer;
try {
  renderer = new Renderer(propsFake.customerId);
  renderer.mount(ID_CONTENT_CONTAINER);
  const submitButton = document.querySelector("button[type='submit']");
  console.log("submitButton =>", submitButton);
  if(submitButton) {
    submitButton.innerText = "Finalizar flujo";
    submitButton.textContent = "Finalizar flujo";
  }
} catch(err) {
  const contentContainer = document.getElementById(ID_CONTENT_CONTAINER);
  if (contentContainer) {
    contentContainer.style.display = "none";
  }
  const mainContainer = document.getElementById(ID_MAIN_CONTAINER);
  const errorMsgEl = document.createElement("p");
  errorMsgEl.textContent = "Ocurrió un error inesperado";
  errorMsgEl.classList.add("banCo-newLoan-centered");
  mainContainer?.appendChild(errorMsgEl); 
  console.log("Error general", err);
}
