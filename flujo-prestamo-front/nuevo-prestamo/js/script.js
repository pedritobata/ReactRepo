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

const dummyConfirmation = {
  title: "Préstamo precalificado",
  fechaNego: "15-Sep-2023",
  horaPrestamo: "8:40 AM",
  importe: "50,000.00",
  cuenta: "455767",
  subCuenta: "1",
  certificado: "517450",
  prestamoCuotas: 24,
  prestamoImpCuotas: "2.989,42",
  tna: "101,00%",
  tea: "163,86%",
  tem: "8,30%",
  cft: "39,67%",
};

/***************** IDS ***************** */
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
const ID_CONFIRM_LOAN_INFO = "id_BanCo_newLoan_ConfirmLoan_info";
const ID_CONFIRM_LOAN_INFO_HEADER = "id_BanCo_newLoan_ConfirmLoan_infoHeader";
const ID_CONFIRM_LOAN_INFO_DATA_CONTAINER =
  "id_BanCo_newLoan_ConfirmLoan_infoDataContainer";

const ID_ERROR_BANNER = "id_BanCo_newLoan_errorBanner";
const ID_SPINNER_TEMPLATE = "id_BanCo_newLoan_spinnerTemplate";
const ID_SPINNER = "id_BanCo_newLoan_spinner";

// let renderer;

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
    // return spinnerClone;
  }
}

function showErrorBanner(message, renderer) {
  const timer = setTimeout(() => {
    renderer.unmount(ID_ERROR_BANNER);
    if (timer) clearInterval(timer);
  }, 4500);
  const closeBtn = document.querySelector(`#${ID_ERROR_BANNER} div span`);
  // closeBtn.parentElement.classList.add('flexible');
  const newCloseBtn = removeListenersFromElement(closeBtn);
  newCloseBtn.addEventListener("click", () => {
    if (timer) clearInterval(timer);
    renderer.unmount(ID_ERROR_BANNER);
  });
  const errorMessage = document.querySelector(`#${ID_ERROR_BANNER} div p`);
  errorMessage.textContent = message;
  renderer.mount(ID_ERROR_BANNER);
}

/* class ErrorBanner {
  static show(message) {
    const timer = setTimeout(() => {
      renderer.unmount(ID_ERROR_BANNER);
      if (timer) clearInterval(timer);
    }, 4500);
    const closeBtn = document.querySelector(`#${ID_ERROR_BANNER} div span`);
    // closeBtn.parentElement.classList.add('flexible');
    const newCloseBtn = removeListenersFromElement(closeBtn);
    newCloseBtn.addEventListener("click", () => {
      if (timer) clearInterval(timer);
      renderer.unmount(ID_ERROR_BANNER);
    });
    const errorMessage = document.querySelector(`#${ID_ERROR_BANNER} div p`);
    errorMessage.textContent = message;
    renderer.mount(ID_ERROR_BANNER);
  }
} */

/***************** SERVICES ***************** */
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
    // return dummyData; // TODO: Eliminar esta linea!!!!!!
    const controller = new AbortController();
    const idTimer = setTimeout(() => controller.abort(), 2000); // TODO quitar timer!!

    const queryParams = params ? `?${this.encodeQueryData(params)}` : "";
    const url = `${this.baseUrl}${path}${queryParams}`;
    try {
      const response = await fetch(url, {
        ...this.requestOptions,
        signal: controller.signal,
      });
      clearTimeout(idTimer); // TODO quitar esta linea!!
      console.log("response =>", response.ok);
      return response.json(); // mandar areglo vacio si no se obtiene data o respuesta!!
    } catch (err) {
      console.log("error en fetcher", err);
      return dummyData.data.documentTypes; // [];
    }
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

  saveAnotherAmount(amount) {
    // this.selectedProduct = productId
    localStorage.setItem(this.buildIdentifier("anotherAmount"), amount);
  }

  get anotherAmount() {
    return localStorage.getItem(this.buildIdentifier("anotherAmount"));
  }

  saveConfirmData(confirmData) {
    // this.selectedProduct = productId
    localStorage.setItem(this.buildIdentifier("confirmData"), confirmData);
  }

  get confirmData() {
    return localStorage.getItem(this.buildIdentifier("confirmData"));
  }

  /* saveSelectedPlan(planId) {
    // this.selectedProduct = productId
    localStorage.setItem(this.buildIdentifier("plan"), planId);
  }

  get selectedPlan() {
    return localStorage.getItem(this.buildIdentifier("plan"));
  } */
}

