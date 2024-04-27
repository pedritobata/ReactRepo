/**
 * Clase para formulario de seleccionar campaña
 */
class SelectCampaigns {
  constructor(customerId) {
    this.customerId = customerId;
    if (this.init()) {
      this.start();
    }
  }

  init() {
    try {
      this.list = document.getElementById('id_selectCampana_list');
      if (
        !this.list ||
        !window.newLoanBanCo?.NewLoanHTTPFetcher ||
        !window.newLoanBanCo?.NewLoanStorage
      )
        throw new Error();

      if (!this.list) throw new Error();

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
    console.log('start =>', this.fetcher);
    const campaigns = await this.fetcher.get(
      `/Customers/document-types/?personType=PJ`
    );
    const temp = campaigns.data.documentTypes; // TODO cambiar por el real campo!!
    const noResultsEl = document.createElement('p', {
      text: 'No se encontraron campañas disponibles',
    });
    if (!temp || !temp.length) {
      this.list.appendChild(noResultsEl);
    } else {
      this.list.replaceChildren();
      temp.forEach((camp) => {
        const campItemEl = document.createElement('li');
        // campItemEl.classList.add('selectCampana__listItem');
        campItemEl.id = camp.code;
        campItemEl.addEventListener('click', (ev) => {
          this.storage.saveSelectedCampaign(campItemEl.id);
          // alert('seleccionado:' + campItemEl.id);
        });
        const titleEl = document.createElement('h3');
        titleEl.textContent = camp.description;
        campItemEl.appendChild(titleEl);
        const startDateEl = document.createElement('p');
        startDateEl.textContent = `Fecha inicio: ${camp.code}`;
        campItemEl.appendChild(startDateEl);
        const endDateEl = document.createElement('p');
        endDateEl.textContent = `Fecha fin: ${camp.code}`;
        campItemEl.appendChild(endDateEl);

        const link = document.createElement('a');
        link.classList.add('selectCampana__listItem');
        link.setAttribute('href', '/seleccionar-producto/html/index.html');
        link.appendChild(campItemEl);

        this.list.appendChild(link);
      });
    }
  }
}

new SelectCampaigns(customerId);
