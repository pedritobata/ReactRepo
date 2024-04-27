/**
 * Clase para formulario de seleccionar producto de una campaña
 */
class SelectProducts {
  constructor(customerId) {
    this.customerId = customerId;
    if (this.init()) {
      this.start();
    }
  }

  init() {
    try {
      this.list = document.getElementById('id_selectProduct_list');
      if (
        !this.list ||
        !window.newLoanBanCo?.NewLoanHTTPFetcher ||
        !window.newLoanBanCo?.NewLoanStorage
      )
        throw new Error();

      this.fetcher = new window.newLoanBanCo.NewLoanHTTPFetcher();
      // this.utils = new window.newLoanBanCo.NewLoanUtilsBanCo();
      this.storage = new window.newLoanBanCo.NewLoanStorage(this.customerId);
      return true;
    } catch (err) {
      console.log('Error al configurar formulario', err);
      return false;
    }
  }

  async start() {
    const campaignId = this.storage.getSelectedCampaign();
    // TODO agregar el param id de campaña a la petición
    const products = await this.fetcher.get(
      `/Customers/document-types/?personType=PJ`
    );
    const temp = products.data.documentTypes; // TODO cambiar por el real campo!!
    const noResultsEl = document.createElement('p', {
      text: 'No se encontraron productos disponibles',
    });
    if (!temp || !temp.length) {
      this.list.appendChild(noResultsEl);
    } else {
      this.list.replaceChildren();
      temp.forEach((prod) => {
        const prodItemEl = document.createElement('li');
        // prodItemEl.classList.add('selectProduct__listItem');
        prodItemEl.id = prod.code;
        prodItemEl.addEventListener('click', (ev) => {
          this.storage.saveSelectedProduct(prodItemEl.id);
          // alert('seleccionado:' + prodItemEl.id);
        });
        const titleEl = document.createElement('h3');
        titleEl.textContent = prod.description;
        prodItemEl.appendChild(titleEl);
        const estadoEl = document.createElement('p');
        estadoEl.textContent = `Estado: ${prod.code}`;
        prodItemEl.appendChild(estadoEl);
        const canalEl = document.createElement('p');
        canalEl.textContent = `Canal: ${prod.code}`;
        prodItemEl.appendChild(canalEl);
        const sucursalEl = document.createElement('p');
        sucursalEl.textContent = `Sucursal: ${prod.code}`;
        prodItemEl.appendChild(sucursalEl);

        const link = document.createElement('a');
        link.classList.add('selectProduct__listItem');
        link.setAttribute('href', '/seleccionar-plan/html/index.html');
        link.appendChild(prodItemEl);

        this.list.appendChild(link);
      });
    }
  }
}

new SelectProducts(customerId);