// window.newLoanBanCo = {};
// window.newLoanBanCo.NewLoanHTTPFetcher = NewLoanHTTPFetcherBanCo;
// window.newLoanBanCo.NewLoanUtils = NewLoanUtilsBanCo;
// window.newLoanBanCo.NewLoanStorage = NewLoanStorageBanCo;

console.log("PROPS =>", props);

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
      this.renderer.mount(SELECT_CAMPAIGN_SCREEN_ID);
      this.storage.saveCurrentForm(SELECT_CAMPAIGN_SCREEN_ID);
      this.list = document.getElementById(ID_SELECT_CAMPAIGN_LIST);
      this.list.replaceChildren();
      setSpinner(SELECT_CAMPAIGN_SCREEN_ID);
      // this.list.appendChild(spinner);
      const campaigns = await this.fetcher.get(
        `/Customers/document-types/?personType=PJ`
      );
      console.log("campaigns => ", campaigns);
      this.renderer.destroy(ID_SPINNER);
      /* const spinner = document.getElementById(ID_SPINNER);
      console.log('spinner => ', spinner);
      spinner.remove(); */
      // this.renderer.unmount(ID_SPINNER);
      // const temp = campaigns.data.documentTypes; // TODO cambiar por el real campo!!
      const noResultsEl = document.createElement("p");
      noResultsEl.textContent = "No se encontraron campañas disponibles";
      // this.list.replaceChildren();
      if (!campaigns || !campaigns.length) {
        this.list.appendChild(noResultsEl);
      } else {
        campaigns.forEach((camp) => {
          const campItemEl = document.createElement("li");
          campItemEl.classList.add("newLoan__selectionScreen__listItem");
          campItemEl.id = camp.code;
          campItemEl.addEventListener("click", (ev) => {
            this.storage.saveSelectedCampaign(campItemEl.id);
            this.renderer.navigate(SELECT_PRODUCT_SCREEN_ID);
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
      // renderer.mount(SELECT_CAMPAIGN_SCREEN_ID);
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
    this.renderer.mount(SELECT_PRODUCT_SCREEN_ID);
    this.storage.saveCurrentForm(SELECT_PRODUCT_SCREEN_ID);
    this.list = document.getElementById(ID_SELECT_PRODUCT_LIST);
    this.list.replaceChildren();
    setSpinner(SELECT_PRODUCT_SCREEN_ID);
    // this.list.appendChild(spinner);
    const campaignId = this.storage.selectedCampaign;
    // TODO agregar el param id de campaña a la petición
    const products = await this.fetcher.get(
      `/Customers/document-types/?personType=PJ`
    );
    console.log("products =>", products);
    this.renderer.destroy(ID_SPINNER);
    // const temp = products.data.documentTypes; // TODO cambiar por el real campo!!
    const noResultsEl = document.createElement("p");
    noResultsEl.textContent = "No se encontraron productos disponibles";
    // this.list.replaceChildren();
    if (!products || !products.length) {
      this.list.appendChild(noResultsEl);
    } else {
      products.forEach((prod) => {
        const prodItemEl = document.createElement("li");
        prodItemEl.classList.add("newLoan__selectionScreen__listItem");
        prodItemEl.id = prod.code;
        prodItemEl.addEventListener("click", (ev) => {
          this.storage.saveSelectedProduct(prodItemEl.id);
          this.renderer.navigate(SELECT_PLAN_SCREEN_ID);
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
    // renderer.mount(SELECT_PRODUCT_SCREEN_ID);
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
      this.fetcher = new NewLoanHTTPFetcher();
      // this.utils = new NewLoanUtilsBanCo();
      this.storage = new NewLoanStorage(this.customerId);
      return true;
    } catch (err) {
      console.log("Error al configurar formulario", err);
      return false;
    }
  }

  renderPlansList(plans) {
    this.renderer.mount(ID_SELECT_PLAN_LIST);
    /*  this.list = document.getElementById(ID_SELECT_PLAN_LIST);
    this.list.replaceChildren(); */
    // const spinner = getSpinner();
    // this.list.appendChild(spinner);
    console.log("plans =>", plans);

    const noResultsEl = document.createElement("p");
    noResultsEl.textContent = "No se encontraron planes disponibles";
    // this.list.replaceChildren();
    if (!plans || !plans.length) {
      this.list.appendChild(noResultsEl);
    } else {
      plans.forEach((plan) => {
        const planItemEl = document.createElement("li");
        // const infoContainer = document.createElement("div");
        // infoContainer.classList.add("newLoan__selectionScreen__listItem");
        planItemEl.classList.add("newLoan__selectionScreen__listItem");
        planItemEl.id = plan.code;
        planItemEl.addEventListener("click", async (ev) => {
          // this.storage.saveSelectedPlan(planItemEl.id);
          // renderer.navigate(SELECT_PLAN_SCREEN_ID);
          // alert('seleccionado:' + planItemEl.id);
          // ID_SELECT_PLAN_OTRO_MONTO_BUTTON_CONTAINER
          /* const buttonContainer = document.getElementById(
            ID_SELECT_PLAN_OTRO_MONTO_BUTTON_CONTAINER
          ); */

          setSpinner(ID_SELECT_PLAN_OTRO_MONTO_BUTTON_CONTAINER);
          // buttonContainer.appendChild(spinner);
          // console.log("buttonContainer =>", buttonContainer);
          // buttonContainer.appendChild();
          planItemEl.classList.add("newLoan__selectPlan__listItem-selected");
          this.list.childNodes.forEach((child) =>
            child.classList.add("unclickable")
          );
          const confirmationResp = await this.getLoanConfirmation(
            planItemEl.id
          );
          // document.getElementById(ID_SPINNER).remove();
          this.renderer.destroy(ID_SPINNER);
          if (confirmationResp.codError === "0") {
            //exito
            this.storage.saveConfirmData(JSON.stringify(confirmationResp));
            this.renderer.navigate(CONFIRM_LOAN_SCREEN_ID);
          } else {
            showErrorBanner(
              "Error de confirmación del préstamo, codigo" +
                confirmationResp.codError,
              this.renderer
            );
            planItemEl.classList.remove(
              "newLoan__selectPlan__listItem-selected"
            );
            this.list.childNodes.forEach((child) =>
              child.classList.remove("unclickable")
            );
          }
        });

        const titleEl = document.createElement("h3");
        titleEl.textContent = plan.description;
        planItemEl.appendChild(titleEl);

        /* const link = document.createElement("a");
    link.classList.add("selectProduct__listItem");
    link.setAttribute("href", "/seleccionar-plan/html/index.html");
    link.appendChild(prodItemEl); */

        this.list.appendChild(planItemEl);
      });
    }
  }

  async getLoanConfirmation(planId) {
    const confirmation = await this.fetcher.get(
      `/Customers/document-types/?personType=PJ`
    );
    const temp = dummyConfirmation;
    if (temp.cuenta) {
      return { ...temp, codError: "0" };
    } else {
      return { ...temp, codError: "1" };
    }
  }

  async renderPreQualifiedLoanPlans(amountBtn) {
    this.storage.saveAnotherAmount("0");
    // get plans data
    const planId = this.storage.selectedPlan;
    this.renderer.unmount(ID_SELECT_PLAN_OTRO_MONTO_FORM);
    this.renderer.unmount(ID_LINK_VIEW_PRE_QUALIFIED);
    this.list = document.getElementById(ID_SELECT_PLAN_LIST);
    this.list.replaceChildren();
    // this.renderer.mount(ID_SELECT_PLAN_LIST);
    // TODO agregar el param id del plan a la petición
    console.log("renderPreQualifiedLoanPlans!!");
    setSpinner(SELECT_PLAN_SCREEN_ID);
    const plans = await this.fetcher.get(
      `/Customers/document-types/?personType=PJ`
    );
    this.renderer.destroy(ID_SPINNER);
    // const temp = plans.data?.documentTypes; // TODO cambiar por el real campo!!
    if (plans?.length) {
      amountBtn.disabled = false;
    }

    this.renderPlansList(plans);
  }

  async renderRecalculatedLoanPlans(amount, amountBtn) {
    console.log("amount.value =>", amount.value);
    if (Number(amount.value) <= 0 || amount.value === "")
      return showErrorBanner("Debe ingresar un monto válido", this.renderer);
    // get plans data
    this.storage.saveAnotherAmount(amount.value);
    // this.renderer.mount(ID_SELECT_PLAN_LIST);
    this.list = document.getElementById(ID_SELECT_PLAN_LIST);
    this.list.replaceChildren();
    setSpinner(SELECT_PLAN_SCREEN_ID);
    const planId = this.storage.selectedPlan;
    // TODO agregar el param id del plan y el amount.value a la petición
    const plans = await this.fetcher.get(
      `/Customers/document-types/?personType=PJ`
    );
    this.renderer.destroy(ID_SPINNER);
    // const temp = plans.data?.documentTypes; // TODO cambiar por el real campo!!
    if (plans?.length) {
      amountBtn.disabled = false;
    } else {
      // Errores que trae el servicio de recalculo, monto no permitido etc. mensajes del back
      return showErrorBanner("Error al recalcular monto", this.renderer);
    }
    this.renderer.unmount(ID_SELECT_PLAN_OTRO_MONTO_FORM);
    const viewPreQualifiedLink = document.getElementById(
      ID_LINK_VIEW_PRE_QUALIFIED
    );
    const newViewPreQualifiedLink =
      removeListenersFromElement(viewPreQualifiedLink);
    newViewPreQualifiedLink.addEventListener("click", async () => {
      await this.renderPreQualifiedLoanPlans(amountBtn);
    });
    this.renderer.mount(ID_LINK_VIEW_PRE_QUALIFIED);
    this.renderPlansList(
      plans.map((plan) => ({ ...plan, description: plan.code }))
    );
  }

  async render() {
    this.renderer.mount(SELECT_PLAN_SCREEN_ID);
    this.storage.saveCurrentForm(SELECT_PLAN_SCREEN_ID);
    this.renderer.unmount(ID_SELECT_PLAN_OTRO_MONTO_FORM);
    // this.renderer.mount(ID_SELECT_PLAN_LIST);
    // this.list = document.getElementById(ID_SELECT_PLAN_LIST);
    const amountInput = document.getElementById(
      ID_SELECT_PLAN_OTRO_MONTO_FORM_INPUT
    );
    const amountBtn = document.getElementById(ID_SELECT_PLAN_OTRO_MONTO_BUTTON);
    const newAmountBtn = removeListenersFromElement(amountBtn);
    newAmountBtn.addEventListener("click", (ev) => {
      amountInput.value = "";
      // ev.preventDefault();
      console.log("newAmountBtn!!");
      this.renderer.mount(ID_SELECT_PLAN_OTRO_MONTO_FORM);
      this.renderer.unmount(ID_SELECT_PLAN_LIST);
    });
    const calcularBtn = document.getElementById(
      ID_SELECT_PLAN_OTRO_MONTO_CALCULAR
    );
    const newCalcularBtn = removeListenersFromElement(calcularBtn);
    newCalcularBtn.addEventListener("click", async (ev) => {
      console.log("amountInput =>", amountInput.value);
      ev.stopPropagation();
      // this.renderer.mount(ID_SELECT_PLAN_LIST);
      // this.renderer.unmount(ID_SELECT_PLAN_OTRO_MONTO_FORM);
      await this.renderRecalculatedLoanPlans(amountInput, newAmountBtn);
    });
    const cancelarBtn = document.getElementById(
      ID_SELECT_PLAN_OTRO_MONTO_CANCELAR
    );
    const newCancelarBtn = removeListenersFromElement(cancelarBtn);
    newCancelarBtn.addEventListener("click", async (ev) => {
      ev.stopPropagation();
      // this.renderer.mount(ID_SELECT_PLAN_LIST);
      this.renderer.unmount(ID_SELECT_PLAN_OTRO_MONTO_FORM);
      await this.renderPreQualifiedLoanPlans(newAmountBtn);
    });

    // renderer?.mount(SELECT_PLAN_SCREEN_ID);
    if (!this.storage.anotherAmount || this.storage.anotherAmount === "0") {
      await this.renderPreQualifiedLoanPlans(newAmountBtn);
    } else {
      await this.renderRecalculatedLoanPlans(
        this.storage.anotherAmount,
        newAmountBtn
      );
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
      // this.fetcher = new NewLoanHTTPFetcher();
      // this.utils = new NewLoanUtilsBanCo();
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
    this.renderer.mount(CONFIRM_LOAN_SCREEN_ID);
    this.storage.saveCurrentForm(CONFIRM_LOAN_SCREEN_ID);
    this.screen = document.getElementById(CONFIRM_LOAN_SCREEN_ID);
    this.info = document.getElementById(ID_CONFIRM_LOAN_INFO);
    const infoHeader = document.getElementById(ID_CONFIRM_LOAN_INFO_HEADER);
    // const infoDataContainer = document.getElementById(ID_CONFIRM_LOAN_INFO_DATA_CONTAINER);
    // const spinner = getSpinner();
    // this.list.appendChild(spinner);
    // const campaignId = this.storage.selectedCampaign;
    // TODO agregar el param id de campaña a la petición
    /* const products = await this.fetcher.get(
      `/Customers/document-types/?personType=PJ`
    ); */
    //console.log("products =>", products);
    const confirmData = JSON.parse(this.storage.confirmData);
    const noResultsEl = document.createElement("p");
    noResultsEl.textContent = "No se pudo obtener la data de confirmación";
    // this.list.replaceChildren();
    if (!confirmData || Object.keys(confirmData).length === 0) {
      this.screen.appendChild(noResultsEl);
      this.renderer.unmount(this.info);
    } else {
      const title = infoHeader.querySelector("h3");
      title.textContent = confirmData.title;
      const date = infoHeader.querySelector("p");
      date.textContent = `${confirmData.fechaNego} - ${confirmData.horaPrestamo}`;

      let section = [{ label: "Importe", value: `$ ${confirmData.importe}` }];
      this.renderInfoSection(section);

      section = [{ label: "Cuenta", value: confirmData.cuenta }];
      this.renderInfoSection(section);

      section = [
        { label: "Nro Subcuenta", value: confirmData.subCuenta },
        { label: "Nro Operación", value: confirmData.certificado },
      ];
      this.renderInfoSection(section);

      section = [
        { label: "Nro Cuotas", value: confirmData.prestamoCuotas },
        { label: "Valor cuotas", value: confirmData.prestamoImpCuotas },
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
    // renderer?.mount(CONFIRM_LOAN_SCREEN_ID);
  }
}

// mantener el orden en que aparecen las pantallas para la correcta navegacion
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
      console.log("currFormIdx =>", arrow);
      const currFormIdx = configScreens.findIndex(
        (screen) => screen.id === this.storage.currentForm
      );
      if (currFormIdx > 0) {
        this.renderer.navigate(configScreens[currFormIdx - 1].id);
      }
    });
    // renderer?.mount(ID_LEFT_ARROW);
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
          // this.mount(screen.id);
          if (
            screen.id === SELECT_CAMPAIGN_SCREEN_ID ||
            screen.id === CONFIRM_LOAN_SCREEN_ID
          ) {
            console.log("screen =>", screenId);
            this.unmount(ID_LEFT_ARROW);
          } else {
            this.mount(ID_LEFT_ARROW);
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
const renderer = new Renderer(props.customerId);
