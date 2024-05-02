const propsFake = {
  token:
    "eyJhbGciOiJSUzI1NiIsInR5cCI6ImF0K2p3dCJ9.eyJuYmYiOjE3MTQ0OTM5OTUsImV4cCI6MTcxNDQ5NTc5NSwiaXNzIjoiaHR0cDovL3VzZXItc2VydmljZS5uNS5zdmMuY2x1c3Rlci5sb2NhbDo4MDgwIiwibmFtZSI6ImFkbWluIiwic3ViIjoiMWU3OTYzZWItZDM2YS00ODQ3LWEzMWMtYzg2MjlmOGNjZGViIiwiYXV0aF90aW1lIjoiMTcxNDQ5Mzk5NSIsImlkcCI6ImxvY2FsIiwicm9sZSI6IiIsInNwYS1lbWFpbCI6IjA0ZjYwL29Vdkg5SzNMdU1ORGZDWGJmMVQxTi9Lb21ucEZXSWVJT1hIYUU9Iiwic3BhLXVzZXIiOiJ5OGVQWC8xZGZQeUFGeThkd0ZLMkV2ZDc3Q2h6M3pMWTZkbkhUYjBIcndNPSIsInNwYS1rZXkiOiJuSSsyNUtPVE1TZS9QQ3Z5N0w5WUxqNm5HSjhkY3RRcWpoM0tGVzQvY2t3PSIsImF1ZCI6InVzciIsImNsaWVudF9pZCI6InVzZXJzLXNlcnZpY2UiLCJzY29wZSI6WyJvcGVuaWQiLCJiYURhIiwidXNyIl0sImFtciI6WyJwd2QiXX0.PBrBsBJ5pVkxrPgfJ1NppT43fc_aaxuLcX0ud1uTVW_tPsx6aLwNmfGua2OHpRiDGhuJoDbkn1YwS-lycf0A41-Uubaw7nepzrDRky9EkYo_z0RD507mDt5znPmx0IKHsxq6O2KtOXELP1THN_4ZHV4HFOEmq0Pb41X6g4tvttdKYYYUMRf8LdCPKeor0-E4FZacjG4CCKVdzOHu7R4hcMOGI_8RzuK1cmpbDGw7BzuE4UZtsbUgW9gptJbKl6OahX3c5QuDGgQci2uQGyF1gLhgC4eNzSmw9krJBKwQXhJ1SDDHeEtlSz8zO5uyev6y_8IgeyEZGDwSoznZiYwd2g",
  customerId: "1e7963eb-d36a-4847-a31c-c8629f8ccdeb",
};

const dummyCampanas = [
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
];

const dummyProductos = [
  {
    campaignId: "219",
    productId: "583407",
    description: "PASIVOS",
    state: "H",
    channel: "ELECTRONICO",
    branch: "99",
  },
];

const dummyRecalculo = [
  {
    campaignId: "219",
    productId: "583407",
    montoTotal: "4300.07",
    cantidadCuotas: "24",
    montoCuota: "498.70122356100313",
  },
  {
    campaignId: "219",
    productId: "583407",
    montoTotal: "4300.07",
    cantidadCuotas: "48",
    montoCuota: "445.5660114420453",
  },
  {
    campaignId: "219",
    productId: "583407",
    montoTotal: "4300.07",
    cantidadCuotas: "60",
    montoCuota: "440.78566510314687",
  },
];

const dummyPlanes = [
  {
    campaignId: "219",
    productId: "583407",
    montoTotal: "460200",
    cantidadCuotas: "24",
    montoCuota: "53371.75",
  },
  {
    campaignId: "219",
    productId: "583407",
    montoTotal: "515100",
    cantidadCuotas: "48",
    montoCuota: "53373.79",
  },
  {
    campaignId: "219",
    productId: "583407",
    montoTotal: "520600",
    cantidadCuotas: "60",
    montoCuota: "53364.94",
  },
];

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

