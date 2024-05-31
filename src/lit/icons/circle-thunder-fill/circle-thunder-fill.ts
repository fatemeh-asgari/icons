import {html} from "lit";
import {TapIcon} from "../../icon";

export class CircleThunderFillIcon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12.6821 6C12.574 6.0094 12.4736 6.05457 12.4019 6.12651L12.3539 6.18534L8.05756 12.6915L8.01822 12.7708C7.97 12.9103 8.01928 13.0633 8.14479 13.1601L8.2138 13.2035L8.28157 13.2312L8.35353 13.2481L8.42804 13.2538L11.5564 13.2537L10.852 17.5722L10.8493 17.6587C10.8664 17.8281 11.0145 17.9711 11.2151 17.9962C11.3592 18.0142 11.5017 17.9668 11.5958 17.8739L11.6461 17.8128L15.9424 11.3067L15.9818 11.2274C16.03 11.0878 15.9807 10.9348 15.8552 10.8381L15.7862 10.7947L15.7184 10.767L15.6465 10.75L15.572 10.7443L12.4423 10.744L13.148 6.42595L13.1507 6.33948C13.136 6.19429 13.0251 6.06845 12.8674 6.01966L12.7849 6.00195L12.6821 6Z" fill="currentColor"/></svg>`);
  }
}