function showErrorBanner(message, renderer) {
  const timer = setTimeout(() => {
    renderer.unmount(ID_ERROR_BANNER);
    if (timer) clearInterval(timer);
  }, 4500);
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

/***************** SERVICES ***************** */
class NewLoanHTTPFetcher {
  baseUrl = "https://n5develop.bcoctes.com.ar/api/v1/integration/flow/loan";

  constructor() {
    this.configRequest();
  }

  configRequest() {
    const headers = new Headers();
    headers.append("accept", "text/plain");
    headers.append("Content-Type", "application/json-patch+json");
    headers.append("Authorization", `Bearer ${propsFake.token}`);
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
    const controller = new AbortController();
    const idTimer = setTimeout(() => controller.abort(), 20000); // TODO quitar timer!!

    const queryParams = params ? `?${this.encodeQueryData(params)}` : "";
    const url = `${this.baseUrl}${path}${queryParams}`;
    try {
      const response = await fetch(url, {
        ...this.requestOptions,
        signal: controller.signal,
      });
      if (!response.ok) throw new Error("No se obtuvo respuesta del servicio");
      clearTimeout(idTimer); // TODO quitar esta linea!!

      return response.json(); // mandar areglo vacio si no se obtiene data o respuesta!!
    } catch (err) {
      console.log("Error en fetcher", err);
      // TODO enviar arreglo vacio, no dummy!!!!. Quitar los if cuando ya se depliegue
      if (path.includes("campaigns")) {
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
      }

      return [];
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

  saveSelectedProduct(productId) {
    localStorage.setItem(this.buildIdentifier("product"), productId);
  }

  get selectedProduct() {
    return localStorage.getItem(this.buildIdentifier("product"));
  }

  saveAnotherAmount(amount) {
    localStorage.setItem(this.buildIdentifier("anotherAmount"), amount);
  }

  get anotherAmount() {
    return localStorage.getItem(this.buildIdentifier("anotherAmount"));
  }

  saveConfirmData(confirmData) {
    localStorage.setItem(this.buildIdentifier("confirmData"), confirmData);
  }

  get confirmData() {
    return localStorage.getItem(this.buildIdentifier("confirmData"));
  }

  reset() {
    this.saveCurrentForm('');
    this.saveSelectedCampaign('');
    this.saveSelectedProduct('');
    this.saveAnotherAmount('');
    this.saveConfirmData('')
  }
}

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
      // TODO cambiar por la real data!!
      const campaigns = await this.fetcher.get("/campaigns/campaigns", {
        CUIL: "",
      });
      this.renderer.destroy(ID_SPINNER);
      const noResultsEl = document.createElement("p");
      noResultsEl.textContent = "No se encontraron campañas disponibles";
      if (!campaigns || !campaigns.length) {
        this.list.appendChild(noResultsEl);
      } else {
        campaigns.forEach(({ campaignId, description, startDate, endDate }) => {
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
        });
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
      this.fetcher = new NewLoanHTTPFetcher();
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
    // TODO agregar el param id de campaña a la petición. Usar la data real
    const products = await this.fetcher.get("/campaign/products", {
      CUIL: "",
      campaignId,
    });
    this.renderer.destroy(ID_SPINNER);
    const noResultsEl = document.createElement("p");
    noResultsEl.textContent = "No se encontraron productos disponibles";
    if (!products || !products.length) {
      this.list.appendChild(noResultsEl);
    } else {
      products.forEach(({ productId, description, state, channel, branch }) => {
        const prodItemEl = document.createElement("li");
        prodItemEl.classList.add("newLoan__selectionScreen__listItem");
        prodItemEl.id = productId;
        prodItemEl.addEventListener("click", (ev) => {
          this.storage.saveSelectedProduct(prodItemEl.id);
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
      this.fetcher = new NewLoanHTTPFetcher();
      this.storage = new NewLoanStorage(this.customerId);
      return true;
    } catch (err) {
      console.log("Error al configurar formulario", err);
      return false;
    }
  }

  renderPlansList(plans) {
    this.renderer.mount(ID_SELECT_PLAN_LIST);
    const noResultsEl = document.createElement("p");
    noResultsEl.textContent = "No se encontraron planes disponibles";
    if (!plans || !plans.length) {
      this.list.appendChild(noResultsEl);
    } else {
      // TODO realizar el mapeo real!!!
      plans.forEach(({ productId, cantidadCuotas, montoTotal, montoCuota }) => {
        const planItemEl = document.createElement("li");
        planItemEl.classList.add("newLoan__selectionScreen__listItem");
        planItemEl.classList.add("newLoan__selectionScreen__listItemPlan");
        planItemEl.id = productId;
        planItemEl.addEventListener("click", async (ev) => {
          setSpinner(ID_SELECT_PLAN_OTRO_MONTO_BUTTON_CONTAINER);
          planItemEl.classList.add("newLoan__selectPlan__listItem-selected");
          this.list.childNodes.forEach((child) =>
            child.classList.add("banCo-newLoan-unclickable")
          );
          const confirmationResp = await this.getLoanConfirmation(
            planItemEl.id
          );
          this.renderer.destroy(ID_SPINNER);
          if (confirmationResp.codError === "0") {
            // exito
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
              child.classList.remove("banCo-newLoan-unclickable")
            );
          }
        });

        const amountEl = document.createElement("span");
        amountEl.classList.add("newLoan__selectionScreen__listItemPlan-amount");
        amountEl.textContent = `${formatAmount(montoTotal)}`;
        planItemEl.appendChild(amountEl);

        const installmentsContainer = document.createElement("p");
        installmentsContainer.classList.add(
          "newLoan__selectionScreen__listItemPlan-installmentsContainer"
        );
        const installmentsQty = document.createElement("span");
        installmentsQty.classList.add(
          "newLoan__selectionScreen__listItemPlan-installmentsQty"
        );
        installmentsQty.textContent = `${cantidadCuotas} Cuotas de`;
        installmentsContainer.appendChild(installmentsQty);
        const installmentsAmount = document.createElement("span");
        installmentsAmount.classList.add(
          "newLoan__selectionScreen__listItemPlan-installmentsAmount"
        );
        installmentsAmount.textContent = `${formatAmount(montoCuota)}`;
        installmentsContainer.appendChild(installmentsAmount);

        planItemEl.appendChild(installmentsContainer);
        this.list.appendChild(planItemEl);
      });
    }
  }

  async getLoanConfirmation(planId) {
    const confirmation = await this.fetcher.get(
      "confirmation",
      {} // TODO mapear servicio de confirmación!!!
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
    const campaignId = this.storage.selectedCampaign;
    const productId = this.storage.selectedProduct;
    this.renderer.unmount(ID_SELECT_PLAN_OTRO_MONTO_FORM);
    this.renderer.unmount(ID_LINK_VIEW_PRE_QUALIFIED);
    this.list = document.getElementById(ID_SELECT_PLAN_LIST);
    this.list.replaceChildren();
    // TODO agregar el param id del plan a la petición. Usar data real
    setSpinner(SELECT_PLAN_SCREEN_ID);
    const plans = await this.fetcher.get("/campaign/product/plans", {
      CUIL: "",
      campaignId,
      productId,
    });
    this.renderer.destroy(ID_SPINNER);
    if (plans?.length) {
      amountBtn.disabled = false;
    }

    this.renderPlansList(plans);
  }

  async renderRecalculatedLoanPlans(amount, amountBtn) {
    if (Number(amount.value) <= 0 || amount.value === "")
      return showErrorBanner("Debe ingresar un monto válido", this.renderer);
    this.storage.saveAnotherAmount(amount.value);
    this.list = document.getElementById(ID_SELECT_PLAN_LIST);
    this.list.replaceChildren();
    setSpinner(SELECT_PLAN_SCREEN_ID);
    const campaignId = this.storage.selectedCampaign;
    const productId = this.storage.selectedProduct;
    // TODO agregar el param id del plan y el amount.value a la petición. Usar data real
    const plans = await this.fetcher.get("/campaign/product/recalculate", {
      CUIL: "",
      campaignId,
      productId,
      amount: amount.value,
    });
    this.renderer.destroy(ID_SPINNER);
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
    const amountInput = document.getElementById(
      ID_SELECT_PLAN_OTRO_MONTO_FORM_INPUT
    );
    const amountBtn = document.getElementById(ID_SELECT_PLAN_OTRO_MONTO_BUTTON);
    const newAmountBtn = removeListenersFromElement(amountBtn);
    newAmountBtn.addEventListener("click", (ev) => {
      amountInput.value = "";
      this.renderer.mount(ID_SELECT_PLAN_OTRO_MONTO_FORM);
      this.renderer.unmount(ID_SELECT_PLAN_LIST);
    });
    const calcularBtn = document.getElementById(
      ID_SELECT_PLAN_OTRO_MONTO_CALCULAR
    );
    const newCalcularBtn = removeListenersFromElement(calcularBtn);
    newCalcularBtn.addEventListener("click", async (ev) => {
      ev.stopPropagation();
      await this.renderRecalculatedLoanPlans(amountInput, newAmountBtn);
    });
    const cancelarBtn = document.getElementById(
      ID_SELECT_PLAN_OTRO_MONTO_CANCELAR
    );
    const newCancelarBtn = removeListenersFromElement(cancelarBtn);
    newCancelarBtn.addEventListener("click", async (ev) => {
      ev.stopPropagation();
      this.renderer.unmount(ID_SELECT_PLAN_OTRO_MONTO_FORM);
      await this.renderPreQualifiedLoanPlans(newAmountBtn);
    });

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
    const confirmData = JSON.parse(this.storage.confirmData);
    const noResultsEl = document.createElement("p");
    noResultsEl.textContent = "No se pudo obtener la data de confirmación";
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

const renderer = new Renderer(propsFake.customerId);
